import DropdownStickyMenuPlugin from './dropdown-sticky-menu-plugin/dropdown-sticky-menu-plugin.plugin';

const PluginManager = window.PluginManager;

PluginManager.register('DropdownStickyMenuPlugin', DropdownStickyMenuPlugin, '[data-dropdown-sticky-menu]', {
    positionDropdownStickyMenuIsActive: 120,
    notActiveViewportsDropdownStickyMenu: "'XS', 'SM', 'MD'"
});