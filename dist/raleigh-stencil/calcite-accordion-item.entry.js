import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './core-17370b86.js';
import { a as getElementProp, g as getElementDir } from './dom-21b0c18b.js';
import { g as guid } from './guid-8a4914c4.js';
import { S as SPACE, a as ENTER, U as UP, D as DOWN, H as HOME, E as END } from './keys-ed140d96.js';

const CalciteAccordionItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        this.active = false;
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /** unique id for Accordion item */
        this.accordionItemId = `calcite-accordion-item-${guid()}`;
        /** what selection mode is the parent accordion in */
        this.selectionMode = getElementProp(this.el, "selection-mode", "multi");
        /** what icon type does the parent accordion specify */
        this.iconType = getElementProp(this.el, "icon-type", "chevron");
        /** handle clicks on item header */
        this.itemHeaderClickHandler = () => this.emitRequestedItem();
        this.calciteAccordionItemKeyEvent = createEvent(this, "calciteAccordionItemKeyEvent", 7);
        this.calciteAccordionItemSelected = createEvent(this, "calciteAccordionItemSelected", 7);
        this.closeCalciteAccordionItem = createEvent(this, "closeCalciteAccordionItem", 7);
        this.registerCalciteAccordionItem = createEvent(this, "registerCalciteAccordionItem", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentDidLoad() {
        this.itemPosition = this.getItemPosition();
        this.registerCalciteAccordionItem.emit({
            position: this.itemPosition,
        });
    }
    render() {
        const dir = getElementDir(this.el);
        return (h(Host, { tabindex: "0", "aria-expanded": this.active.toString(), dir: dir }, h("div", { class: "accordion-item-header", onClick: this.itemHeaderClickHandler }, h("div", { class: "accordion-item-header-text" }, h("span", { class: "accordion-item-title" }, this.itemTitle), h("span", { class: "accordion-item-subtitle" }, this.itemSubtitle)), h("calcite-icon", { class: "accordion-item-icon", icon: this.iconType === "chevron"
                ? "chevronUp"
                : this.iconType === "caret"
                    ? "caretUp"
                    : this.active
                        ? "minus"
                        : "plus", scale: "s" })), h("div", { class: "accordion-item-content" }, h("slot", null))));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    keyDownHandler(e) {
        if (e.target === this.el) {
            switch (e.keyCode) {
                case SPACE:
                case ENTER:
                    this.emitRequestedItem();
                    e.preventDefault();
                    break;
                case UP:
                case DOWN:
                case HOME:
                case END:
                    this.calciteAccordionItemKeyEvent.emit({ item: e });
                    e.preventDefault();
                    break;
            }
        }
    }
    updateActiveItemOnChange(event) {
        this.requestedAccordionItem = event.detail.requestedAccordionItem;
        this.determineActiveItem();
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    determineActiveItem() {
        switch (this.selectionMode) {
            case "multi":
                if (this.accordionItemId === this.requestedAccordionItem)
                    this.active = !this.active;
                break;
            case "single":
                if (this.accordionItemId === this.requestedAccordionItem)
                    this.active = !this.active;
                else
                    this.active = false;
                break;
            case "single-persist":
                this.active = this.accordionItemId === this.requestedAccordionItem;
                break;
        }
    }
    emitRequestedItem() {
        this.calciteAccordionItemSelected.emit({
            requestedAccordionItem: this.accordionItemId,
        });
    }
    getItemPosition() {
        const parent = this.el.parentElement;
        return Array.prototype.indexOf.call(parent.querySelectorAll("calcite-accordion-item"), this.el);
    }
    get el() { return getElement(this); }
    static get style() { return ":host([hidden]) {\n  display: none;\n}\n\n:host-context([theme=dark]) {\n  --calcite-ui-blue-1: #00A0FF;\n  --calcite-ui-blue-2: #0087D7;\n  --calcite-ui-blue-3: #47BBFF;\n  --calcite-ui-green-1: #36DA43;\n  --calcite-ui-green-2: #11AD1D;\n  --calcite-ui-green-3: #44ED51;\n  --calcite-ui-yellow-1: #FFC900;\n  --calcite-ui-yellow-2: #F4B000;\n  --calcite-ui-yellow-3: #FFE24D;\n  --calcite-ui-red-1: #FE583E;\n  --calcite-ui-red-2: #F3381B;\n  --calcite-ui-red-3: #FF7465;\n  --calcite-ui-background: #202020;\n  --calcite-ui-foreground-1: #2b2b2b;\n  --calcite-ui-foreground-2: #353535;\n  --calcite-ui-foreground-3: #404040;\n  --calcite-ui-text-1: #ffffff;\n  --calcite-ui-text-2: #bfbfbf;\n  --calcite-ui-text-3: #9f9f9f;\n  --calcite-ui-border-1: #4a4a4a;\n  --calcite-ui-border-2: #404040;\n  --calcite-ui-border-3: #353535;\n  --calcite-ui-border-4: #757575;\n  --calcite-ui-border-5: #9f9f9f;\n}\n\n:host-context([scale=s]) {\n  --calcite-accordion-item-spacing-unit: 0.5rem;\n  --calcite-accordion-item-padding: var(--calcite-accordion-item-spacing-unit)\n    var(--calcite-accordion-item-spacing-unit);\n  font-size: 0.8125rem;\n  line-height: 1.5;\n}\n\n:host-context([scale=m]) {\n  --calcite-accordion-item-spacing-unit: 0.75rem;\n  --calcite-accordion-item-padding: var(--calcite-accordion-item-spacing-unit)\n    var(--calcite-accordion-item-spacing-unit);\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n\n:host-context([scale=l]) {\n  --calcite-accordion-item-spacing-unit: 1.5rem;\n  --calcite-accordion-item-padding: var(--calcite-accordion-item-spacing-unit)\n    var(--calcite-accordion-item-spacing-unit);\n  font-size: 0.9375rem;\n  line-height: 1.5;\n}\n\n:host-context([icon-position=start]) {\n  --calcite-accordion-item-flex-direction: row-reverse;\n  --calcite-accordion-item-icon-rotation: 90deg;\n  --calcite-accordion-item-active-icon-rotation: 180deg;\n  --calcite-accordion-item-icon-rotation-rtl: -90deg;\n  --calcite-accordion-item-active-icon-rotation-rtl: -180deg;\n  --calcite-accordion-item-icon-spacing-start: 0;\n  --calcite-accordion-item-icon-spacing-end: var(\n    --calcite-accordion-item-spacing-unit\n  );\n}\n\n:host-context([icon-position=end]) {\n  --calcite-accordion-item-flex-direction: row;\n  --calcite-accordion-item-icon-rotation: -90deg;\n  --calcite-accordion-item-active-icon-rotation: -180deg;\n  --calcite-accordion-item-icon-rotation-rtl: 90deg;\n  --calcite-accordion-item-active-icon-rotation-rtl: 180deg;\n  --calcite-accordion-item-icon-spacing-start: var(\n    --calcite-accordion-item-spacing-unit\n  );\n  --calcite-accordion-item-icon-spacing-end: 0;\n}\n\n:host {\n  --calcite-accordion-item-background: var(--calcite-ui-foreground-1);\n}\n\n:host-context([appearance=minimal]) {\n  --calcite-accordion-item-padding: var(--calcite-accordion-item-spacing-unit) 0;\n}\n\n:host-context([appearance=transparent]) {\n  --calcite-accordion-item-border: transparent;\n  --calcite-accordion-item-background: transparent;\n}\n\n:host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  background-color: var(--calcite-accordion-item-background);\n  color: var(--calcite-ui-text-3);\n  -webkit-transition: 150ms ease-in-out;\n  transition: 150ms ease-in-out;\n  text-decoration: none;\n  position: relative;\n  outline: none;\n  position: relative;\n  --calcite-accordion-item-border: var(--calcite-ui-border-2);\n}\n\n:host .accordion-item-header {\n  outline-offset: 0;\n  outline-color: transparent;\n  -webkit-transition: outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;\n  transition: outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;\n}\n\n:host(:focus) .accordion-item-header {\n  outline: 2px solid var(--calcite-ui-blue-1);\n  outline-offset: -2px;\n}\n\n:host([active]) {\n  color: var(--calcite-ui-text-1);\n}\n:host([active]) .accordion-item-content {\n  display: block;\n  color: var(--calcite-ui-text-1);\n}\n:host([active]) .accordion-item-header {\n  border-bottom-color: transparent;\n}\n\n:host .accordion-item-header {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: var(--calcite-accordion-item-flex-direction);\n  flex-direction: var(--calcite-accordion-item-flex-direction);\n  -ms-flex-align: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n:host .accordion-item-content,\n:host .accordion-item-header {\n  padding: var(--calcite-accordion-item-padding);\n  border-bottom: 1px solid var(--calcite-accordion-item-border);\n}\n\n:host .accordion-item-header * {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-transition: 150ms ease-in-out;\n  transition: 150ms ease-in-out;\n}\n\n:host .accordion-item-content {\n  display: none;\n  color: var(--calcite-ui-text-3);\n  padding-top: 0;\n}\n\n:host .accordion-item-icon {\n  margin-left: var(--calcite-accordion-item-icon-spacing-start);\n  margin-right: var(--calcite-accordion-item-icon-spacing-end);\n  color: var(--calcite-ui-text-3);\n  -webkit-transform: rotate(var(--calcite-accordion-item-icon-rotation));\n  transform: rotate(var(--calcite-accordion-item-icon-rotation));\n}\n\n:host([dir=rtl]) .accordion-item-icon {\n  margin-left: var(--calcite-accordion-item-icon-spacing-end);\n  margin-right: var(--calcite-accordion-item-icon-spacing-start);\n  -webkit-transform: rotate(var(--calcite-accordion-item-icon-rotation-rtl));\n  transform: rotate(var(--calcite-accordion-item-icon-rotation-rtl));\n}\n\n:host([active]) .accordion-item-icon {\n  color: var(--calcite-ui-text-1);\n  -webkit-transform: rotate(var(--calcite-accordion-item-active-icon-rotation));\n  transform: rotate(var(--calcite-accordion-item-active-icon-rotation));\n}\n\n:host([active][dir=rtl]) .accordion-item-icon {\n  -webkit-transform: rotate(var(--calcite-accordion-item-active-icon-rotation-rtl));\n  transform: rotate(var(--calcite-accordion-item-active-icon-rotation-rtl));\n}\n\n:host .accordion-item-header-text {\n  margin-right: auto;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex: 1;\n  flex: 1;\n  text-align: initial;\n}\n\n:host([dir=rtl]) .accordion-item-header-text {\n  margin-left: auto;\n  margin-right: 0;\n}\n\n:host .accordion-item-title,\n:host .accordion-item-subtitle {\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n}\n\n:host .accordion-item-title {\n  color: var(--calcite-ui-text-2);\n}\n\n:host .accordion-item-subtitle {\n  color: var(--calcite-ui-text-3);\n}\n\n:host([dir=rtl]) .accordion-item-title {\n  margin-right: 0;\n  margin-left: auto;\n}\n\n:host(:focus) .accordion-item-title,\n:host(:hover) .accordion-item-title {\n  color: var(--calcite-ui-text-1);\n}\n:host(:focus) .accordion-item-subtitle,\n:host(:hover) .accordion-item-subtitle {\n  color: var(--calcite-ui-text-2);\n}\n\n:host(:focus) .accordion-item-title,\n:host(:active) .accordion-item-title,\n:host([active]) .accordion-item-title {\n  color: var(--calcite-ui-text-1);\n  font-weight: 500;\n}\n:host(:focus) .accordion-item-subtitle,\n:host(:active) .accordion-item-subtitle,\n:host([active]) .accordion-item-subtitle {\n  color: var(--calcite-ui-text-2);\n}"; }
};

export { CalciteAccordionItem as calcite_accordion_item };
