import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './core-17370b86.js';
import { a as getElementProp, g as getElementDir } from './dom-21b0c18b.js';
import { S as SPACE, a as ENTER, U as UP, D as DOWN, H as HOME, E as END, T as TAB, b as ESCAPE } from './keys-ed140d96.js';

const CSS = {
    icon: "combobox-item-icon",
    label: "combobox-item-label",
    nested: "combobox-item-nested",
    parent: "combobox-item-parent",
    selected: "selected",
    title: "title",
    textContainer: "text-container"
};

const CalciteComboboxItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /* When true, the item cannot be clicked and is visually muted. */
        this.disabled = false;
        /* Set this to true to pre-select an item. Toggles when an item is checked/unchecked. */
        this.selected = false;
        this.isSelected = this.selected;
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.itemClickHandler = (event) => {
            event.preventDefault();
            if (this.disabled) {
                return;
            }
            this.isSelected = !this.isSelected;
            this.calciteComboboxItemChange.emit(this.el);
        };
        this.calciteComboboxItemChange = createEvent(this, "calciteComboboxItemChange", 7);
        this.calciteComboboxItemKeyEvent = createEvent(this, "calciteComboboxItemKeyEvent", 7);
    }
    selectedWatchHandler(newValue) {
        this.isSelected = newValue;
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    componentWillLoad() {
        this.isNested = this.getDepth();
        this.hasDefaultSlot = this.el.querySelector(":not([slot])") !== null;
    }
    // --------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    // --------------------------------------------------------------------------
    keyDownHandler(event) {
        event.stopPropagation();
        switch (event.keyCode) {
            case SPACE:
            case ENTER:
                this.isSelected = !this.isSelected;
                this.calciteComboboxItemChange.emit(this.el);
                event.preventDefault();
                break;
            case UP:
            case DOWN:
            case HOME:
            case END:
            case TAB:
            case ESCAPE:
                this.calciteComboboxItemKeyEvent.emit({
                    event: event,
                    item: this.el,
                });
                event.preventDefault();
                break;
        }
    }
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------
    /**
     * Used to toggle the selection state. By default this won't trigger an event.
     * The first argument allows the value to be coerced, rather than swapping values.
     */
    async toggleSelected(coerce) {
        if (this.disabled) {
            return;
        }
        this.isSelected = typeof coerce === "boolean" ? coerce : !this.isSelected;
    }
    getDepth() {
        var _a;
        return !!((_a = this.el.parentElement) === null || _a === void 0 ? void 0 : _a.closest("calcite-combobox-item"));
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    renderIcon(scale) {
        const iconScale = scale === "xs" || scale === "s" || scale === "m"
            ? "s"
            : scale === "l"
                ? "m"
                : "l";
        const iconPath = this.disabled ? "circle-disallowed" : "check";
        return h("calcite-icon", { class: CSS.icon, scale: iconScale, icon: iconPath });
    }
    renderChildren() {
        if (!this.hasDefaultSlot) {
            return null;
        }
        return (h("ul", null, h("slot", null)));
    }
    render() {
        const classes = {
            [CSS.label]: true,
            [CSS.selected]: this.isSelected,
            [CSS.nested]: this.isNested,
            [CSS.parent]: !this.isNested,
        };
        const scale = getElementProp(this.el, "scale", "m");
        const dir = getElementDir(this.el);
        return (h(Host, { dir: dir, scale: scale, role: "option", "aria-selected": this.isSelected, disabled: this.disabled, tabIndex: this.disabled ? null : 0 }, h("div", { class: classes, onClick: this.itemClickHandler, ref: (el) => (this.comboboxItemEl = el) }, this.renderIcon(scale), h("span", { class: CSS.title }, this.textLabel)), this.renderChildren()));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "selected": ["selectedWatchHandler"]
    }; }
    static get style() { return ":host([hidden]) {\n  display: none;\n}\n\n:host([scale=xs]) {\n  font-size: 10px;\n  --calcite-combobox-item-spacing-unit-l: 8px;\n  --calcite-combobox-item-spacing-unit-s: 4px;\n}\n\n:host([scale=s]) {\n  font-size: 12px;\n  --calcite-combobox-item-spacing-unit-l: 12px;\n  --calcite-combobox-item-spacing-unit-s: 8px;\n}\n\n:host([scale=m]) {\n  font-size: 14px;\n  --calcite-combobox-item-spacing-unit-l: 16px;\n  --calcite-combobox-item-spacing-unit-s: 12px;\n}\n\n:host([scale=l]) {\n  font-size: 16px;\n  --calcite-combobox-item-spacing-unit-l: 20px;\n  --calcite-combobox-item-spacing-unit-s: 16px;\n}\n\n:host([scale=xl]) {\n  font-size: 18px;\n  --calcite-combobox-item-spacing-unit-l: 24px;\n  --calcite-combobox-item-spacing-unit-s: 20px;\n}\n\n:host,\n:host ul {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  margin: 0;\n  padding: 0;\n  outline: none;\n}\n\n:host .combobox-item-label {\n  outline-offset: 0;\n  outline-color: transparent;\n  -webkit-transition: outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;\n  transition: outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;\n}\n\n:host(:focus) .combobox-item-label {\n  outline: 2px solid var(--calcite-ui-blue-1);\n  outline-offset: -2px;\n}\n\n:host .combobox-item-label {\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 100%;\n  -ms-flex-align: center;\n  align-items: center;\n  color: var(--calcite-ui-text-3);\n  -webkit-transition: 150ms ease-in-out;\n  transition: 150ms ease-in-out;\n  padding: var(--calcite-combobox-item-spacing-unit-s);\n  cursor: pointer;\n  text-decoration: none;\n  position: relative;\n}\n:host .combobox-item-label .combobox-item-icon {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  opacity: 0;\n  margin-right: var(--calcite-combobox-item-spacing-unit-s);\n  -webkit-transition: 150ms ease-in-out;\n  transition: 150ms ease-in-out;\n  color: var(--calcite-ui-border-1);\n}\n\n:host([dir=rtl]) .combobox-item-label .combobox-item-icon {\n  margin-left: var(--calcite-combobox-item-spacing-unit-l);\n  margin-right: unset;\n}\n\n:host .combobox-item-label.combobox-item-nested {\n  padding-left: var(--calcite-combobox-item-spacing-unit-s);\n}\n:host .combobox-item-label.combobox-item-nested .combobox-item-icon {\n  padding-left: var(--calcite-combobox-item-spacing-unit-l);\n}\n\n:host([dir=rtl]) .combobox-item-label.combobox-item-nested {\n  padding-right: var(--calcite-combobox-item-spacing-unit-s);\n  padding-left: unset;\n}\n:host([dir=rtl]) .combobox-item-label.combobox-item-nested .combobox-item-icon {\n  padding-right: var(--calcite-combobox-item-spacing-unit-l);\n  padding-left: unset;\n}\n\n:host(:not([disabled])) .combobox-item-label:hover,\n:host(:not([disabled])) .combobox-item-label:active {\n  background-color: var(--calcite-ui-foreground-2);\n  color: var(--calcite-ui-text-1);\n  text-decoration: none;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n:host(:not([disabled])) .combobox-item-label:hover .combobox-item-icon,\n:host(:not([disabled])) .combobox-item-label:active .combobox-item-icon {\n  opacity: 1;\n}\n\n:host(:focus:not([disabled])) .combobox-item-label {\n  color: var(--calcite-ui-text-1);\n  text-decoration: none;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n:host(:focus:not([disabled])) .combobox-item-label .combobox-item-icon {\n  opacity: 1;\n}\n\n:host([disabled]) .combobox-item-label:hover .combobox-item-icon {\n  opacity: 1;\n}\n\n:host([disabled]) .combobox-item-label:hover {\n  cursor: default;\n}\n\n:host(:focus) {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n:host .combobox-item-label.selected {\n  color: var(--calcite-ui-text-1);\n  font-weight: 500;\n}\n:host .combobox-item-label.selected .combobox-item-icon {\n  color: var(--calcite-ui-blue-1);\n  opacity: 1;\n}"; }
};

export { CalciteComboboxItem as calcite_combobox_item };
