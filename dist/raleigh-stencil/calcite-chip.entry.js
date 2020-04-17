import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './core-17370b86.js';
import { g as getElementDir } from './dom-21b0c18b.js';

const CSS = {
    close: 'close'
};
const TEXT = {
    close: 'close'
};

const CalciteChip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** specify the scale of the chip, defaults to m */
        this.scale = "m";
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.closeClickHandler = (event) => {
            event.preventDefault();
            this.calciteChipDismiss.emit(this.el);
        };
        this.calciteChipDismiss = createEvent(this, "calciteChipDismiss", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Render Methods
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        let scale = ["xs", "s", "m", "l", "xl"];
        if (!scale.includes(this.scale))
            this.scale = "m";
    }
    render() {
        const dir = getElementDir(this.el);
        const iconScale = this.scale === "xs" || this.scale === "s" || this.scale === "m"
            ? "s"
            : this.scale === "l"
                ? "m"
                : "l";
        const iconEl = (h("calcite-icon", { class: "calcite-chip--icon", icon: this.icon, scale: iconScale }));
        return (h(Host, { dir: dir }, this.icon ? iconEl : null, h("slot", { name: "chip-image" }), h("span", null, h("slot", null)), h("button", { onClick: this.closeClickHandler, class: CSS.close, title: TEXT.close }, h("calcite-icon", { scale: iconScale, icon: "x" }))));
    }
    get el() { return getElement(this); }
    static get style() { return ":host([hidden]) {\n  display: none;\n}\n\n:host([scale=xs]) {\n  font-size: 10px;\n  --calcite-chip-spacing-unit-l: 8px;\n  --calcite-chip-spacing-unit-s: 4px;\n}\n\n:host([scale=s]) {\n  font-size: 12px;\n  --calcite-chip-spacing-unit-l: 12px;\n  --calcite-chip-spacing-unit-s: 8px;\n}\n\n:host([scale=m]) {\n  font-size: 14px;\n  --calcite-chip-spacing-unit-l: 16px;\n  --calcite-chip-spacing-unit-s: 12px;\n}\n\n:host([scale=l]) {\n  font-size: 16px;\n  --calcite-chip-spacing-unit-l: 20px;\n  --calcite-chip-spacing-unit-s: 16px;\n}\n\n:host([scale=xl]) {\n  font-size: 18px;\n  --calcite-chip-spacing-unit-l: 24px;\n  --calcite-chip-spacing-unit-s: 20px;\n}\n\n:host {\n  --calcite-chip-button-border-radius: 0 50px 50px 0;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: center;\n  align-items: center;\n  justify-self: center;\n  background-color: var(--calcite-ui-background);\n  border-radius: 50px;\n  color: var(--calcite-ui-text-1);\n  font-weight: 500;\n}\n\n:host button {\n  outline-offset: 0;\n  outline-color: transparent;\n  -webkit-transition: outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;\n  transition: outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;\n}\n:host button:focus {\n  outline: 2px solid var(--calcite-ui-blue-1);\n  outline-offset: -2px;\n}\n\n:host([dir=rtl]) {\n  --calcite-chip-button-border-radius: 50px 0 0 50px;\n  text-align: right;\n}\n\n:host span {\n  padding: var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-l);\n}\n\n:host([dir=rtl]) span {\n  padding: var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-l) var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-s);\n}\n\n:host button {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  -webkit-appearance: none;\n  background-color: transparent;\n  margin: 0;\n  padding: 0;\n  border-radius: var(--calcite-chip-button-border-radius);\n  border: none;\n  -webkit-transition: 150ms ease-in-out;\n  transition: 150ms ease-in-out;\n  padding: var(--calcite-chip-spacing-unit-s);\n  cursor: pointer;\n  color: var(--calcite-ui-text-1);\n}\n:host button:hover, :host button:focus {\n  background-color: var(--calcite-ui-foreground-2);\n  border-color: var(--calcite-ui-foreground-2);\n}\n:host button:active {\n  background-color: var(--calcite-ui-foreground-3);\n}\n\n:host slot[name=chip-image] {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n\n:host slot[name=chip-image]::slotted(*) {\n  border-radius: 50%;\n  height: 100%;\n}\n\n.calcite-chip--icon {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  margin: 0 0 0 var(--calcite-chip-spacing-unit-l);\n  -webkit-transition: 150ms ease-in-out;\n  transition: 150ms ease-in-out;\n  border-radius: var(--calcite-chip-button-border-radius);\n  cursor: pointer;\n}\n\n:host([dir=rtl]) .calcite-chip--icon {\n  margin: 0 var(--calcite-chip-spacing-unit-l) 0 0;\n}"; }
};

export { CalciteChip as calcite_chip };
