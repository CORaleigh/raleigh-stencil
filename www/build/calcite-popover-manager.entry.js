import { r as registerInstance, h, H as Host, d as getElement } from './core-17370b86.js';
import { P as POPOVER_REFERENCE } from './resources-6bc52e12.js';
import { d as getDescribedByElement } from './dom-21b0c18b.js';

const CalcitePopoverManager = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * CSS Selector to match reference elements for popovers.
         */
        this.selector = `[${POPOVER_REFERENCE}]`;
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.toggle = (event) => {
            const target = event.target;
            const describedByElement = target && target.matches(this.selector) && getDescribedByElement(target);
            if (describedByElement) {
                describedByElement.toggle();
            }
        };
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    componentDidLoad() {
        const { el } = this;
        el.addEventListener("click", this.toggle, true);
    }
    componentDidUnload() {
        const { el } = this;
        el.removeEventListener("click", this.toggle, true);
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

export { CalcitePopoverManager as calcite_popover_manager };
