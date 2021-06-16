<?php
declare(strict_types=1);

namespace Sschreier\DropdownMenu\Subscriber;

use Shopware\Core\System\SystemConfig\SystemConfigService;
use Shopware\Storefront\Event\ThemeCompilerEnrichScssVariablesEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Sschreier\DropdownMenu\SschreierDropdownMenu;

class ThemeVariablesSubscriber implements EventSubscriberInterface
{
    private SystemConfigService $systemConfig;

    private string $pluginDomain;

    public function __construct(SystemConfigService $systemConfig, string $pluginDomain)
    {
        $this->systemConfig = $systemConfig;
        $this->pluginDomain = $pluginDomain;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            ThemeCompilerEnrichScssVariablesEvent::class => 'onAddVariables',
        ];
    }

    public function onAddVariables(ThemeCompilerEnrichScssVariablesEvent $event): void
    {
        $salesChannelId = $event->getSalesChannelId();

        $pluginConfig = $this->systemConfig
            ->getDomain($this->pluginDomain, $salesChannelId, true);

        if (empty($pluginConfig)) {
            return;
        }

        foreach (SschreierDropdownMenu::PLUGIN_VARS as $configKey => $scssVariable) {
            $config = $pluginConfig[$this->pluginDomain . $configKey] ?? null;
            if ($config) {
                $event->addVariable(
                    $scssVariable,
                    (string) $config
                );
            }
        }
    }
}
