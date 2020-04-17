import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './core-17370b86.js';
import { a as getElementProp, g as getElementDir } from './dom-21b0c18b.js';
import { S as SPACE, a as ENTER, U as UP, D as DOWN, L as LEFT, R as RIGHT, H as HOME, E as END } from './keys-ed140d96.js';

const CalciteStepperItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        /** is the step active */
        this.active = false;
        /** has the step been completed */
        this.complete = false;
        /** does the step contain an error that needs to be resolved by the user */
        this.error = false;
        /** is the step disabled and not navigable to by a user */
        this.disabled = false;
        /** should the items display an icon based on status */
        /** @internal */
        this.icon = false;
        /** optionally display the step number next to the title and subtitle */
        /** @internal */
        this.numbered = false;
        /** the scale of the item */
        /** @internal */
        this.scale = "m";
        this.calciteStepperItemKeyEvent = createEvent(this, "calciteStepperItemKeyEvent", 7);
        this.calciteStepperItemSelected = createEvent(this, "calciteStepperItemSelected", 7);
        this.registerCalciteStepperItem = createEvent(this, "registerCalciteStepperItem", 7);
    }
    // watch for removal of disabled to register step
    disabledWatcher() {
        this.registerStepperItem();
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentWillLoad() {
        this.icon = getElementProp(this.el, "icon", false);
        this.numbered = getElementProp(this.el, "numbered", false);
        this.layout = getElementProp(this.el, "layout", false);
        this.scale = getElementProp(this.el, "scale", "m");
    }
    componentDidLoad() {
        this.itemPosition = this.getItemPosition();
        this.itemContent = this.getItemContent();
        this.registerStepperItem();
        if (this.active)
            this.emitRequestedItem();
    }
    componentDidUpdate() {
        if (this.active)
            this.emitRequestedItem();
    }
    render() {
        const dir = getElementDir(this.el);
        return (h(Host, { dir: dir, tabindex: this.disabled ? null : 0, "aria-expanded": this.active.toString(), onClick: () => this.emitRequestedItem() }, h("div", { class: "stepper-item-header" }, this.icon ? this.setIcon() : null, this.numbered ? (h("div", { class: "stepper-item-number" }, this.getItemPosition() + 1, ".")) : null, h("div", { class: "stepper-item-header-text" }, h("span", { class: "stepper-item-title" }, this.itemTitle), h("span", { class: "stepper-item-subtitle" }, this.itemSubtitle))), h("div", { class: "stepper-item-content" }, h("slot", null))));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    keyDownHandler(e) {
        if (!this.disabled && e.target === this.el) {
            switch (e.keyCode) {
                case SPACE:
                case ENTER:
                    this.emitRequestedItem();
                    e.preventDefault();
                    break;
                case UP:
                case DOWN:
                case LEFT:
                case RIGHT:
                case HOME:
                case END:
                    this.calciteStepperItemKeyEvent.emit({ item: e });
                    e.preventDefault();
                    break;
            }
        }
    }
    updateActiveItemOnChange(event) {
        this.activePosition = event.detail.position;
        this.determineActiveItem();
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    setIcon() {
        var path = this.active
            ? "circleF"
            : this.error
                ? "exclamationMarkCircleF"
                : this.complete
                    ? "checkCircleF"
                    : "circle";
        return (h("calcite-icon", { icon: path, scale: "s", class: "stepper-item-icon" }));
    }
    determineActiveItem() {
        this.active = !this.disabled && this.itemPosition === this.activePosition;
    }
    registerStepperItem() {
        this.registerCalciteStepperItem.emit({
            position: this.itemPosition,
            content: this.itemContent,
        });
    }
    emitRequestedItem() {
        if (!this.disabled) {
            this.calciteStepperItemSelected.emit({
                position: this.itemPosition,
                content: this.itemContent,
            });
        }
    }
    getItemContent() {
        // handle ie and edge
        return this.el.shadowRoot.querySelector("slot")
            ? this.el.shadowRoot
                .querySelector("slot")
                .assignedNodes({ flatten: true })
            : this.el.querySelector(".stepper-item-content")
                ? this.el.querySelector(".stepper-item-content")
                : null;
    }
    getItemPosition() {
        const parent = this.el.parentElement;
        return Array.prototype.indexOf.call(parent.querySelectorAll("calcite-stepper-item"), this.el);
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "disabled": ["disabledWatcher"]
    }; }
    static get style() { return ":host([hidden]) {\n  display: none;\n}\n\n:host([scale=s]) {\n  --calcite-stepper-item-spacing-unit-s: 0.1875rem;\n  --calcite-stepper-item-spacing-unit-m: 0.375rem;\n  --calcite-stepper-item-spacing-unit-l: 0.75rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n\n:host([scale=m]) {\n  --calcite-stepper-item-spacing-unit-s: 0.25rem;\n  --calcite-stepper-item-spacing-unit-m: 0.5rem;\n  --calcite-stepper-item-spacing-unit-l: 1rem;\n  font-size: 0.9375rem;\n  line-height: 1.5;\n}\n\n:host([scale=l]) {\n  --calcite-stepper-item-spacing-unit-s: 0.375rem;\n  --calcite-stepper-item-spacing-unit-m: 0.75rem;\n  --calcite-stepper-item-spacing-unit-l: 1.5rem;\n  font-size: 1rem;\n  line-height: 1.5;\n}\n\n:host-context([theme=dark]) {\n  --calcite-ui-blue-1: #00A0FF;\n  --calcite-ui-blue-2: #0087D7;\n  --calcite-ui-blue-3: #47BBFF;\n  --calcite-ui-green-1: #36DA43;\n  --calcite-ui-green-2: #11AD1D;\n  --calcite-ui-green-3: #44ED51;\n  --calcite-ui-yellow-1: #FFC900;\n  --calcite-ui-yellow-2: #F4B000;\n  --calcite-ui-yellow-3: #FFE24D;\n  --calcite-ui-red-1: #FE583E;\n  --calcite-ui-red-2: #F3381B;\n  --calcite-ui-red-3: #FF7465;\n  --calcite-ui-background: #202020;\n  --calcite-ui-foreground-1: #2b2b2b;\n  --calcite-ui-foreground-2: #353535;\n  --calcite-ui-foreground-3: #404040;\n  --calcite-ui-text-1: #ffffff;\n  --calcite-ui-text-2: #bfbfbf;\n  --calcite-ui-text-3: #9f9f9f;\n  --calcite-ui-border-1: #4a4a4a;\n  --calcite-ui-border-2: #404040;\n  --calcite-ui-border-3: #353535;\n  --calcite-ui-border-4: #757575;\n  --calcite-ui-border-5: #9f9f9f;\n}\n\n:host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  color: var(--calcite-ui-text-3);\n  -webkit-transition: 150ms ease-in-out;\n  transition: 150ms ease-in-out;\n  text-decoration: none;\n  outline: none;\n  position: relative;\n  border-top: 3px solid var(--calcite-ui-border-3);\n  cursor: pointer;\n  margin-right: var(--calcite-stepper-item-spacing-unit-l);\n}\n\n:host([dir=rtl]) {\n  margin-left: var(--calcite-stepper-item-spacing-unit-l);\n  margin-right: 0;\n}\n\n:host {\n  outline-offset: 0;\n  outline-color: transparent;\n  -webkit-transition: outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;\n  transition: outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;\n}\n\n:host(:focus) {\n  outline: 2px solid var(--calcite-ui-blue-1);\n  outline-offset: 2px;\n}\n\n:host .stepper-item-header {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: var(--calcite-stepper-item-flex-direction);\n  flex-direction: var(--calcite-stepper-item-flex-direction);\n  -ms-flex-align: start;\n  align-items: flex-start;\n  cursor: pointer;\n}\n\n:host .stepper-item-content,\n:host .stepper-item-header {\n  padding: var(--calcite-stepper-item-spacing-unit-l) var(--calcite-stepper-item-spacing-unit-m);\n  padding-left: 0;\n  -webkit-transition: 150ms ease-in-out;\n  transition: 150ms ease-in-out;\n  text-align: left;\n}\n\n:host([dir=rtl]) .stepper-item-content,\n:host([dir=rtl]) .stepper-item-header {\n  padding-left: initial;\n  padding-right: 0;\n  text-align: right;\n}\n\n:host .stepper-item-header * {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-transition: 150ms ease-in-out;\n  transition: 150ms ease-in-out;\n}\n\n:host .stepper-item-content {\n  -ms-flex-direction: column;\n  flex-direction: column;\n  width: 100%;\n  display: none;\n}\n\n:host .stepper-item-icon {\n  margin-right: var(--calcite-stepper-item-spacing-unit-l);\n  margin-top: var(--calcite-stepper-item-spacing-unit-s);\n  color: var(--calcite-ui-text-3);\n  opacity: 0.5;\n  height: 12px;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -ms-flex-item-align: start;\n  align-self: flex-start;\n  -webkit-transition: 150ms ease-in-out;\n  transition: 150ms ease-in-out;\n}\n\n:host([dir=rtl]) .stepper-item-icon {\n  margin-left: var(--calcite-stepper-item-spacing-unit-l);\n  margin-right: 0;\n}\n\n:host .stepper-item-header-text {\n  margin-right: auto;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  text-align: initial;\n}\n\n:host([dir=rtl]) .stepper-item-header-text {\n  margin-left: auto;\n  margin-right: 0;\n}\n\n:host .stepper-item-title,\n:host .stepper-item-subtitle {\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n}\n\n:host .stepper-item-title {\n  color: var(--calcite-ui-text-2);\n}\n\n:host .stepper-item-subtitle {\n  color: var(--calcite-ui-text-3);\n}\n\n:host([dir=rtl]) .stepper-item-title {\n  margin-right: 0;\n  margin-left: auto;\n}\n\n:host .stepper-item-number {\n  font-weight: bold;\n  color: var(--calcite-ui-text-3);\n  margin-right: var(--calcite-stepper-item-spacing-unit-l);\n  -webkit-transition: 150ms ease-in-out;\n  transition: 150ms ease-in-out;\n}\n\n:host([dir=rtl]) .stepper-item-number {\n  margin-left: var(--calcite-stepper-item-spacing-unit-l);\n  margin-right: initial;\n}\n\n:host([disabled]) {\n  opacity: 0.4;\n}\n\n:host([disabled]),\n:host([disabled]) * {\n  cursor: not-allowed;\n  pointer-events: none;\n}\n\n:host([complete]) {\n  border-top-color: rgba(0, 122, 194, 0.5);\n}\n:host([complete]) .stepper-item-icon {\n  color: var(--calcite-ui-blue-1);\n}\n\n:host([error]) {\n  border-top-color: var(--calcite-ui-red-1);\n}\n:host([error]) .stepper-item-number {\n  color: var(--calcite-ui-red-1);\n}\n:host([error]) .stepper-item-icon {\n  color: var(--calcite-ui-red-1);\n  opacity: 1;\n}\n\n:host(:hover:not([disabled]):not([active])),\n:host(:focus:not([disabled]):not([active])) {\n  border-top-color: rgba(0, 122, 194, 0.75);\n}\n:host(:hover:not([disabled]):not([active])) .stepper-item-title,\n:host(:focus:not([disabled]):not([active])) .stepper-item-title {\n  color: var(--calcite-ui-text-1);\n}\n:host(:hover:not([disabled]):not([active])) .stepper-item-subtitle,\n:host(:focus:not([disabled]):not([active])) .stepper-item-subtitle {\n  color: var(--calcite-ui-text-2);\n}\n\n:host([error]:hover:not([disabled]):not([active])),\n:host([error]:focus:not([disabled]):not([active])) {\n  border-top-color: rgba(216, 48, 32, 0.75);\n}\n\n:host([active]) {\n  border-top-color: var(--calcite-ui-blue-1);\n}\n:host([active]) .stepper-item-title {\n  font-weight: 500;\n  color: var(--calcite-ui-text-1);\n}\n:host([active]) .stepper-item-subtitle {\n  color: var(--calcite-ui-text-2);\n}\n:host([active]) .stepper-item-number {\n  color: var(--calcite-ui-blue-1);\n}\n:host([active]) .stepper-item-icon {\n  color: var(--calcite-ui-blue-1);\n  opacity: 1;\n}\n\n:host([layout=vertical]) {\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  border-top: 0;\n  border-left: 3px solid var(--calcite-ui-border-3);\n  padding: 0 0 0 var(--calcite-stepper-item-spacing-unit-l);\n  margin: 0 0 var(--calcite-stepper-item-spacing-unit-m) 0;\n}\n:host([layout=vertical]) .stepper-item-icon {\n  margin: var(--calcite-stepper-item-spacing-unit-m) 0 0 auto;\n  padding-left: var(--calcite-stepper-item-spacing-unit-l);\n  -ms-flex-order: 3;\n  order: 3;\n}\n:host([layout=vertical]) .stepper-item-header {\n  padding-right: 0;\n}\n:host([layout=vertical]) .stepper-item-content {\n  padding: 0;\n}\n\n:host([layout=vertical][active]) .stepper-item-content {\n  display: -ms-flexbox;\n  display: flex;\n}\n:host([layout=vertical][active]) .stepper-item-content ::slotted(:last-child) {\n  margin-bottom: var(--calcite-stepper-item-spacing-unit-l);\n}\n\n:host([layout=vertical][dir=rtl]) {\n  border-left: 0;\n  border-right: 3px solid var(--calcite-ui-border-3);\n  padding: 0 var(--calcite-stepper-item-spacing-unit-l) 0 0;\n}\n:host([layout=vertical][dir=rtl]) .stepper-item-icon {\n  margin: var(--calcite-stepper-item-spacing-unit-m) auto 0 0;\n  padding-left: 0;\n  padding-right: var(--calcite-stepper-item-spacing-unit-l);\n}\n:host([layout=vertical][dir=rtl]) .stepper-item-header {\n  padding-left: 0;\n  padding-right: intial;\n}\n\n:host([layout=vertical][complete]) {\n  border-color: rgba(0, 122, 194, 0.5);\n}\n\n:host([layout=vertical][error]) {\n  border-color: var(--calcite-ui-red-1);\n}\n\n:host([layout=vertical][active]) {\n  border-color: var(--calcite-ui-blue-1);\n}\n\n:host([layout=vertical]:hover:not([disabled]):not([active])),\n:host([layout=vertical]:focus:not([disabled]):not([active])) {\n  border-color: rgba(0, 122, 194, 0.75);\n}\n\n:host([layout=vertical][error]:hover:not([disabled]):not([active])),\n:host([layout=vertical][error]:focus:not([disabled]):not([active])) {\n  border-color: rgba(216, 48, 32, 0.75);\n}"; }
};

export { CalciteStepperItem as calcite_stepper_item };
