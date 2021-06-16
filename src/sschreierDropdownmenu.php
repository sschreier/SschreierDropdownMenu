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
        'dropdownMenuMinWidth' => 'sschreier-dropdownmenu-min-width',
        'dropdownMenuFontSize' => 'sschreier-dropdownmenu-font-size',
        'dropdownMenuPadding' => 'sschreier-dropdownmenu-padding',
        'zIndexDropdownStickyMenu' => 'sschreier-dropdownmenu-stickymenu-zindex',
        'transitionDurationDropdownStickyMenu' => 'sschreier-dropdownmenu-stickymenu-transition-duration',
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