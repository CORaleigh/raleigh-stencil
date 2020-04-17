import { r as registerInstance, h, H as Host, d as getElement } from './core-17370b86.js';
import '@popperjs/core';
import { H as HOST_CSS } from './dom-21b0c18b.js';
import { d as defaultOffsetDistance, u as updatePopper, c as createPopper } from './popper-6aa86164.js';
import { g as guid } from './guid-8a4914c4.js';
import { T as TOOLTIP_REFERENCE, A as ARIA_DESCRIBED_BY, C as CSS } from './resources-d89cd474.js';

const CalciteTooltip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * Offset the position of the popover away from the reference element.
         */
        this.offsetDistance = defaultOffsetDistance;
        /**
         * Offset the position of the popover along the reference element.
         */
        this.offsetSkidding = 0;
        /**
         * Display and position the component.
         */
        this.open = false;
        /**
         * Determines where the component will be positioned relative to the referenceElement.
         */
        this.placement = "auto";
        this._referenceElement = this.getReferenceElement();
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.getId = () => {
            return this.el.id || `calcite-tooltip-${guid()}`;
        };
        this.addReferences = () => {
            const { _referenceElement } = this;
            if (!_referenceElement) {
                return;
            }
            _referenceElement.setAttribute(TOOLTIP_REFERENCE, "");
            if (!_referenceElement.hasAttribute(ARIA_DESCRIBED_BY)) {
                _referenceElement.setAttribute(ARIA_DESCRIBED_BY, this.getId());
            }
        };
        this.removeReferences = () => {
            const { _referenceElement } = this;
            if (!_referenceElement) {
                return;
            }
            _referenceElement.removeAttribute(ARIA_DESCRIBED_BY);
            _referenceElement.removeAttribute(TOOLTIP_REFERENCE);
        };
        this.show = () => {
            this.open = true;
        };
        this.hide = () => {
            this.open = false;
        };
    }
    offsetDistanceOffsetHandler() {
        this.reposition();
    }
    offsetSkiddingHandler() {
        this.reposition();
    }
    openHandler(open) {
        if (open) {
            this.createPopper();
        }
        else {
            this.destroyPopper();
        }
    }
    placementHandler() {
        this.reposition();
    }
    referenceElementHandler() {
        this.removeReferences();
        this._referenceElement = this.getReferenceElement();
        this.addReferences();
        this.createPopper();
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    componentDidLoad() {
        this.addReferences();
        this.createPopper();
    }
    componentDidUnload() {
        this.removeReferences();
        this.destroyPopper();
    }
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------
    async reposition() {
        const { popper, el, placement } = this;
        const modifiers = this.getModifiers();
        popper
            ? updatePopper({
                el,
                modifiers,
                placement,
                popper
            })
            : this.createPopper();
    }
    getReferenceElement() {
        const { referenceElement } = this;
        return ((typeof referenceElement === "string"
            ? document.getElementById(referenceElement)
            : referenceElement) || null);
    }
    getModifiers() {
        const { arrowEl, offsetDistance, offsetSkidding } = this;
        const arrowModifier = {
            name: "arrow",
            enabled: true,
            options: {
                element: arrowEl
            }
        };
        const offsetModifier = {
            name: "offset",
            enabled: true,
            options: {
                offset: [offsetSkidding, offsetDistance]
            }
        };
        return [arrowModifier, offsetModifier];
    }
    createPopper() {
        this.destroyPopper();
        const { el, open, placement, _referenceElement: referenceEl } = this;
        const modifiers = this.getModifiers();
        this.popper = createPopper({
            el,
            modifiers,
            open,
            placement,
            referenceEl
        });
    }
    destroyPopper() {
        const { popper } = this;
        if (popper) {
            popper.destroy();
        }
        this.popper = null;
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    render() {
        const { _referenceElement, open } = this;
        const displayed = _referenceElement && open;
        return (h(Host, { role: "tooltip", class: {
                [HOST_CSS.hydratedInvisible]: !displayed
            }, "aria-hidden": !displayed ? "true" : "false", id: this.getId() }, h("div", { class: CSS.arrow, ref: arrowEl => (this.arrowEl = arrowEl) }), h("div", { class: CSS.container }, h("slot", null))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "offsetDistance": ["offsetDistanceOffsetHandler"],
        "offsetSkidding": ["offsetSkiddingHandler"],
        "open": ["openHandler"],
        "placement": ["placementHandler"],
        "referenceElement": ["referenceElementHandler"]
    }; }
    static get style() { return ":host([hidden]) {\n  display: none;\n}\n\n:host {\n  display: block;\n  position: absolute;\n  z-index: 999;\n  top: -999999px;\n  left: -999999px;\n}\n\n:host([aria-hidden=true]) {\n  pointer-events: none;\n}\n\n:host([aria-hidden=false]) {\n  -webkit-box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.16);\n  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.16);\n}\n\n.arrow,\n.arrow::before {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  z-index: -1;\n}\n\n.arrow::before {\n  content: \"\";\n  -webkit-box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.16);\n  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.16);\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  background: var(--calcite-ui-foreground-1);\n}\n\n:host([data-popper-placement^=top]) > .arrow {\n  bottom: -4px;\n}\n\n:host([data-popper-placement^=bottom]) > .arrow {\n  top: -4px;\n}\n\n:host([data-popper-placement^=left]) > .arrow {\n  right: -4px;\n}\n\n:host([data-popper-placement^=right]) > .arrow {\n  left: -4px;\n}\n\n.container {\n  position: relative;\n  border-radius: var(--calcite-border-radius);\n  background: var(--calcite-ui-foreground-1);\n  max-width: 300px;\n  max-height: 300px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  font-weight: 500;\n  color: var(--calcite-ui-text-1);\n  padding: 12px 16px;\n  overflow: hidden;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n}"; }
};

export { CalciteTooltip as calcite_tooltip };
