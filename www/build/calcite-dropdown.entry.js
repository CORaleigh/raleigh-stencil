import { r as registerInstance, h, H as Host, d as getElement } from './core-17370b86.js';
import { f as focusElement } from './dom-21b0c18b.js';
import { S as SPACE, a as ENTER, b as ESCAPE, T as TAB, D as DOWN, U as UP, H as HOME, E as END } from './keys-ed140d96.js';

const CalciteDropdown = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        this.active = false;
        /** specify the alignment of dropdown, defaults to start */
        this.alignment = "start";
        /** specify the max items to display before showing the scroller, must be greater than 0 **/
        this.maxItems = 0;
        /** specify the scale of dropdown, defaults to m */
        this.scale = "m";
        /** specify the width of dropdown, defaults to m */
        this.width = "m";
        /** specify whether the dropdown is opened by hover or click of the trigger element */
        this.type = "click";
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /** created list of dropdown items */
        this.items = [];
        /** specifies the item wrapper height; it is updated when maxItems is > 0  **/
        this.maxScrollerHeight = 0;
        /** keep track of whether the groups have been sorted so we don't re-sort */
        this.sorted = false;
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        // validate props
        let alignment = ["start", "center", "end"];
        if (!alignment.includes(this.alignment))
            this.alignment = "start";
        let scale = ["s", "m", "l"];
        if (!scale.includes(this.scale))
            this.scale = "m";
        let width = ["s", "m", "l"];
        if (!width.includes(this.width))
            this.width = "m";
        let type = ["hover", "click"];
        if (!type.includes(this.type))
            this.type = "hover";
    }
    componentDidLoad() {
        this.trigger = this.el.querySelector("[slot=dropdown-trigger]");
        if (!this.sorted) {
            const groups = this.items.sort((a, b) => a.position - b.position);
            this.maxScrollerHeight = this.getMaxScrollerHeight(groups);
            this.items = groups.reduce((items, group) => [...items, ...group.items], []);
            this.sorted = true;
        }
    }
    render() {
        const { maxScrollerHeight } = this;
        return (h(Host, null, h("slot", { name: "dropdown-trigger", "aria-haspopup": "true", "aria-expanded": this.active.toString() }), h("div", { class: "calcite-dropdown-wrapper", role: "menu", style: {
                maxHeight: maxScrollerHeight > 0 ? `${maxScrollerHeight}px` : "",
            } }, h("slot", null))));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    openDropdown(e) {
        if (e.target.getAttribute("slot") === "dropdown-trigger") {
            this.openCalciteDropdown();
            e.preventDefault();
            e.stopPropagation();
        }
    }
    closeCalciteDropdownOnClick(e) {
        if (this.active && e.target.offsetParent !== this.el)
            this.closeCalciteDropdown();
    }
    closeCalciteDropdownOnEvent() {
        this.closeCalciteDropdown();
    }
    keyDownHandler(e) {
        if (e.target.getAttribute("slot") === "dropdown-trigger") {
            if (e.target.nodeName !== "BUTTON" &&
                e.target.nodeName !== "CALCITE-BUTTON") {
                switch (e.keyCode) {
                    case SPACE:
                    case ENTER:
                        this.openCalciteDropdown();
                        break;
                    case ESCAPE:
                        this.closeCalciteDropdown();
                        break;
                }
            }
            else if (e.keyCode === ESCAPE || (e.shiftKey && e.keyCode === TAB)) {
                this.closeCalciteDropdown();
            }
        }
    }
    mouseoverHandler() {
        if (this.type === "hover") {
            this.openCalciteDropdown();
        }
    }
    mouseoffHandler() {
        if (this.type === "hover") {
            this.closeCalciteDropdown();
        }
    }
    calciteDropdownItemKeyEvent(item) {
        let e = item.detail.item;
        // handle edge
        let itemToFocus = e.target.nodeName !== "A" ? e.target : e.target.parentNode;
        let isFirstItem = this.itemIndex(itemToFocus) === 0;
        let isLastItem = this.itemIndex(itemToFocus) === this.items.length - 1;
        switch (e.keyCode) {
            case TAB:
                if (isLastItem && !e.shiftKey)
                    this.closeCalciteDropdown();
                else if (isFirstItem && e.shiftKey)
                    this.closeCalciteDropdown();
                else if (e.shiftKey)
                    this.focusPrevItem(itemToFocus);
                else
                    this.focusNextItem(itemToFocus);
                break;
            case DOWN:
                this.focusNextItem(itemToFocus);
                break;
            case UP:
                this.focusPrevItem(itemToFocus);
                break;
            case HOME:
                this.focusFirstItem();
                break;
            case END:
                this.focusLastItem();
                break;
        }
    }
    registerCalciteDropdownGroup({ detail: { items, position, titleEl }, }) {
        this.items.push({
            items: items,
            position: position,
            titleEl,
        });
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    getMaxScrollerHeight(groups) {
        const { maxItems } = this;
        let itemsToProcess = 0;
        let maxScrollerHeight = 0;
        groups.forEach((group) => {
            var _a;
            if (maxItems > 0 && itemsToProcess < maxItems) {
                maxScrollerHeight += ((_a = group === null || group === void 0 ? void 0 : group.titleEl) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
                group.items.forEach((item) => {
                    if (itemsToProcess < maxItems) {
                        maxScrollerHeight += item.offsetHeight;
                        itemsToProcess += 1;
                    }
                });
            }
        });
        return maxScrollerHeight;
    }
    closeCalciteDropdown() {
        this.active = false;
        this.trigger.focus();
    }
    focusOnFirstActiveOrFirstItem() {
        this.getFocusableElement(this.items.find((item) => item.active) || this.items[0]);
    }
    focusFirstItem() {
        const firstItem = this.items[0];
        this.getFocusableElement(firstItem);
    }
    focusLastItem() {
        const lastItem = this.items[this.items.length - 1];
        this.getFocusableElement(lastItem);
    }
    focusNextItem(e) {
        const index = this.itemIndex(e);
        const nextItem = this.items[index + 1] || this.items[0];
        this.getFocusableElement(nextItem);
    }
    focusPrevItem(e) {
        const index = this.itemIndex(e);
        const prevItem = this.items[index - 1] || this.items[this.items.length - 1];
        this.getFocusableElement(prevItem);
    }
    itemIndex(e) {
        return this.items.indexOf(e);
    }
    getFocusableElement(item) {
        if (!item) {
            return;
        }
        const target = item.attributes.isLink
            ? item.shadowRoot.querySelector("a")
            : item;
        focusElement(target);
    }
    openCalciteDropdown() {
        this.active = !this.active;
        const animationDelayInMs = 50;
        if (this.active) {
            setTimeout(() => this.focusOnFirstActiveOrFirstItem(), animationDelayInMs);
        }
    }
    get el() { return getElement(this); }
    static get style() { return ":host([hidden]) {\n  display: none;\n}\n\n:host([width=s]) {\n  --calcite-dropdown-width: 12.5em;\n}\n\n:host([width=m]) {\n  --calcite-dropdown-width: 15em;\n}\n\n:host([width=l]) {\n  --calcite-dropdown-width: 20em;\n}\n\n:host([scale=s]) {\n  --calcite-dropdown-group-padding: 0.5rem 0;\n  --calcite-dropdown-item-padding: 0.3rem 1rem 0.3rem 2.25rem;\n}\n\n:host([scale=m]) {\n  --calcite-dropdown-group-padding: 0.75rem 0;\n  --calcite-dropdown-item-padding: 0.5rem 1rem 0.5rem 2.25rem;\n}\n\n:host([scale=l]) {\n  --calcite-dropdown-group-padding: 1rem 0;\n  --calcite-dropdown-item-padding: 0.75rem 1rem 0.75rem 2.25rem;\n}\n\n:host([dir=rtl][scale=s]) {\n  --calcite-dropdown-item-padding: 0.3rem 2.25rem 0.3rem 1rem;\n}\n\n:host([dir=rtl][scale=m]) {\n  --calcite-dropdown-item-padding: 0.5rem 2.25rem 0.5rem 1rem;\n}\n\n:host([dir=rtl][scale=l]) {\n  --calcite-dropdown-item-padding: 0.75rem 2.25rem 0.75rem 1rem;\n}\n\n:host {\n  position: relative;\n  display: inline-block;\n}\n\n:host([active]) .calcite-dropdown-wrapper {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  opacity: 1;\n  max-height: 90vh;\n  overflow-y: auto;\n  visibility: visible;\n  pointer-events: initial;\n}\n\n:host .calcite-dropdown-wrapper {\n  -webkit-transform: translate3d(0, -1.5rem, 0);\n  transform: translate3d(0, -1.5rem, 0);\n  -webkit-transition: all 0.15s ease-in-out, max-height 0.15s;\n  transition: all 0.15s ease-in-out, max-height 0.15s;\n  visibility: hidden;\n  opacity: 0;\n  display: block;\n  position: absolute;\n  left: 0;\n  z-index: 200;\n  overflow: hidden;\n  max-height: 0;\n  width: auto;\n  width: var(--calcite-dropdown-width);\n  background: var(--calcite-ui-foreground-1);\n  border-radius: var(--calcite-border-radius);\n  -webkit-box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.16);\n  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.16);\n  pointer-events: none;\n}\n\n:host-context([dir=rtl]) .calcite-dropdown-wrapper {\n  right: 0;\n  left: unset;\n}\n\n:host([alignment=end]) .calcite-dropdown-wrapper {\n  right: 0;\n  left: unset;\n}\n\n:host([dir=rtl][alignment=end]) .calcite-dropdown-wrapper {\n  right: unset;\n  left: 0;\n}\n\n:host([alignment=center]) .calcite-dropdown-wrapper {\n  right: 0;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n\n:host([alignment=center][dir=rtl]) .calcite-dropdown-wrapper {\n  right: 50%;\n  left: 0;\n  -webkit-transform: translateX(50%);\n  transform: translateX(50%);\n}"; }
};

export { CalciteDropdown as calcite_dropdown };
