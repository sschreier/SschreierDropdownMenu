import ViewportDetection from 'src/helper/viewport-detection.helper';
const { PluginBaseClass } = window;

export default class SschreierDropdownMenuStickyEffectPlugin extends PluginBaseClass {
    static options = {
        dropdownMenuMultiLineOpenLastChildToLeft: false,
        dropdownMenuNumberMainNavigationMenuItemsOpenToLeft: 1,
        dropdownMenuMinimumNumberMainNavigationMenuItemsOpenToLeft: 3,
        dropdownMenuStickyClass: 'nav-main-sticky',
        notActiveViewportsDropdownMenuStickyEffectIsActiveString: "'XS', 'SM', 'MD'",
        positionDropdownMenuStickyEffectIsActive: 120
    }

    init() {
        this.subscribeViewportEvent();

        if (this.pluginShouldBeActive()){
            this.initializePlugin();
        }

        if (this.options.dropdownMenuMultiLineOpenLastChildToLeft && this.dropdownMenuShouldBeActive()) {
            this.setDropdownMenuRight();
        }
    }

    subscribeViewportEvent(){
        document.$emitter.subscribe('Viewport/hasChanged', this.update, {scope: this});
    }

    update(){
        if (this.options.dropdownMenuMultiLineOpenLastChildToLeft && this.dropdownMenuShouldBeActive()) {
            this.setDropdownMenuRight();
        }

        if (this.pluginShouldBeActive()) {
            if(this.initialized) return;

            this.initializePlugin();
        } else {
            if(!this.initialized) return;

            this.destroy();
        }
    }

    dropdownMenuShouldBeActive(){
        this.isBigViewport = ViewportDetection.isLG() || ViewportDetection.isXL() || ViewportDetection.isXXL();

        return this.isBigViewport;
    }

    setDropdownMenuRight(){
        const mainNavigationLinks = document.querySelectorAll('.nav-main .dropdownmenu-open-last-childrens-to-left .main-navigation-menu .main-navigation-menu-list > .nav-item > .nav-item-link-container'),
            dropdownMenuRemoveRight = document.querySelectorAll('.nav-main .dropdownmenu-open-last-childrens-to-left .main-navigation-menu .main-navigation-menu-list > .nav-item > .nav-item-link-container .dropdown-menu');

        let topValue = 0,
            heightValue = ((mainNavigationLinks[0])?(mainNavigationLinks[0].offsetHeight):43),
            row = 1,
            row1Counter = 0,
            row2Counter = 0,
            row3Counter = 0,
            row4Counter = 0,
            row5Counter = 0,
            row1ElementCounter = 0,
            row2ElementCounter = 0,
            row3ElementCounter = 0,
            row4ElementCounter = 0,
            row5ElementCounter = 0,
            numberMainNavigationMenuItemsOpenToLeftLastChild = this.options.dropdownMenuMinimumNumberMainNavigationMenuItemsOpenToLeft,
            numberMainNavigationMenuItemsOpenToLeftSecondLastChild = parseInt(numberMainNavigationMenuItemsOpenToLeftLastChild, 10) + 1,
            numberMainNavigationMenuItemsOpenToLeftThirdLastChild = parseInt(numberMainNavigationMenuItemsOpenToLeftSecondLastChild, 10) + 1;

        for (let i = 0; i < mainNavigationLinks.length; ++i) {
            mainNavigationLinks[i].classList.remove('row-0', 'row-1', 'row-2', 'row-3', 'row-4', 'row-5', 'open-to-left');
        }

        for (let j = 0; j < dropdownMenuRemoveRight.length; ++j) {
            dropdownMenuRemoveRight[j].classList.remove('dropdown-menu-right');
        }

        for (let i = 0; i < mainNavigationLinks.length; ++i) {
            topValue = mainNavigationLinks[i].offsetTop;

            if (topValue < heightValue) {
                row = 1;

                row1ElementCounter += 1;
            }else if (topValue == heightValue) {
                row = 2;

                row2ElementCounter += 1;
            }else if (topValue == (heightValue * 2)) {
                row = 3;

                row3ElementCounter += 1;
            }else if (topValue == (heightValue * 3)) {
                row = 4;

                row4ElementCounter += 1;
            }else if (topValue == (heightValue * 4)) {
                row = 5;

                row5ElementCounter += 1;
            }else if (topValue > (heightValue * 4)) {
                row = 0;
            }

            if (!mainNavigationLinks[i].classList.contains('row-' + row)) {
                mainNavigationLinks[i].classList.add('row-' + row);
            }
        }

        for (let i = 0; i < mainNavigationLinks.length; ++i) {
            topValue = mainNavigationLinks[i].offsetTop;

            if (topValue == heightValue && row1Counter == 0) {
                row1Counter += 1;

                if (!mainNavigationLinks[i - 1].classList.contains('open-to-left') && row1ElementCounter > numberMainNavigationMenuItemsOpenToLeftLastChild) {
                    mainNavigationLinks[i - 1].classList.add('open-to-left');
                }

                if ((this.options.dropdownMenuNumberMainNavigationMenuItemsOpenToLeft == 2 || this.options.dropdownMenuNumberMainNavigationMenuItemsOpenToLeft == 3) && row1ElementCounter > numberMainNavigationMenuItemsOpenToLeftSecondLastChild) {
                    if (!mainNavigationLinks[i - 2].classList.contains('open-to-left')) {
                        mainNavigationLinks[i - 2].classList.add('open-to-left');
                    }
                }

                if (this.options.dropdownMenuNumberMainNavigationMenuItemsOpenToLeft == 3 && row1ElementCounter > numberMainNavigationMenuItemsOpenToLeftThirdLastChild) {
                    if (!mainNavigationLinks[i - 3].classList.contains('open-to-left')) {
                        mainNavigationLinks[i - 3].classList.add('open-to-left');
                    }
                }
            }else if (topValue == (heightValue * 2) && row2Counter == 0) {
                row2Counter += 1;

                if (!mainNavigationLinks[i - 1].classList.contains('open-to-left') && row2ElementCounter > numberMainNavigationMenuItemsOpenToLeftLastChild) {
                    mainNavigationLinks[i - 1].classList.add('open-to-left');
                }

                if ((this.options.dropdownMenuNumberMainNavigationMenuItemsOpenToLeft == 2 || this.options.dropdownMenuNumberMainNavigationMenuItemsOpenToLeft == 3) && row2ElementCounter > numberMainNavigationMenuItemsOpenToLeftSecondLastChild) {
                    if (!mainNavigationLinks[i - 2].classList.contains('open-to-left')) {
                        mainNavigationLinks[i - 2].classList.add('open-to-left');
                    }
                }

                if (this.options.dropdownMenuNumberMainNavigationMenuItemsOpenToLeft == 3 && row2ElementCounter > numberMainNavigationMenuItemsOpenToLeftThirdLastChild) {
                    if (!mainNavigationLinks[i - 3].classList.contains('open-to-left')) {
                        mainNavigationLinks[i - 3].classList.add('open-to-left');
                    }
                }
            }else if (topValue == (heightValue * 3) && row3Counter == 0) {
                row3Counter += 1;

                if (!mainNavigationLinks[i - 1].classList.contains('open-to-left') && row3ElementCounter > numberMainNavigationMenuItemsOpenToLeftLastChild) {
                    mainNavigationLinks[i - 1].classList.add('open-to-left');
                }

                if ((this.options.dropdownMenuNumberMainNavigationMenuItemsOpenToLeft == 2 || this.options.dropdownMenuNumberMainNavigationMenuItemsOpenToLeft == 3) && row3ElementCounter > numberMainNavigationMenuItemsOpenToLeftSecondLastChild) {
                    if (!mainNavigationLinks[i - 2].classList.contains('open-to-left')) {
                        mainNavigationLinks[i - 2].classList.add('open-to-left');
                    }
                }

                if (this.options.dropdownMenuNumberMainNavigationMenuItemsOpenToLeft == 3 && row3ElementCounter > numberMainNavigationMenuItemsOpenToLeftThirdLastChild) {
                    if (!mainNavigationLinks[i - 3].classList.contains('open-to-left')) {
                        mainNavigationLinks[i - 3].classList.add('open-to-left');
                    }
                }
            }else if (topValue == (heightValue * 4) && row4Counter == 0) {
                row4Counter += 1;

                if (!mainNavigationLinks[i - 1].classList.contains('open-to-left') && row4ElementCounter > numberMainNavigationMenuItemsOpenToLeftLastChild) {
                    mainNavigationLinks[i - 1].classList.add('open-to-left');
                }

                if ((this.options.dropdownMenuNumberMainNavigationMenuItemsOpenToLeft == 2 || this.options.dropdownMenuNumberMainNavigationMenuItemsOpenToLeft == 3) && row4ElementCounter > numberMainNavigationMenuItemsOpenToLeftSecondLastChild) {
                    if (!mainNavigationLinks[i - 2].classList.contains('open-to-left')) {
                        mainNavigationLinks[i - 2].classList.add('open-to-left');
                    }
                }

                if (this.options.dropdownMenuNumberMainNavigationMenuItemsOpenToLeft == 3 && row4ElementCounter > numberMainNavigationMenuItemsOpenToLeftThirdLastChild) {
                    if (!mainNavigationLinks[i - 3].classList.contains('open-to-left')) {
                        mainNavigationLinks[i - 3].classList.add('open-to-left');
                    }
                }
            }else if (topValue == (heightValue * 5) && row5Counter == 0) {
                row5Counter += 1;

                if (!mainNavigationLinks[i - 1].classList.contains('open-to-left') && row5ElementCounter > numberMainNavigationMenuItemsOpenToLeftLastChild) {
                    mainNavigationLinks[i - 1].classList.add('open-to-left');
                }

                if ((this.options.dropdownMenuNumberMainNavigationMenuItemsOpenToLeft == 2 || this.options.dropdownMenuNumberMainNavigationMenuItemsOpenToLeft == 3) && row5ElementCounter > numberMainNavigationMenuItemsOpenToLeftSecondLastChild) {
                    if (!mainNavigationLinks[i - 2].classList.contains('open-to-left')) {
                        mainNavigationLinks[i - 2].classList.add('open-to-left');
                    }
                }

                if (this.options.dropdownMenuNumberMainNavigationMenuItemsOpenToLeft == 3 && row5ElementCounter > numberMainNavigationMenuItemsOpenToLeftThirdLastChild) {
                    if (!mainNavigationLinks[i - 3].classList.contains('open-to-left')) {
                        mainNavigationLinks[i - 3].classList.add('open-to-left');
                    }
                }
            }
        }

        for (let n = 0; n < 5; ++n) {
            if (row == n) {
                if ((row == 1 && row1ElementCounter > numberMainNavigationMenuItemsOpenToLeftLastChild) || (row == 2 && row2ElementCounter > numberMainNavigationMenuItemsOpenToLeftLastChild) || (row == 3 && row3ElementCounter > numberMainNavigationMenuItemsOpenToLeftLastChild) || (row == 4 && row4ElementCounter > numberMainNavigationMenuItemsOpenToLeftLastChild) || (row == 5 && row5ElementCounter > numberMainNavigationMenuItemsOpenToLeftLastChild)) {
                    const mainNavigationLinksRowLastChild = document.querySelectorAll('.nav-main .dropdownmenu-open-last-childrens-to-left .main-navigation-menu .main-navigation-menu-list > .nav-item > .nav-item-link-container.dropdown.has-children.row-' + row + ':last-child');

                    for (let k = 0; k < mainNavigationLinksRowLastChild.length; ++k) {
                        if (!mainNavigationLinksRowLastChild[k].classList.contains('open-to-left')) {
                            mainNavigationLinksRowLastChild[k].classList.add('open-to-left');
                        }
                    }
                }

                if ((this.options.dropdownMenuNumberMainNavigationMenuItemsOpenToLeft == 2) || (this.options.dropdownMenuNumberMainNavigationMenuItemsOpenToLeft == 3)) {
                    if ((row == 1 && row1ElementCounter > numberMainNavigationMenuItemsOpenToLeftSecondLastChild) || (row == 2 && row2ElementCounter > numberMainNavigationMenuItemsOpenToLeftSecondLastChild) || (row == 3 && row3ElementCounter > numberMainNavigationMenuItemsOpenToLeftSecondLastChild) || (row == 4 && row4ElementCounter > numberMainNavigationMenuItemsOpenToLeftSecondLastChild) || (row == 5 && row5ElementCounter > numberMainNavigationMenuItemsOpenToLeftSecondLastChild)) {
                        const mainNavigationLinksRowSecondLastChild = document.querySelectorAll('.nav-main .dropdownmenu-open-last-childrens-to-left .main-navigation-menu .main-navigation-menu-list > .nav-item > .nav-item-link-container.dropdown.has-children.row-' + row + ':nth-last-child(2)');

                        for (let l = 0; l < mainNavigationLinksRowSecondLastChild.length; ++l) {
                            if (!mainNavigationLinksRowSecondLastChild[l].classList.contains('open-to-left')) {
                                mainNavigationLinksRowSecondLastChild[l].classList.add('open-to-left');
                            }
                        }
                    }
                }

                if (this.options.dropdownMenuNumberMainNavigationMenuItemsOpenToLeft == 3) {
                    if ((row == 1 && row1ElementCounter > numberMainNavigationMenuItemsOpenToLeftThirdLastChild) || (row == 2 && row2ElementCounter > numberMainNavigationMenuItemsOpenToLeftThirdLastChild) || (row == 3 && row3ElementCounter > numberMainNavigationMenuItemsOpenToLeftThirdLastChild) || (row == 4 && row4ElementCounter > numberMainNavigationMenuItemsOpenToLeftThirdLastChild) || (row == 5 && row5ElementCounter > numberMainNavigationMenuItemsOpenToLeftThirdLastChild)) {
                        const mainNavigationLinksRowThirdLastChild = document.querySelectorAll('.nav-main .dropdownmenu-open-last-childrens-to-left .main-navigation-menu .main-navigation-menu-list > .nav-item > .nav-item-link-container.dropdown.has-children.row-' + row + ':nth-last-child(3)');

                        for (let m = 0; m < mainNavigationLinksRowThirdLastChild.length; ++m) {
                            if (!mainNavigationLinksRowThirdLastChild[m].classList.contains('open-to-left')) {
                                mainNavigationLinksRowThirdLastChild[m].classList.add('open-to-left');
                            }
                        }
                    }
                }
            }
        }

        const dropdownMenuRight = document.querySelectorAll('.nav-main .dropdownmenu-open-last-childrens-to-left .main-navigation-menu .main-navigation-menu-list > .nav-item > .nav-item-link-container.open-to-left .dropdown-menu');

        for (let j = 0; j < dropdownMenuRight.length; ++j) {
            if (!dropdownMenuRight[j].classList.contains('dropdown-menu-right')) {
                dropdownMenuRight[j].classList.add('dropdown-menu-right');
            }
        }
    }

    pluginShouldBeActive(){
        return !(this.options.notActiveViewportsDropdownMenuStickyEffectIsActiveString).includes(ViewportDetection.getCurrentViewport());
    }

    initializePlugin() {
        this.addEventListener();

        this.initialized = true;
    }

    addEventListener(){
        document.addEventListener('scroll', this.onScroll.bind(this));
    }

    removeEventListener(){
        document.removeEventListener('scroll', this.onScroll.bind(this));
    }

    onScroll(){
        const navMain = document.querySelector('.nav-main'),
            scrollPosition = document.documentElement.scrollTop;

        if (scrollPosition > this.options.positionDropdownMenuStickyEffectIsActive) {
            if (!navMain.classList.contains(this.options.dropdownMenuStickyClass)) {
                navMain.classList.add(this.options.dropdownMenuStickyClass);
            }
        } else {
            navMain.classList.remove(this.options.dropdownMenuStickyClass);
        }
    }

    destroy(){
        this.removeEventListener();

        this.initialized = false;
    }
}
