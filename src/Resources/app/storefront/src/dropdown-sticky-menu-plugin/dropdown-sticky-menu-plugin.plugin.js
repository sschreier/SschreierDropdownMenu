import Plugin from 'src/plugin-system/plugin.class';
import DomAccess from 'src/helper/dom-access.helper';
import ViewportDetection from 'src/helper/viewport-detection.helper';

export default class DropdownStickyMenuPlugin extends Plugin {
    static options = {
        cloneDropdownMainNavigationStickyClass: 'main-navigation-dropdown-sticky',
        positionDropdownStickyMenuIsActive: 120,
        notActiveViewportsDropdownStickyMenu: "'XS', 'SM', 'MD'"
    }

    init() {
        this.PluginManager = window.PluginManager;

        this.subscribeViewportEvent();

        if(this.pluginShouldBeActive()){
            this.initializePlugin();
        }
    }

    createElement(){
        this._dropdownMainNavigationClone = this.el.cloneNode(true);
        this._dropdownMainNavigationClone.classList.add(this.options.cloneDropdownMainNavigationStickyClass);

        DomAccess.querySelector(this._dropdownMainNavigationClone, '.main-navigation').removeAttribute('id');

        document.body.appendChild(this._dropdownMainNavigationClone);
    }

    addEventListener(){
        document.addEventListener('scroll', this.onScroll.bind(this));
    }

    removeEventListener(){
        document.removeEventListener('scroll', this.onScroll.bind(this));
    }

    onScroll(){
        const scrollPosition = document.documentElement.scrollTop;

        if(scrollPosition > this.options.positionDropdownStickyMenuIsActive){
            if(!this._dropdownMainNavigationClone.classList.contains('is--active')) {
                this._dropdownMainNavigationClone.classList.add('is--active');
            }
        } else {
            this._dropdownMainNavigationClone.classList.remove('is--active');
        }
    }

    reinitializePlugin(){
        this.PluginManager.initializePlugin(
            'FlyoutMenu',
            '[data-flyout-menu="true"]',
            {}
        )
    }

    subscribeViewportEvent(){
        document.$emitter.subscribe('Viewport/hasChanged', this.update, {scope: this});
    }

    update(){
        if(this.pluginShouldBeActive()){
            if(this.initialized) return;

            this.initializePlugin();
        }else{
            if(!this.initialized) return;

            this.destroy();
        }
    }

    pluginShouldBeActive(){
        if((this.options.notActiveViewportsDropdownStickyMenu).includes(ViewportDetection.getCurrentViewport())){
            return false;
        }

        return true;
    }

    initializePlugin() {
        this.createElement();
        this.addEventListener();
        this.reinitializePlugin();

        this.initialized = true;
    }

    destroy(){
        this._dropdownMainNavigationClone.remove();

        this.removeEventListener();

        this.initialized = false;
    }
}