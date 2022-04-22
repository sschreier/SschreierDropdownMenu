import DropdownStickyMenuPlugin from './dropdown-sticky-menu-plugin/dropdown-sticky-menu-plugin.plugin';
import DropdownMenuRightPlugin from './dropdown-menu-right-plugin/dropdown-menu-right-plugin.plugin';

const PluginManager = window.PluginManager;

PluginManager.register('DropdownStickyMenuPlugin', DropdownStickyMenuPlugin, DropdownStickyMenuPlugin.options.elementSelector, {
    positionDropdownStickyMenuIsActive: 120,
    notActiveViewportsDropdownStickyMenu: "'XS', 'SM', 'MD'",
    dropdownMenuMultiLineOpenLastChildToLeft: false,
    dropdownMenuNumberMainNavigationMenuItemsOpenToLeft: 1,
    dropdownMenuMinimumNumberMainNavigationMenuItemsOpenToLeft: 3
});

PluginManager.register('DropdownMenuRightPlugin', DropdownMenuRightPlugin, DropdownMenuRightPlugin.options.elementSelector, {
    dropdownMenuMultiLineOpenLastChildToLeft: false,
    dropdownMenuNumberMainNavigationMenuItemsOpenToLeft: 1,
    dropdownMenuMinimumNumberMainNavigationMenuItemsOpenToLeft: 3
});
