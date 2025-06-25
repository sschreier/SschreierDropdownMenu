const PluginManager = window.PluginManager;

PluginManager.register('SschreierDropdownMenuRightPlugin', () => import('./dropdown-menu-right-plugin/dropdown-menu-right-plugin.plugin'), '[data-sschreier-dropdown-menu-right]');
PluginManager.register('SschreierDropdownMenuStickyEffectPlugin', () => import('./dropdown-sticky-menu-plugin/dropdown-sticky-menu-plugin.plugin'), '[data-sschreier-dropdown-menu-sticky-effect]');
