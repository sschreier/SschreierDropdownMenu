<?php
    namespace sschreier\sschreierDropdownmenu\Subscriber;

    use Symfony\Component\EventDispatcher\EventSubscriberInterface;
    use Shopware\Storefront\Event\ThemeCompilerEnrichScssVariablesEvent;
    use Shopware\Core\System\SystemConfig\SystemConfigService;

    class ThemeVariablesSubscriber implements EventSubscriberInterface {
        /**
         * @var SystemConfigService
        */
        protected $systemConfig;

        public function __construct(SystemConfigService $systemConfig) {
            $this->systemConfig = $systemConfig;
        }

        public static function getSubscribedEvents(): array {
            return [
                ThemeCompilerEnrichScssVariablesEvent::class => 'onAddVariables'
            ];
        }

        public function onAddVariables(ThemeCompilerEnrichScssVariablesEvent $event) {
            $dropdownmenuboxshadow = $this->systemConfig->get('sschreierDropdownmenu.config.dropdownMenuBoxShadow', $event->getSalesChannelId());
            $dropdownmenuminwidth = $this->systemConfig->get('sschreierDropdownmenu.config.dropdownMenuMinWidth', $event->getSalesChannelId());
            $dropdownmenufontsize = $this->systemConfig->get('sschreierDropdownmenu.config.dropdownMenuFontSize', $event->getSalesChannelId());
            $dropdownmenupadding = $this->systemConfig->get('sschreierDropdownmenu.config.dropdownMenuPadding', $event->getSalesChannelId());
            $zindexdropdownstickymenu = $this->systemConfig->get('sschreierDropdownmenu.config.zIndexDropdownStickyMenu', $event->getSalesChannelId());
            $transitiondurationdropdownstickymenu = $this->systemConfig->get('sschreierDropdownmenu.config.transitionDurationDropdownStickyMenu', $event->getSalesChannelId());
            $borderbottomdropdownstickymenu = $this->systemConfig->get('sschreierDropdownmenu.config.borderBottomDropdownStickyMenu', $event->getSalesChannelId());

            if(is_null($dropdownmenuboxshadow)){
                $dropdownmenuboxshadow = "5px 10px 16px rgba(0, 0, 0, 0.2), -5px 10px 16px rgba(0, 0, 0, 0.2)";
            }

            if(is_null($dropdownmenuminwidth)){
                $dropdownmenuminwidth = "275";
            }

            if(is_null($dropdownmenufontsize)){
                $dropdownmenufontsize = "14";
            }

            if(is_null($dropdownmenupadding)){
                $dropdownmenupadding = "8px 20px 8px 20px";
            }

            if(is_null($zindexdropdownstickymenu)){
                $zindexdropdownstickymenu = "1000";
            }

            if(is_null($transitiondurationdropdownstickymenu)){
                $transitiondurationdropdownstickymenu = "400";
            }

            if(is_null($borderbottomdropdownstickymenu)){
                $borderbottomdropdownstickymenu = "1px solid #bcc1c7";
            }

            $event->addVariable('sschreier-dropdownmenu-box-shadow', $dropdownmenuboxshadow);
            $event->addVariable('sschreier-dropdownmenu-min-width', $dropdownmenuminwidth);
            $event->addVariable('sschreier-dropdownmenu-font-size', $dropdownmenufontsize);
            $event->addVariable('sschreier-dropdownmenu-padding', $dropdownmenupadding);
            $event->addVariable('sschreier-zindex-dropdownstickymenu', $zindexdropdownstickymenu);
            $event->addVariable('sschreier-transition-duration-dropdownstickymenu', $transitiondurationdropdownstickymenu);
            $event->addVariable('sschreier-border-bottom-dropdownstickymenu', $borderbottomdropdownstickymenu);
        }
    }