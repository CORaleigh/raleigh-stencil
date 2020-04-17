import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-17370b86.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy(JSON.parse("[[\"calcite-date\",[[1,\"calcite-date\",{\"value\":[1537],\"valueAsDate\":[1040],\"min\":[1],\"max\":[1],\"showCalendar\":[516,\"show-calendar\"],\"prevMonthLabel\":[1,\"prev-month-label\"],\"nextMonthLabel\":[1,\"next-month-label\"],\"locale\":[1],\"noCalendarInput\":[4,\"no-calendar-input\"],\"activeDate\":[32]},[[0,\"blur\",\"focusOutHandler\"],[8,\"focusin\",\"focusInHandler\"],[0,\"keyup\",\"keyDownHandler\"]]]]],[\"calcite-split-button\",[[1,\"calcite-split-button\",{\"color\":[1537],\"theme\":[1537],\"scale\":[1537],\"dropdownIconType\":[1537,\"dropdown-icon-type\"],\"primaryText\":[513,\"primary-text\"],\"primaryIcon\":[513,\"primary-icon\"],\"primaryLabel\":[513,\"primary-label\"],\"dropdownLabel\":[513,\"dropdown-label\"],\"loading\":[516],\"disabled\":[516]}]]],[\"calcite-card\",[[1,\"calcite-card\",{\"loading\":[516],\"selected\":[1540],\"selectable\":[1540],\"theme\":[1537]}]]],[\"calcite-combobox\",[[1,\"calcite-combobox\",{\"active\":[516],\"disabled\":[516],\"theme\":[513],\"scale\":[1537],\"label\":[1],\"placeholder\":[1],\"items\":[32],\"selectedItems\":[32],\"visibleItems\":[32]},[[0,\"calciteComboboxItemChange\",\"calciteComboboxItemChangeHandler\"],[0,\"calciteChipDismiss\",\"calciteChipDismissHandler\"],[0,\"calciteComboboxItemKeyEvent\",\"calciteComboboxItemKeyEventHandler\"]]]]],[\"calcite-accordion-item\",[[1,\"calcite-accordion-item\",{\"active\":[1540],\"itemTitle\":[1,\"item-title\"],\"itemSubtitle\":[1,\"item-subtitle\"]},[[0,\"keydown\",\"keyDownHandler\"],[16,\"calciteAccordionItemHasChanged\",\"updateActiveItemOnChange\"]]]]],[\"calcite-alert\",[[1,\"calcite-alert\",{\"active\":[1540],\"autoDismiss\":[4,\"auto-dismiss\"],\"autoDismissDuration\":[1537,\"auto-dismiss-duration\"],\"color\":[1537],\"theme\":[1537],\"scale\":[1537],\"icon\":[4],\"alertQueue\":[16],\"alertQueueLength\":[2,\"alert-queue-length\"],\"currentAlert\":[1,\"current-alert\"],\"open\":[64],\"close\":[64],\"setFocus\":[64]},[[8,\"calciteAlertOpen\",\"alertOpen\"],[8,\"calciteAlertClose\",\"alertClose\"],[8,\"calciteAlertSync\",\"alertRegister\"]]]]],[\"calcite-combobox-item\",[[1,\"calcite-combobox-item\",{\"disabled\":[516],\"parentItem\":[16],\"selected\":[516],\"textLabel\":[513,\"text-label\"],\"value\":[513],\"isSelected\":[32],\"toggleSelected\":[64]},[[0,\"keydown\",\"keyDownHandler\"]]]]],[\"calcite-dropdown-item\",[[1,\"calcite-dropdown-item\",{\"active\":[1540],\"iconStart\":[513,\"icon-start\"],\"iconEnd\":[513,\"icon-end\"],\"href\":[513],\"setFocus\":[64]},[[0,\"click\",\"onClick\"],[0,\"keydown\",\"keyDownHandler\"],[16,\"registerCalciteDropdownGroup\",\"registerCalciteDropdownGroup\"],[16,\"calciteDropdownItemHasChanged\",\"updateActiveItemOnChange\"]]]]],[\"calcite-modal\",[[1,\"calcite-modal\",{\"beforeClose\":[16],\"closeLabel\":[1,\"close-label\"],\"docked\":[516],\"firstFocus\":[16],\"disableEscape\":[4,\"disable-escape\"],\"size\":[513],\"color\":[513],\"theme\":[513],\"noPadding\":[4,\"no-padding\"],\"isActive\":[32],\"open\":[64],\"close\":[64],\"focusElement\":[64],\"scrollContent\":[64]},[[8,\"keyup\",\"handleEscape\"]]]]],[\"calcite-notice\",[[1,\"calcite-notice\",{\"active\":[1540],\"color\":[1537],\"theme\":[1537],\"scale\":[1537],\"width\":[1537],\"dismissible\":[1540],\"icon\":[4],\"close\":[64],\"open\":[64],\"setFocus\":[64]}]]],[\"calcite-pagination\",[[1,\"calcite-pagination\",{\"backgroundStyle\":[513,\"background-style\"],\"num\":[514],\"start\":[514],\"textLabelNext\":[513,\"text-label-next\"],\"textLabelPrevious\":[513,\"text-label-previous\"],\"theme\":[513],\"total\":[514],\"selectedIndex\":[32],\"nextPage\":[64],\"previousPage\":[64],\"setPage\":[64]}]]],[\"calcite-popover\",[[1,\"calcite-popover\",{\"closeButton\":[516,\"close-button\"],\"disableFlip\":[516,\"disable-flip\"],\"disablePointer\":[516,\"disable-pointer\"],\"flipPlacements\":[16],\"offsetDistance\":[514,\"offset-distance\"],\"offsetSkidding\":[514,\"offset-skidding\"],\"open\":[516],\"placement\":[513],\"referenceElement\":[1,\"reference-element\"],\"textClose\":[1,\"text-close\"],\"theme\":[513],\"_referenceElement\":[32],\"reposition\":[64],\"setFocus\":[64],\"toggle\":[64]}]]],[\"calcite-stepper-item\",[[1,\"calcite-stepper-item\",{\"active\":[1540],\"complete\":[1540],\"error\":[1028],\"disabled\":[1028],\"itemTitle\":[1,\"item-title\"],\"itemSubtitle\":[1,\"item-subtitle\"],\"layout\":[1537],\"icon\":[1028],\"numbered\":[1028],\"scale\":[1537]},[[0,\"keydown\",\"keyDownHandler\"],[16,\"calciteStepperItemHasChanged\",\"updateActiveItemOnChange\"]]]]],[\"calcite-tree-item\",[[1,\"calcite-tree-item\",{\"selected\":[1540],\"expanded\":[1540],\"parentExpanded\":[1028,\"parent-expanded\"],\"depth\":[1538],\"hasChildren\":[1540,\"has-children\"],\"lines\":[1540],\"scale\":[1537],\"selectionMode\":[32]},[[0,\"click\",\"onClick\"],[0,\"keydown\",\"keyDownHandler\"]]]]],[\"calcite-accordion\",[[1,\"calcite-accordion\",{\"theme\":[1537],\"scale\":[1537],\"appearance\":[1537],\"iconPosition\":[1537,\"icon-position\"],\"iconType\":[1537,\"icon-type\"],\"selectionMode\":[1537,\"selection-mode\"]},[[0,\"calciteAccordionItemKeyEvent\",\"calciteAccordionItemKeyEvent\"],[0,\"registerCalciteAccordionItem\",\"registerCalciteAccordionItem\"],[0,\"calciteAccordionItemSelected\",\"updateActiveItemOnChange\"]]]]],[\"calcite-dropdown-group\",[[1,\"calcite-dropdown-group\",{\"groupTitle\":[513,\"group-title\"],\"selectionMode\":[1537,\"selection-mode\"]},[[0,\"registerCalciteDropdownItem\",\"registerCalciteDropdownItem\"],[0,\"calciteDropdownItemSelected\",\"updateActiveItemOnChange\"]]]]],[\"calcite-example\",[[1,\"calcite-example\",{\"property\":[1],\"state\":[32],\"doThing\":[64]},[[0,\"click\",\"onClick\"]]]]],[\"calcite-popover-manager\",[[0,\"calcite-popover-manager\",{\"selector\":[1]}]]],[\"calcite-progress\",[[1,\"calcite-progress\",{\"type\":[1],\"value\":[2],\"text\":[1],\"reversed\":[4],\"theme\":[513]}]]],[\"calcite-radio-group\",[[1,\"calcite-radio-group\",{\"name\":[1],\"selectedItem\":[16],\"theme\":[513],\"scale\":[513],\"setFocus\":[64]},[[0,\"click\",\"handleClick\"],[0,\"calciteRadioGroupItemChange\",\"handleSelected\"],[0,\"keydown\",\"handleKeyDown\"]]]]],[\"calcite-radio-group-item\",[[1,\"calcite-radio-group-item\",{\"checked\":[1540],\"value\":[8],\"useFallback\":[32]}]]],[\"calcite-slider\",[[1,\"calcite-slider\",{\"theme\":[513],\"disabled\":[1540],\"min\":[1538],\"max\":[1538],\"value\":[1538],\"minValue\":[2,\"min-value\"],\"maxValue\":[2,\"max-value\"],\"minLabel\":[1,\"min-label\"],\"maxLabel\":[1,\"max-label\"],\"snap\":[4],\"step\":[2],\"pageStep\":[2,\"page-step\"],\"ticks\":[2],\"labelTicks\":[516,\"label-ticks\"],\"labelHandles\":[516,\"label-handles\"],\"precise\":[4],\"tickValues\":[32],\"activeProp\":[32]},[[0,\"keydown\",\"keyDownHandler\"],[0,\"click\",\"clickHandler\"]]]]],[\"calcite-stepper\",[[1,\"calcite-stepper\",{\"theme\":[1537],\"scale\":[1537],\"numbered\":[1540],\"icon\":[1540],\"layout\":[1537],\"requestedContent\":[16],\"nextStep\":[64],\"prevStep\":[64],\"goToStep\":[64],\"startStep\":[64],\"endStep\":[64]},[[0,\"calciteStepperItemKeyEvent\",\"calciteStepperItemKeyEvent\"],[0,\"registerCalciteStepperItem\",\"registerItem\"],[0,\"calciteStepperItemSelected\",\"updateItem\"]]]]],[\"calcite-switch\",[[1,\"calcite-switch\",{\"switched\":[1540],\"name\":[1537],\"value\":[1537],\"color\":[1537],\"scale\":[1537],\"theme\":[1537]},[[0,\"click\",\"onClick\"],[0,\"keydown\",\"keyDownHandler\"]]]]],[\"calcite-tab\",[[1,\"calcite-tab\",{\"tab\":[1537],\"isActive\":[1540,\"is-active\"],\"labeledBy\":[32],\"getTabIndex\":[64],\"updateAriaInfo\":[64]},[[16,\"calciteTabChange\",\"tabChangeHandler\"]]]]],[\"calcite-tab-nav\",[[1,\"calcite-tab-nav\",{\"storageId\":[1,\"storage-id\"],\"syncId\":[1,\"sync-id\"],\"layout\":[1537],\"selectedTab\":[32]},[[0,\"calciteTabsFocusPrevious\",\"focusPreviousTabHandler\"],[0,\"calciteTabsFocusNext\",\"focusNextTabHandler\"],[0,\"calciteTabsActivate\",\"activateTabHandler\"],[32,\"calciteTabChange\",\"globalTabChangeHandler\"]]]]],[\"calcite-tab-title\",[[1,\"calcite-tab-title\",{\"tab\":[1537],\"isActive\":[1540,\"is-active\"],\"layout\":[1537],\"controls\":[32],\"getTabIndex\":[64],\"getTabIdentifier\":[64],\"updateAriaInfo\":[64]},[[16,\"calciteTabChange\",\"tabChangeHandler\"],[0,\"click\",\"onClick\"],[0,\"keydown\",\"keyDownHandler\"]]]]],[\"calcite-tabs\",[[1,\"calcite-tabs\",{\"theme\":[513],\"layout\":[513],\"titles\":[32],\"tabs\":[32]},[[0,\"calciteTabTitleRegister\",\"calciteTabTitleRegister\"],[0,\"calciteTabTitleUnregister\",\"calciteTabTitleUnregister\"],[0,\"calciteTabRegister\",\"calciteTabRegister\"],[0,\"calciteTabUnregister\",\"calciteTabUnregister\"]]]]],[\"calcite-tooltip\",[[1,\"calcite-tooltip\",{\"offsetDistance\":[514,\"offset-distance\"],\"offsetSkidding\":[514,\"offset-skidding\"],\"open\":[516],\"placement\":[513],\"referenceElement\":[1,\"reference-element\"],\"theme\":[513],\"_referenceElement\":[32],\"reposition\":[64]}]]],[\"calcite-tooltip-manager\",[[0,\"calcite-tooltip-manager\",{\"selector\":[1]}]]],[\"calcite-tree\",[[1,\"calcite-tree\",{\"lines\":[1540],\"theme\":[1537],\"scale\":[1537],\"selectionMode\":[1537,\"selection-mode\"],\"root\":[1540]},[[0,\"focus\",\"onFocus\"],[0,\"calciteTreeItemSelect\",\"onClick\"]]]]],[\"find-my-service\",[[0,\"find-my-service\",{\"categories\":[1],\"layers\":[1],\"council\":[4],\"webmaps\":[32],\"maps\":[32],\"councilInfo\":[32]}]]],[\"map-gallery\",[[0,\"map-gallery\",{\"groupId\":[1,\"group-id\"],\"items\":[32]}]]],[\"transit-map\",[[0,\"transit-map\",{\"route\":[1],\"map\":[1],\"name\":[32],\"vehicles\":[32]}]]],[\"water-usage\",[[0,\"water-usage\",{\"shower1\":[32],\"shower2\":[32],\"bath1\":[32],\"bath2\":[32],\"toilet\":[32],\"teeth\":[32],\"shaving\":[32],\"washing\":[32],\"dishwasher\":[32],\"dishes\":[32],\"clothes\":[32],\"outdoor\":[32],\"dripping\":[32],\"leaking\":[32],\"indoor\":[32],\"sliders\":[32]}]]],[\"web-map\",[[0,\"web-map\",{\"mapId\":[1,\"map-id\"],\"sceneId\":[1,\"scene-id\"],\"zoom\":[2],\"search\":[4],\"layerlist\":[4],\"legend\":[4],\"address\":[1],\"navigate\":[4],\"popup\":[4],\"querywhere\":[1],\"querylayer\":[1],\"filter\":[4],\"popupdocked\":[4],\"dockposition\":[1],\"highlight\":[4],\"scene\":[4],\"basemap\":[1],\"basemapselect\":[4],\"collapsewidgets\":[4],\"expandedwidget\":[1],\"center\":[1],\"darkMode\":[4,\"dark-mode\"],\"list\":[4],\"divId\":[32],\"features\":[32]}]]],[\"calcite-button\",[[1,\"calcite-button\",{\"color\":[1537],\"appearance\":[1537],\"theme\":[513],\"scale\":[1537],\"width\":[1537],\"loading\":[516],\"round\":[516],\"floating\":[516],\"href\":[513],\"icon\":[513],\"iconPosition\":[1537,\"icon-position\"],\"disabled\":[516],\"hasText\":[32],\"setFocus\":[64]}]]],[\"calcite-chip\",[[1,\"calcite-chip\",{\"value\":[1],\"theme\":[513],\"scale\":[513],\"icon\":[513]}]]],[\"calcite-date-month\",[[1,\"calcite-date-month\",{\"selectedDate\":[16],\"activeDate\":[16],\"min\":[16],\"max\":[16],\"locale\":[1]},[[0,\"keydown\",\"keyDownHandler\"],[0,\"focusout\",\"disableActiveFocus\"]]]]],[\"calcite-date-month-header\",[[1,\"calcite-date-month-header\",{\"selectedDate\":[16],\"activeDate\":[16],\"min\":[16],\"max\":[16],\"locale\":[1],\"prevMonthLabel\":[1,\"prev-month-label\"],\"nextMonthLabel\":[1,\"next-month-label\"]}]]],[\"calcite-checkbox\",[[1,\"calcite-checkbox\",{\"checked\":[1540],\"indeterminate\":[1540],\"name\":[1537],\"value\":[1537],\"size\":[513],\"disabled\":[516],\"theme\":[513]},[[0,\"click\",\"onClick\"],[0,\"keydown\",\"keyDownHandler\"]]]]],[\"calcite-dropdown\",[[1,\"calcite-dropdown\",{\"active\":[1540],\"alignment\":[1537],\"maxItems\":[2,\"max-items\"],\"theme\":[1537],\"scale\":[1537],\"width\":[1537],\"type\":[1537]},[[0,\"click\",\"openDropdown\"],[8,\"click\",\"closeCalciteDropdownOnClick\"],[0,\"closeCalciteDropdown\",\"closeCalciteDropdownOnEvent\"],[0,\"keydown\",\"keyDownHandler\"],[1,\"mouseenter\",\"mouseoverHandler\"],[1,\"mouseleave\",\"mouseoffHandler\"],[0,\"calciteDropdownItemKeyEvent\",\"calciteDropdownItemKeyEvent\"],[0,\"registerCalciteDropdownGroup\",\"registerCalciteDropdownGroup\"]]]]],[\"calcite-date-day\",[[1,\"calcite-date-day\",{\"day\":[2],\"disabled\":[516],\"currentMonth\":[516,\"current-month\"],\"selected\":[516],\"active\":[516],\"locale\":[1]},[[0,\"click\",\"onClick\"],[0,\"keydown\",\"keyDownHandler\"]]]]],[\"calcite-loader\",[[1,\"calcite-loader\",{\"isActive\":[516,\"is-active\"],\"inline\":[516],\"type\":[513],\"value\":[2],\"text\":[1],\"noPadding\":[4,\"no-padding\"]}]]],[\"calcite-icon\",[[1,\"calcite-icon\",{\"icon\":[513],\"mirrored\":[516],\"scale\":[513],\"textLabel\":[1,\"text-label\"],\"theme\":[513],\"pathData\":[32],\"visible\":[32]}]]]]"), options);
});
