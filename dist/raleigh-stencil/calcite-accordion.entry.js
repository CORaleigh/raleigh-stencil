import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './core-17370b86.js';
import { D as DOWN, U as UP, H as HOME, E as END } from './keys-ed140d96.js';

const CalciteAccordion = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** specify the scale of accordion, defaults to m */
        this.scale = "m";
        /** specify the appearance - default (containing border), or minimal (no containing border), defaults to default */
        this.appearance = "default";
        /** specify the placement of the icon in the header, defaults to end */
        this.iconPosition = "end";
        /** specify the placement of the icon in the header, defaults to end */
        this.iconType = "chevron";
        /** specify the selection mode - multi (allow any number of open items), single (allow one open item),
         * or single-persist (allow and require one open item), defaults to multi */
        this.selectionMode = "multi";
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /** created list of Accordion items */
        this.items = [];
        /** keep track of whether the items have been sorted so we don't re-sort */
        this.sorted = false;
        /** keep track of the requested item for multi mode */
        this.requestedAccordionItem = "";
        this.sortItems = (items) => items.sort((a, b) => a.position - b.position).map(a => a.item);
        this.calciteAccordionItemHasChanged = createEvent(this, "calciteAccordionItemHasChanged", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        // validate props
        let appearance = ["default", "minimal", "transparent"];
        if (!appearance.includes(this.appearance))
            this.appearance = "default";
        let iconPosition = ["start", "end"];
        if (!iconPosition.includes(this.iconPosition))
            this.iconPosition = "end";
        let iconType = ["chevron", "caret", "plus-minus"];
        if (!iconType.includes(this.iconType))
            this.iconType = "chevron";
        let scale = ["s", "m", "l"];
        if (!scale.includes(this.scale))
            this.scale = "m";
        let selectionMode = ["multi", "single", "single-persist"];
        if (!selectionMode.includes(this.selectionMode))
            this.selectionMode = "multi";
    }
    componentDidLoad() {
        if (!this.sorted) {
            this.items = this.sortItems(this.items);
            this.sorted = true;
        }
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    calciteAccordionItemKeyEvent(e) {
        let item = e.detail.item;
        let itemToFocus = e.target;
        let isFirstItem = this.itemIndex(itemToFocus) === 0;
        let isLastItem = this.itemIndex(itemToFocus) === this.items.length - 1;
        switch (item.keyCode) {
            case DOWN:
                if (isLastItem)
                    this.focusFirstItem();
                else
                    this.focusNextItem(itemToFocus);
                break;
            case UP:
                if (isFirstItem)
                    this.focusLastItem();
                else
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
    registerCalciteAccordionItem(e) {
        const item = {
            item: e.target,
            position: e.detail.position
        };
        this.items.push(item);
    }
    updateActiveItemOnChange(event) {
        this.requestedAccordionItem = event.detail.requestedAccordionItem;
        this.calciteAccordionItemHasChanged.emit({
            requestedAccordionItem: this.requestedAccordionItem
        });
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    focusFirstItem() {
        const firstItem = this.items[0];
        this.focusElement(firstItem);
    }
    focusLastItem() {
        const lastItem = this.items[this.items.length - 1];
        this.focusElement(lastItem);
    }
    focusNextItem(e) {
        const index = this.itemIndex(e);
        const nextItem = this.items[index + 1] || this.items[0];
        this.focusElement(nextItem);
    }
    focusPrevItem(e) {
        const index = this.itemIndex(e);
        const prevItem = this.items[index - 1] || this.items[this.items.length - 1];
        this.focusElement(prevItem);
    }
    itemIndex(e) {
        return this.items.indexOf(e);
    }
    focusElement(item) {
        const target = item;
        target.focus();
    }
    get el() { return getElement(this); }
    static get style() { return ":host([hidden]) {\n  display: none;\n}\n\n:host([scale=s]) {\n  --calcite-accordion-item-spacing-unit: 0.5rem;\n  --calcite-accordion-item-padding: var(--calcite-accordion-item-spacing-unit)\n    var(--calcite-accordion-item-spacing-unit);\n  font-size: 0.8125rem;\n  line-height: 1.5;\n}\n\n:host([scale=m]) {\n  --calcite-accordion-item-spacing-unit: 0.75rem;\n  --calcite-accordion-item-padding: var(--calcite-accordion-item-spacing-unit)\n    var(--calcite-accordion-item-spacing-unit);\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n\n:host([scale=l]) {\n  --calcite-accordion-item-spacing-unit: 1.5rem;\n  --calcite-accordion-item-padding: var(--calcite-accordion-item-spacing-unit)\n    var(--calcite-accordion-item-spacing-unit);\n  font-size: 0.9375rem;\n  line-height: 1.5;\n}\n\n:host([icon-position=start]) {\n  --calcite-accordion-item-flex-direction: row-reverse;\n  --calcite-accordion-item-icon-rotation: 90deg;\n  --calcite-accordion-item-active-icon-rotation: 180deg;\n  --calcite-accordion-item-icon-rotation-rtl: -90deg;\n  --calcite-accordion-item-active-icon-rotation-rtl: -180deg;\n  --calcite-accordion-item-icon-spacing-start: 0;\n  --calcite-accordion-item-icon-spacing-end: var(\n    --calcite-accordion-item-spacing-unit\n  );\n}\n\n:host([icon-position=end]) {\n  --calcite-accordion-item-flex-direction: row;\n  --calcite-accordion-item-icon-rotation: -90deg;\n  --calcite-accordion-item-active-icon-rotation: -180deg;\n  --calcite-accordion-item-icon-rotation-rtl: 90deg;\n  --calcite-accordion-item-active-icon-rotation-rtl: 180deg;\n  --calcite-accordion-item-icon-spacing-start: var(\n    --calcite-accordion-item-spacing-unit\n  );\n  --calcite-accordion-item-icon-spacing-end: 0;\n}\n\n:host {\n  display: block;\n  position: relative;\n  max-width: 100%;\n  border: 1px solid var(--calcite-ui-border-2);\n  border-bottom: none;\n  --calcite-accordion-item-border: var(--calcite-ui-border-2);\n  --calcite-accordion-item-background: var(--calcite-ui-foreground-1);\n}\n\n:host([appearance=minimal]) {\n  --calcite-accordion-item-padding: var(--calcite-accordion-item-spacing-unit) 0;\n  border-color: transparent;\n}\n\n:host([appearance=transparent]) {\n  border-color: transparent;\n  --calcite-accordion-item-border: transparent;\n  --calcite-accordion-item-background: transparent;\n}"; }
};

export { CalciteAccordion as calcite_accordion };
