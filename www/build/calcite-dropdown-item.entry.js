import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './core-17370b86.js';
import { a as getElementProp, g as getElementDir } from './dom-21b0c18b.js';
import { g as guid } from './guid-8a4914c4.js';
import { S as SPACE, a as ENTER, b as ESCAPE, T as TAB, U as UP, D as DOWN, H as HOME, E as END } from './keys-ed140d96.js';

const CalciteDropdownItem = class {
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
        this.dropdownItemId = `calcite-dropdown-item-${guid()}`;
        /** what selection mode is the parent dropdown group in */
        this.selectionMode = getElementProp(this.el, "selection-mode", "single");
        this.calciteDropdownItemKeyEvent = createEvent(this, "calciteDropdownItemKeyEvent", 7);
        this.calciteDropdownItemSelected = createEvent(this, "calciteDropdownItemSelected", 7);
        this.closeCalciteDropdown = createEvent(this, "closeCalciteDropdown", 7);
        this.registerCalciteDropdownItem = createEvent(this, "registerCalciteDropdownItem", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /** Focuses the selected item. */
    async setFocus() {
        this.el.focus();
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentDidLoad() {
        this.itemPosition = this.getItemPosition();
        this.registerCalciteDropdownItem.emit({
            position: this.itemPosition,
        });
    }
    render() {
        const attributes = this.getAttributes();
        const dir = getElementDir(this.el);
        const scale = getElementProp(this.el, "scale", "m");
        const iconScale = scale === "s" || scale === "m" ? "s" : "m";
        const iconStartEl = (h("calcite-icon", { class: "dropdown-item-icon-start", icon: this.iconStart, scale: iconScale }));
        const iconEndEl = (h("calcite-icon", { class: "dropdown-item-icon-end", icon: this.iconEnd, scale: iconScale }));
        const slottedContent = this.iconStart && this.iconEnd ? ([iconStartEl, h("slot", null), iconEndEl]) : this.iconStart ? ([iconStartEl, h("slot", null)]) : this.iconEnd ? ([h("slot", null), iconEndEl]) : (h("slot", null));
        const contentEl = !this.href ? (slottedContent) : (h("a", Object.assign({}, attributes), slottedContent));
        return (h(Host, { dir: dir, tabindex: "0", role: "menuitem", "selection-mode": this.selectionMode, "aria-selected": this.active.toString(), isLink: this.href }, this.selectionMode === "multi" ? (h("calcite-icon", { class: "dropdown-item-check-icon", scale: "s", icon: "check" })) : null, contentEl));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    onClick() {
        this.emitRequestedItem();
    }
    keyDownHandler(e) {
        switch (e.keyCode) {
            case SPACE:
            case ENTER:
                this.emitRequestedItem();
                if (e.path && e.path[0].nodeName === "A")
                    e.click();
                break;
            case ESCAPE:
                this.closeCalciteDropdown.emit();
                break;
            case TAB:
            case UP:
            case DOWN:
            case HOME:
            case END:
                this.calciteDropdownItemKeyEvent.emit({ item: e });
                break;
        }
        e.preventDefault();
    }
    registerCalciteDropdownGroup(event) {
        this.currentDropdownGroup = event.detail.groupId;
    }
    updateActiveItemOnChange(event) {
        this.requestedDropdownGroup = event.detail.requestedDropdownGroup;
        this.requestedDropdownItem = event.detail.requestedDropdownItem;
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
                if (this.dropdownItemId === this.requestedDropdownItem)
                    this.active = !this.active;
                break;
            case "single":
                if (this.dropdownItemId === this.requestedDropdownItem)
                    this.active = true;
                else if (this.requestedDropdownGroup === this.currentDropdownGroup)
                    this.active = false;
                break;
            case "none":
                this.active = false;
                break;
        }
    }
    emitRequestedItem() {
        this.calciteDropdownItemSelected.emit({
            requestedDropdownItem: this.dropdownItemId,
            requestedDropdownGroup: this.currentDropdownGroup,
        });
        this.closeCalciteDropdown.emit();
    }
    getAttributes() {
        // spread attributes from the component to rendered child, filtering out props
        let props = [
            "icon-start",
            "icon-end",
            "active",
            "hasText",
            "isLink",
            "dir",
            "id",
            "theme",
        ];
        return Array.from(this.el.attributes)
            .filter((a) => a && !props.includes(a.name))
            .reduce((acc, { name, value }) => (Object.assign(Object.assign({}, acc), { [name]: value })), {});
    }
    getItemPosition() {
        const group = this.el.closest("calcite-dropdown-group");
        return Array.prototype.indexOf.call(group.querySelectorAll("calcite-dropdown-item"), this.el);
    }
    get el() { return getElement(this); }
    static get style() { return "\@charset \"UTF-8\";\n:host([hidden]) {\n  display: none;\n}\n\n:host-context([theme=dark]) {\n  --calcite-ui-blue-1: #00A0FF;\n  --calcite-ui-blue-2: #0087D7;\n  --calcite-ui-blue-3: #47BBFF;\n  --calcite-ui-green-1: #36DA43;\n  --calcite-ui-green-2: #11AD1D;\n  --calcite-ui-green-3: #44ED51;\n  --calcite-ui-yellow-1: #FFC900;\n  --calcite-ui-yellow-2: #F4B000;\n  --calcite-ui-yellow-3: #FFE24D;\n  --calcite-ui-red-1: #FE583E;\n  --calcite-ui-red-2: #F3381B;\n  --calcite-ui-red-3: #FF7465;\n  --calcite-ui-background: #202020;\n  --calcite-ui-foreground-1: #2b2b2b;\n  --calcite-ui-foreground-2: #353535;\n  --calcite-ui-foreground-3: #404040;\n  --calcite-ui-text-1: #ffffff;\n  --calcite-ui-text-2: #bfbfbf;\n  --calcite-ui-text-3: #9f9f9f;\n  --calcite-ui-border-1: #4a4a4a;\n  --calcite-ui-border-2: #404040;\n  --calcite-ui-border-3: #353535;\n  --calcite-ui-border-4: #757575;\n  --calcite-ui-border-5: #9f9f9f;\n}\n\n:host-context([scale=s]) {\n  --calcite-dropdown-item-padding: 0.3rem 1rem 0.3rem 2.25rem;\n}\n\n:host-context([scale=m]) {\n  --calcite-dropdown-item-padding: 0.5rem 1rem 0.5rem 2.25rem;\n}\n\n:host-context([scale=l]) {\n  --calcite-dropdown-item-padding: 0.75rem 1rem 0.75rem 2.25rem;\n}\n\n:host-context([dir=rtl][scale=s]) {\n  --calcite-dropdown-item-padding: 0.3rem 2.25rem 0.3rem 1rem;\n}\n\n:host-context([dir=rtl][scale=m]) {\n  --calcite-dropdown-item-padding: 0.5rem 2.25rem 0.5rem 1rem;\n}\n\n:host-context([dir=rtl][scale=l]) {\n  --calcite-dropdown-item-padding: 0.75rem 2.25rem 0.75rem 1rem;\n}\n\n:host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -ms-flex-align: center;\n  align-items: center;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: var(--calcite-ui-text-3);\n  -webkit-transition: 150ms ease-in-out;\n  transition: 150ms ease-in-out;\n  padding: var(--calcite-dropdown-item-padding);\n  cursor: pointer;\n  text-decoration: none;\n  outline: none;\n  position: relative;\n}\n:host:before {\n  content: \"•\";\n  position: absolute;\n  left: 1rem;\n  opacity: 0;\n  color: var(--calcite-ui-border-1);\n  -webkit-transition: 150ms ease-in-out;\n  transition: 150ms ease-in-out;\n}\n\n:host {\n  outline-offset: 0;\n  outline-color: transparent;\n  -webkit-transition: outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;\n  transition: outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;\n}\n\n:host(:focus) {\n  outline: 2px solid var(--calcite-ui-blue-1);\n  outline-offset: -2px;\n}\n\n:host([islink]) {\n  padding: 0;\n}\n:host([islink]) a {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -ms-flex-align: center;\n  align-items: center;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: var(--calcite-ui-text-3);\n  -webkit-transition: 150ms ease-in-out;\n  transition: 150ms ease-in-out;\n  padding: var(--calcite-dropdown-item-padding);\n  cursor: pointer;\n  text-decoration: none;\n  outline: none;\n  position: relative;\n}\n:host([islink]) a:before {\n  content: \"•\";\n  position: absolute;\n  left: 1rem;\n  opacity: 0;\n  color: var(--calcite-ui-border-1);\n  -webkit-transition: 150ms ease-in-out;\n  transition: 150ms ease-in-out;\n}\n\n:host(:hover),\n:host(:active) {\n  background-color: var(--calcite-ui-foreground-2);\n  color: var(--calcite-ui-text-1);\n  text-decoration: none;\n}\n\n:host(:focus) {\n  color: var(--calcite-ui-text-1);\n  text-decoration: none;\n}\n\n:host(:active) {\n  background-color: var(--calcite-ui-foreground-3);\n}\n\n:host(:hover):before,\n:host(:active):before,\n:host(:focus):before {\n  opacity: 1;\n}\n\n:host([dir=rtl]):before {\n  left: unset;\n  right: 1rem;\n}\n\n:host([active]:not([selection-mode=none])) {\n  color: var(--calcite-ui-text-1);\n  font-weight: 500;\n}\n:host([active]:not([selection-mode=none])):before {\n  opacity: 1;\n  color: var(--calcite-ui-blue-1);\n}\n:host([active]:not([selection-mode=none])) calcite-icon {\n  color: var(--calcite-ui-blue-1);\n}\n\n:host([selection-mode=multi]):before,\n:host([selection-mode=none]):before {\n  display: none;\n}\n\n:host([selection-mode=none]:not([islink])),\n:host([selection-mode=none][isLink]) a {\n  padding-left: 1rem;\n}\n\n:host([dir=rtl][selection-mode=none]:not([islink])),\n:host([dir=rtl][selection-mode=none][isLink]) a {\n  padding-right: 1rem;\n}\n\n:host .dropdown-item-check-icon {\n  position: absolute;\n  left: 0.8571428571rem;\n  opacity: 0;\n  -webkit-transform: scale(0.9);\n  transform: scale(0.9);\n  -webkit-transition: 150ms ease-in-out;\n  transition: 150ms ease-in-out;\n}\n\n:host([dir=rtl]) .dropdown-item-check-icon {\n  left: unset;\n  right: 0.8571428571rem;\n}\n\n:host(:hover) .dropdown-item-check-icon {\n  color: var(--calcite-ui-border-1);\n  opacity: 1;\n}\n\n:host([active]) .dropdown-item-check-icon {\n  color: var(--calcite-ui-blue-1);\n  opacity: 1;\n}\n\n:host .dropdown-item-icon-start {\n  margin-right: 1rem;\n}\n\n:host .dropdown-item-icon-end {\n  margin-left: auto;\n  padding-left: 1rem;\n}\n\n:host([dir=rtl]) calcite-icon {\n  margin-right: 0;\n  margin-left: 1rem;\n}\n\n:host([dir=rtl]) .dropdown-item-icon-start {\n  margin-left: 1rem;\n  margin-right: 0;\n}\n\n:host([dir=rtl]) .dropdown-item-icon-end {\n  margin-right: auto;\n  padding-right: 1rem;\n  margin-left: 0;\n  padding-left: 0;\n}"; }
};

export { CalciteDropdownItem as calcite_dropdown_item };
