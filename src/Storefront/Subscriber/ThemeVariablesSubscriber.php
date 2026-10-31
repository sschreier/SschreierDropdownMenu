<?php
declare(strict_types=1);

/*
 * (c) Sebastian Schreier <info@web-solutions-dresden.de>
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Sschreier\DropdownMenu\Storefront\Subscriber;

use Shopware\Core\System\SystemConfig\SystemConfigService;
use Shopware\Storefront\Theme\Event\ThemeCompilerEnrichScssVariablesEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Serializer\NameConverter\CamelCaseToSnakeCaseNameConverter;
use Sschreier\DropdownMenu\SschreierDropdownMenu;

class ThemeVariablesSubscriber implements EventSubscriberInterface
{
    private SystemConfigService $systemConfig;

    public function __construct(SystemConfigService $systemConfig)
    {
        $this->systemConfig = $systemConfig;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            ThemeCompilerEnrichScssVariablesEvent::class => 'onAddVariables',
        ];
    }

    public function onAddVariables(ThemeCompilerEnrichScssVariablesEvent $event): void
    {
        $configFields = $this->systemConfig->get('SschreierDropdownMenu.config', $event->getSalesChannelId());

        if (!is_array($configFields)) {
            return;
        }

        $nameConverter = new CamelCaseToSnakeCaseNameConverter();

        foreach ($configFields as $configKey => $value) {
            // convert `customVariableName` to `custom-variable-name`
            $kebabCasedScssVariable = str_replace('_', '-', $nameConverter->normalize($configKey));

            if(
                in_array($configKey, SschreierDropdownMenu::PLUGIN_CONFIG_VARS, true)
                && $value !== null
                && $value !== ''
                && $value !== false
            ) {
                $event->addVariable(
                    'sschreier-' . $kebabCasedScssVariable,
                    (string) $value
                );
            }
        }
    }
}
