import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './core-17370b86.js';
import { S as SPACE, a as ENTER } from './keys-ed140d96.js';

const CalciteDateDay = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Date is outside of range and can't be selected */
        this.disabled = false;
        /** Date is in the current month. */
        this.currentMonth = false;
        /** Date is the current selected date of the picker */
        this.selected = false;
        /** Date is actively in focus for keyboard navigation */
        this.active = false;
        this.calciteDaySelect = createEvent(this, "calciteDaySelect", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    onClick() {
        !this.disabled && this.calciteDaySelect.emit();
    }
    keyDownHandler(e) {
        if (e.keyCode === SPACE || e.keyCode === ENTER) {
            !this.disabled && this.calciteDaySelect.emit();
        }
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    render() {
        const intl = new Intl.NumberFormat(this.locale);
        return (h(Host, { role: "gridcell", tabindex: this.selected || this.active ? 0 : -1 }, h("span", { class: "day" }, intl.format(this.day))));
    }
    get el() { return getElement(this); }
    static get style() { return ":host([hidden]) {\n  display: none;\n}\n\n:host-context([theme=dark]) {\n  --calcite-ui-blue-1: #00A0FF;\n  --calcite-ui-blue-2: #0087D7;\n  --calcite-ui-blue-3: #47BBFF;\n  --calcite-ui-green-1: #36DA43;\n  --calcite-ui-green-2: #11AD1D;\n  --calcite-ui-green-3: #44ED51;\n  --calcite-ui-yellow-1: #FFC900;\n  --calcite-ui-yellow-2: #F4B000;\n  --calcite-ui-yellow-3: #FFE24D;\n  --calcite-ui-red-1: #FE583E;\n  --calcite-ui-red-2: #F3381B;\n  --calcite-ui-red-3: #FF7465;\n  --calcite-ui-background: #202020;\n  --calcite-ui-foreground-1: #2b2b2b;\n  --calcite-ui-foreground-2: #353535;\n  --calcite-ui-foreground-3: #404040;\n  --calcite-ui-text-1: #ffffff;\n  --calcite-ui-text-2: #bfbfbf;\n  --calcite-ui-text-3: #9f9f9f;\n  --calcite-ui-border-1: #4a4a4a;\n  --calcite-ui-border-2: #404040;\n  --calcite-ui-border-3: #353535;\n  --calcite-ui-border-4: #757575;\n  --calcite-ui-border-5: #9f9f9f;\n}\n\n:host {\n  display: -ms-flexbox;\n  display: flex;\n  outline: none;\n  color: var(--calcite-ui-text-3);\n  padding: 0.3rem 0.4rem;\n  cursor: pointer;\n  width: calc(100% / 7);\n  min-width: 0;\n}\n\n:host .day {\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  border-radius: 100%;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n  height: 2rem;\n  width: 2rem;\n  color: var(--calcite-ui-text-3);\n  -webkit-transition: all 150ms ease-in-out;\n  transition: all 150ms ease-in-out;\n  background: none;\n  -webkit-box-shadow: 0 0 0 2px transparent, 0 0 0 0px transparent;\n  box-shadow: 0 0 0 2px transparent, 0 0 0 0px transparent;\n}\n\n:host([current-month]) .day {\n  color: var(--calcite-ui-text-1);\n}\n\n:host([disabled]) {\n  cursor: default;\n  pointer-events: none;\n}\n:host([disabled]) .day {\n  color: var(--calcite-ui-border-1);\n}\n\n:host(:hover) .day,\n:host([active]) .day {\n  background-color: var(--calcite-ui-foreground-2);\n  color: var(--calcite-ui-text-1);\n}\n\n:host(:focus) .day {\n  -webkit-box-shadow: 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-blue-1);\n  box-shadow: 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-blue-1);\n}\n\n:host([selected]) .day {\n  background-color: var(--calcite-ui-blue-1);\n  color: var(--calcite-ui-foreground-1);\n  font-weight: 500;\n}"; }
};

export { CalciteDateDay as calcite_date_day };
