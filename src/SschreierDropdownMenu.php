<?php
declare(strict_types=1);

namespace Sschreier\DropdownMenu;

use Shopware\Core\Framework\Plugin;
use Symfony\Component\DependencyInjection\ContainerBuilder;

class SschreierDropdownMenu extends Plugin
{
	/* plugin variables match: config key => scss variable */
    const PLUGIN_VARS = [
        'dropdownMenuBoxShadow' => 'sschreier-dropdownmenu-box-shadow',
        'dropdownMenuPositionLeft' => 'sschreier-dropdownmenu-position-left',
        'dropdownMenuMinWidth' => 'sschreier-dropdownmenu-min-width',
        'dropdownMenuFontSize' => 'sschreier-dropdownmenu-font-size',
        'dropdownMenuPadding' => 'sschreier-dropdownmenu-padding',
        'dropdownMenuDistanceTextToLeft' => 'sschreier-dropdownmenu-distance-text-to-left',
        'transitionDurationDropdownStickyMenu' => 'sschreier-dropdownmenu-stickymenu-transition-duration',
        'zIndexDropdownStickyMenu' => 'sschreier-dropdownmenu-stickymenu-zindex',
        'backgroundColorDropdownStickyMenu' => 'sschreier-dropdownmenu-stickymenu-background-color',
        'fontColorDropdownStickyMenu' => 'sschreier-dropdownmenu-stickymenu-font-color',
        'hoverFontColorDropdownStickyMenu' => 'sschreier-dropdownmenu-stickymenu-hover-font-color',
        'borderBottomDropdownStickyMenu' => 'sschreier-dropdownmenu-stickymenu-border-bottom',
    ];

    public function build(ContainerBuilder $container): void
    {
        parent::build($container);

        $container->setParameter(
            'sschreier_dropdownmenu_domain',
            $this->getName() . '.config.'
        );
    }
}
