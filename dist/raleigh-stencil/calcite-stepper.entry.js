import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './core-17370b86.js';
import { g as getElementDir } from './dom-21b0c18b.js';
import { D as DOWN, R as RIGHT, U as UP, L as LEFT, H as HOME, E as END } from './keys-ed140d96.js';

const CalciteStepper = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        /** specify the theme of stepper, defaults to light */
        this.theme = "light";
        /** specify the scale of stepper, defaults to m */
        this.scale = "m";
        /** optionally display the number next to the step title */
        this.numbered = false;
        /** optionally display a status icon next to the step title */
        this.icon = false;
        /** specify the layout of stepper, defaults to horizontal */
        this.layout = "horizontal";
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /** created list of Stepper items */
        this.items = [];
        /** sorted list of Stepper items */
        this.sortedItems = [];
        this.calciteStepperItemHasChanged = createEvent(this, "calciteStepperItemHasChanged", 7);
    }
    // watch for removal of disabled to register step
    contentWatcher() {
        this.updateContent(this.requestedContent);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        // validate props
        let layout = ["horizontal", "vertical"];
        if (!layout.includes(this.layout))
            this.layout = "horizontal";
        let theme = ["light", "dark"];
        if (!theme.includes(this.theme))
            this.theme = "light";
        let scale = ["s", "m", "l"];
        if (!scale.includes(this.scale))
            this.scale = "m";
        let numbered = [true, false];
        if (!numbered.includes(this.numbered))
            this.numbered = false;
        let icon = [true, false];
        if (!icon.includes(this.icon))
            this.icon = false;
    }
    componentDidLoad() {
        // if no stepper items are set as active, default to the first one
        if (!this.currentPosition) {
            this.calciteStepperItemHasChanged.emit({
                position: 0,
            });
        }
    }
    render() {
        const dir = getElementDir(this.el);
        return (h(Host, { dir: dir }, h("slot", null), this.layout === "horizontal" ? (h("div", { class: "stepper-content", ref: (el) => (this.stepperContentContainer = el) })) : null));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    calciteStepperItemKeyEvent(e) {
        let item = e.detail.item;
        let itemToFocus = e.target;
        let isFirstItem = this.itemIndex(itemToFocus) === 0;
        let isLastItem = this.itemIndex(itemToFocus) === this.sortedItems.length - 1;
        switch (item.keyCode) {
            case DOWN:
            case RIGHT:
                if (isLastItem)
                    this.focusFirstItem();
                else
                    this.focusNextItem(itemToFocus);
                break;
            case UP:
            case LEFT:
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
    registerItem(event) {
        const item = {
            item: event.target,
            position: event.detail.position,
            content: event.detail.content,
        };
        if (item.content !== null && item.item.active)
            this.requestedContent = [item.content];
        if (!this.items.includes(item))
            this.items.push(item);
        this.sortedItems = this.sortItems();
    }
    updateItem(event) {
        if (event.detail.content)
            this.requestedContent =
                event.detail.content.length > 0
                    ? event.detail.content
                    : [event.detail.content];
        this.currentPosition = event.detail.position;
        this.calciteStepperItemHasChanged.emit({
            position: this.currentPosition,
        });
    }
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /** set the next step as active */
    async nextStep() {
        this.currentPosition =
            this.currentPosition + 1 < this.items.length
                ? this.currentPosition + 1
                : this.currentPosition;
        this.emitChangedItem();
    }
    /** set the previous step as active */
    async prevStep() {
        this.currentPosition =
            this.currentPosition - 1 >= 0
                ? this.currentPosition - 1
                : this.currentPosition;
        this.emitChangedItem();
    }
    /** set the requested step as active */
    async goToStep(num) {
        this.currentPosition = num - 1;
        this.emitChangedItem();
    }
    /** set the first step as active */
    async startStep() {
        this.currentPosition = 0;
        this.emitChangedItem();
    }
    /** set the last step as active */
    async endStep() {
        this.currentPosition = this.items.length - 1;
        this.emitChangedItem();
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    emitChangedItem() {
        this.calciteStepperItemHasChanged.emit({
            position: this.currentPosition,
        });
    }
    focusFirstItem() {
        const firstItem = this.sortedItems[0];
        this.focusElement(firstItem);
    }
    focusLastItem() {
        const lastItem = this.sortedItems[this.sortedItems.length - 1];
        this.focusElement(lastItem);
    }
    focusNextItem(e) {
        const index = this.itemIndex(e);
        const nextItem = this.sortedItems[index + 1] || this.sortedItems[0];
        this.focusElement(nextItem);
    }
    focusPrevItem(e) {
        const index = this.itemIndex(e);
        const prevItem = this.sortedItems[index - 1] ||
            this.sortedItems[this.sortedItems.length - 1];
        this.focusElement(prevItem);
    }
    itemIndex(e) {
        return this.sortedItems.indexOf(e);
    }
    focusElement(item) {
        const target = item;
        target.focus();
    }
    sortItems() {
        let items = Array.from(this.items)
            .filter((a) => !a.item.disabled)
            .sort((a, b) => a.position - b.position)
            .map((a) => a.item);
        return [...new Set(items)];
    }
    updateContent(content) {
        if (this.stepperContentContainer) {
            this.stepperContentContainer.innerHTML = ``;
            this.stepperContentContainer.append(...content);
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "requestedContent": ["contentWatcher"]
    }; }
    static get style() { return ":host([hidden]) {\n  display: none;\n}\n\n:host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  position: relative;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  width: 100%;\n  min-width: 100%;\n}\n\n:host([layout=vertical]) {\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex: 1 auto auto;\n  flex: 1 auto auto;\n}\n\n:host .stepper-content {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  width: 100%;\n  min-width: 100%;\n}"; }
};

export { CalciteStepper as calcite_stepper };
