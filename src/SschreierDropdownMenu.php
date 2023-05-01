<?php
declare(strict_types=1);

namespace Sschreier\DropdownMenu;

use Shopware\Core\Framework\Plugin;

class SschreierDropdownMenu extends Plugin
{
	const PLUGIN_CONFIG_VARS = [
        'dropdownMenuBoxShadow',
        'dropdownMenuPositionLeft',
        'dropdownMenuMinWidth',
        'dropdownMenuFontSize',
        'dropdownMenuPadding',
        'dropdownMenuDistanceTextToLeft',
        'transitionDurationDropdownStickyMenu',
        'zIndexDropdownStickyMenu',
        'borderBottomDropdownStickyMenu'
    ];
}
