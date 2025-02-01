<?php
declare(strict_types=1);

/*
 * (c) Sebastian Schreier <info@sebastianschreier.de>
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

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
