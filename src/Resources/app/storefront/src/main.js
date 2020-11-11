import DropdownStickyMenuPlugin from './sticky-menu-plugin/dropdown-sticky-menu-plugin.plugin';

// register them via the existing PluginManager
const PluginManager = window.PluginManager;

PluginManager.register('DropdownStickyMenuPlugin', DropdownStickyMenuPlugin, '[data-dropdown-sticky-menu]', {
    positionDropdownStickyMenuIsActive: 120,
    notActiveViewportsDropdownStickyMenu: "'XS', 'SM', 'MD'"
});