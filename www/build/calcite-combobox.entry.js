import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './core-17370b86.js';
import { g as getElementDir } from './dom-21b0c18b.js';
import { b as ESCAPE, D as DOWN, U as UP, T as TAB, H as HOME, E as END } from './keys-ed140d96.js';
import { forIn, debounce } from 'lodash-es';

const filter = (data, value) => {
    const regex = new RegExp(value, "ig");
    if (data.length === 0) {
        console.warn(`No data was passed to the filter function.
    The data argument should be an array of objects`);
    }
    const find = (input, RE) => {
        let found = false;
        forIn(input, (val) => {
            if (typeof val === "function") {
                return;
            }
            if (Array.isArray(val) || (typeof val === "object" && val !== null)) {
                if (find(val, RE)) {
                    found = true;
                }
            }
            else if (RE.test(val)) {
                found = true;
            }
        });
        return found;
    };
    const result = data.filter((item) => {
        return find(item, regex);
    });
    return result;
};

const COMBO_BOX_ITEM = "calcite-combobox-item";
const CalciteCombobox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        this.active = false;
        this.disabled = false;
        /** specify the scale of the combobox, defaults to m */
        this.scale = "m";
        this.items = [];
        this.selectedItems = [];
        this.visibleItems = [];
        this.textInput = null;
        this.observer = new MutationObserver(this.updateItems);
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.inputHandler = (event) => {
            const target = event.target;
            this.filterItems(target.value);
        };
        this.filterItems = debounce((value) => {
            const filteredData = filter(this.data, value);
            const values = filteredData.map((item) => item.value);
            this.items.forEach((item) => {
                item.hidden = values.indexOf(item.value) === -1;
                // If item is nested inside another item...
                const { parentItem } = item;
                if (parentItem) {
                    // If the parent item is a match, show me.
                    if (values.indexOf(parentItem.value) !== -1) {
                        item.hidden = false;
                    }
                    // If I am a match, show my parent.
                    if (values.indexOf(item.value) !== -1) {
                        parentItem.hidden = false;
                    }
                }
            });
            this.visibleItems = this.getVisibleItems();
        }, 100);
        this.comboboxFocusHandler = (event) => {
            this.active = event.type === "focusin";
        };
        this.calciteLookupChange = createEvent(this, "calciteLookupChange", 7);
        this.calciteComboboxChipDismiss = createEvent(this, "calciteComboboxChipDismiss", 7);
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    connectedCallback() {
        // prop validations
        let scale = ["xs", "s", "m", "l", "xl"];
        if (!scale.includes(this.scale))
            this.scale = "m";
    }
    componentWillLoad() {
        this.updateItems();
    }
    componentDidLoad() {
        this.observer.observe(this.el, { childList: true, subtree: true });
    }
    componentDidUnload() {
        this.observer.disconnect();
    }
    calciteComboboxItemChangeHandler(event) {
        this.toggleSelection(event.detail);
    }
    calciteChipDismissHandler(event) {
        var _a;
        this.textInput.focus();
        const value = (_a = event.detail) === null || _a === void 0 ? void 0 : _a.value;
        const comboboxItem = this.items.find((item) => item.value === value);
        if (comboboxItem) {
            this.toggleSelection(comboboxItem, false);
        }
    }
    handleInputKeyDown(event) {
        if (event.target === this.textInput) {
            if (event.shiftKey && event.key === "TAB") {
                return;
            }
            else if (event.keyCode === ESCAPE) {
                this.active = false;
            }
            else if (event.keyCode === DOWN) {
                this.focusFirstItem();
            }
            else if (event.keyCode === UP) {
                this.focusLastItem();
            }
            else {
                this.active = true;
                this.textInput.focus();
            }
        }
    }
    toggleSelection(item, value = !item.selected) {
        item.selected = value;
        this.selectedItems = this.getSelectedItems();
        this.calciteLookupChange.emit(this.selectedItems);
    }
    getVisibleItems() {
        return this.items.filter((item) => !item.hidden);
    }
    getSelectedItems() {
        return this.items.filter((item) => item.selected);
    }
    updateItems() {
        this.items = this.getItems();
        this.data = this.getData();
        this.selectedItems = this.getSelectedItems();
        this.visibleItems = this.getVisibleItems();
    }
    getData() {
        return this.items.map((item) => ({
            value: item.value,
            label: item.textLabel,
        }));
    }
    getItems() {
        const items = Array.from(this.el.querySelectorAll(COMBO_BOX_ITEM));
        return items
            .filter((item) => !item.disabled)
            .map((item) => {
            const { parentElement } = item;
            item.parentItem = parentElement.matches(COMBO_BOX_ITEM)
                ? parentElement
                : null;
            return item;
        });
    }
    calciteComboboxItemKeyEventHandler(event) {
        const { item, event: keyboardEvent } = event.detail;
        let isFirstItem = this.itemIndex(item) === 0;
        let isLastItem = this.itemIndex(item) === this.items.length - 1;
        const shiftKey = keyboardEvent.shiftKey;
        const keyCode = keyboardEvent.keyCode;
        switch (keyCode) {
            case TAB:
                if (isFirstItem && shiftKey)
                    this.closeCalciteCombobox();
                if (isLastItem && !shiftKey)
                    this.closeCalciteCombobox();
                else if (isFirstItem && shiftKey)
                    this.textInput.focus();
                else if (shiftKey)
                    this.focusPrevItem(item);
                else
                    this.focusNextItem(item);
                break;
            case DOWN:
                this.focusNextItem(item);
                break;
            case UP:
                this.focusPrevItem(item);
                break;
            case HOME:
                this.focusFirstItem();
                break;
            case END:
                this.focusLastItem();
                break;
            case ESCAPE:
                this.closeCalciteCombobox();
                break;
        }
    }
    closeCalciteCombobox() {
        this.textInput.focus();
        this.active = false;
    }
    focusFirstItem() {
        const firstItem = this.items[0];
        firstItem.focus();
    }
    focusLastItem() {
        const lastItem = this.items[this.items.length - 1];
        lastItem.focus();
    }
    focusNextItem(item) {
        const index = this.itemIndex(item);
        const nextItem = this.items[index + 1] || this.items[0];
        nextItem.focus();
    }
    focusPrevItem(item) {
        const index = this.itemIndex(item);
        const prevItem = this.items[index - 1] || this.items[this.items.length - 1];
        prevItem.focus();
    }
    itemIndex(item) {
        return this.items.indexOf(item);
    }
    //--------------------------------------------------------------------------
    //
    //  Render Methods
    //
    //--------------------------------------------------------------------------
    render() {
        const dir = getElementDir(this.el);
        const listBoxId = "listbox";
        return (h(Host, { active: this.active, onFocusin: this.comboboxFocusHandler, onFocusout: this.comboboxFocusHandler, dir: dir }, h("div", { class: "selections" }, this.selectedItems.map((item) => {
            return (h("calcite-chip", { key: item.value, scale: this.scale, value: item.value, dir: dir }, item.textLabel));
        })), h("div", { role: "combobox", "aria-expanded": this.active.toString(), "aria-owns": listBoxId, "aria-haspopup": "listbox" }, h("input", { type: "text", placeholder: this.placeholder, "aria-label": this.label, "aria-autocomplete": "list", "aria-controls": listBoxId, onInput: this.inputHandler, disabled: this.disabled, onKeyDown: (e) => this.handleInputKeyDown(e), ref: (el) => (this.textInput = el) })), h("ul", { id: listBoxId, role: "listbox", class: { list: true }, "aria-multiselectable": "true" }, h("slot", null))));
    }
    get el() { return getElement(this); }
    static get style() { return ":host([hidden]) {\n  display: none;\n}\n\n:host([scale=xs]) {\n  font-size: 10px;\n  --calcite-combobox-item-spacing-unit-l: 8px;\n  --calcite-combobox-item-spacing-unit-s: 4px;\n}\n\n:host([scale=s]) {\n  font-size: 12px;\n  --calcite-combobox-item-spacing-unit-l: 12px;\n  --calcite-combobox-item-spacing-unit-s: 8px;\n}\n\n:host([scale=m]) {\n  font-size: 14px;\n  --calcite-combobox-item-spacing-unit-l: 16px;\n  --calcite-combobox-item-spacing-unit-s: 12px;\n}\n\n:host([scale=l]) {\n  font-size: 16px;\n  --calcite-combobox-item-spacing-unit-l: 20px;\n  --calcite-combobox-item-spacing-unit-s: 16px;\n}\n\n:host([scale=xl]) {\n  font-size: 18px;\n  --calcite-combobox-item-spacing-unit-l: 24px;\n  --calcite-combobox-item-spacing-unit-s: 20px;\n}\n\n* {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:host {\n  display: block;\n  position: relative;\n}\n\n[role=combobox] {\n  display: -ms-flexbox;\n  display: flex;\n}\n\ninput {\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  font-size: inherit;\n  font-family: inherit;\n  padding: var(--calcite-combobox-item-spacing-unit-s) var(--calcite-combobox-item-spacing-unit-l);\n  background-color: var(--calcite-ui-foreground-1);\n  border: 1px solid var(--calcite-ui-border-1);\n  color: 1px solid var(--calcite-ui-text-1);\n}\n\ninput {\n  outline-offset: 0;\n  outline-color: transparent;\n  -webkit-transition: outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;\n  transition: outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;\n}\ninput:focus {\n  outline: 2px solid var(--calcite-ui-blue-1);\n  outline-offset: -2px;\n}\n\n.list {\n  -webkit-transform: translate3d(0, -1.5rem, 0);\n  transform: translate3d(0, -1.5rem, 0);\n  -webkit-transition: all 0.15s ease-in-out;\n  transition: all 0.15s ease-in-out;\n  visibility: hidden;\n  opacity: 0;\n  display: block;\n  position: absolute;\n  left: 0;\n  z-index: 200;\n  overflow: hidden;\n  max-height: 0;\n  width: auto;\n  width: var(--calcite-dropdown-width);\n  background: var(--calcite-ui-foreground-1);\n  border-radius: var(--calcite-border-radius);\n  -webkit-box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.16);\n  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.16);\n  pointer-events: none;\n  margin: 0;\n  padding: 0;\n  right: 0;\n}\n\n:host([active]) .list {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  opacity: 1;\n  max-height: 100vh;\n  visibility: visible;\n  pointer-events: initial;\n  overflow-y: scroll;\n}\n\n.selections calcite-chip {\n  margin-right: var(--calcite-combobox-item-spacing-unit-s);\n  margin-bottom: var(--calcite-combobox-item-spacing-unit-s);\n}\n\n.selections calcite-chip:last-child {\n  margin-right: 0;\n}\n\n:host([dir=rtl]) .selections calcite-chip {\n  margin-right: unset;\n  margin-left: var(--calcite-combobox-item-spacing-unit-s);\n}\n\n:host([dir=rtl]) .selections calcite-chip:last-child {\n  margin-left: 0;\n}\n\n.item {\n  display: block;\n}"; }
};

export { CalciteCombobox as calcite_combobox };
