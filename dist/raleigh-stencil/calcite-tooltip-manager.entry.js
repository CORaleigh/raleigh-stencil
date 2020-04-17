import { r as registerInstance, h, H as Host, d as getElement } from './core-17370b86.js';
import { d as getDescribedByElement } from './dom-21b0c18b.js';
import { T as TOOLTIP_REFERENCE } from './resources-d89cd474.js';

const CalciteTooltipManager = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * CSS Selector to match reference elements for tooltips.
         */
        this.selector = `[${TOOLTIP_REFERENCE}]`;
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.toggle = (event, value = true) => {
            const target = event.target;
            const describedByElement = target && target.matches(this.selector) && getDescribedByElement(target);
            if (describedByElement) {
                describedByElement.open = value;
            }
        };
        this.show = (event) => {
            this.toggle(event, true);
        };
        this.hide = (event) => {
            this.toggle(event, false);
        };
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    componentDidLoad() {
        const { el } = this;
        el.addEventListener("mouseenter", this.show, true);
        el.addEventListener("mouseleave", this.hide, true);
        el.addEventListener("focus", this.show, true);
        el.addEventListener("blur", this.hide, true);
    }
    componentDidUnload() {
        const { el } = this;
        el.removeEventListener("mouseenter", this.show, true);
        el.removeEventListener("mouseleave", this.hide, true);
        el.removeEventListener("focus", this.show, true);
        el.removeEventListener("blur", this.hide, true);
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    render() {
        return h(Host, null);
    }
    get el() { return getElement(this); }
};

export { CalciteTooltipManager as calcite_tooltip_manager };
