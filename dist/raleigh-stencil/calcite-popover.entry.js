import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './core-17370b86.js';
import { P as POPOVER_REFERENCE, A as ARIA_DESCRIBED_BY, C as CSS } from './resources-6bc52e12.js';
import '@popperjs/core';
import { H as HOST_CSS } from './dom-21b0c18b.js';
import { d as defaultOffsetDistance, u as updatePopper, c as createPopper } from './popper-6aa86164.js';
import { g as guid } from './guid-8a4914c4.js';

const CalcitePopover = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * Display a close button within the Popover.
         */
        this.closeButton = false;
        /**
         * Prevents flipping the popover's placement when it starts to overlap its reference element.
         */
        this.disableFlip = false;
        /**
         * Removes the caret pointer.
         */
        this.disablePointer = false;
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
        /** Text for close button. */
        this.textClose = "Close";
        this._referenceElement = this.getReferenceElement();
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.getId = () => {
            return this.el.id || `calcite-popover-${guid()}`;
        };
        this.addReferences = () => {
            const { _referenceElement } = this;
            if (!_referenceElement) {
                return;
            }
            _referenceElement.setAttribute(POPOVER_REFERENCE, "");
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
            _referenceElement.removeAttribute(POPOVER_REFERENCE);
        };
        this.hide = () => {
            this.open = false;
        };
        this.calcitePopoverClose = createEvent(this, "calcitePopoverClose", 7);
        this.calcitePopoverOpen = createEvent(this, "calcitePopoverOpen", 7);
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
            this.calcitePopoverOpen.emit();
        }
        else {
            this.destroyPopper();
            this.calcitePopoverClose.emit();
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
        this.createPopper();
        this.addReferences();
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
    async setFocus(focusId) {
        var _a, _b;
        if (focusId === "close-button") {
            (_a = this.closeButtonEl) === null || _a === void 0 ? void 0 : _a.focus();
            return;
        }
        (_b = this.el) === null || _b === void 0 ? void 0 : _b.focus();
    }
    async toggle() {
        this.open = !this.open;
    }
    getReferenceElement() {
        const { referenceElement } = this;
        return ((typeof referenceElement === "string"
            ? document.getElementById(referenceElement)
            : referenceElement) || null);
    }
    getModifiers() {
        const { arrowEl, flipPlacements, disableFlip, disablePointer, offsetDistance, offsetSkidding } = this;
        const flipModifier = {
            name: "flip",
            enabled: !disableFlip
        };
        if (flipPlacements) {
            flipModifier.options = {
                fallbackPlacements: flipPlacements
            };
        }
        const arrowModifier = {
            name: "arrow",
            enabled: !disablePointer
        };
        if (arrowEl) {
            arrowModifier.options = {
                element: arrowEl
            };
        }
        const offsetModifier = {
            name: "offset",
            enabled: true,
            options: {
                offset: [offsetSkidding, offsetDistance]
            }
        };
        return [arrowModifier, flipModifier, offsetModifier];
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
    renderImage() {
        return this.el.querySelector("[slot=image]") ? (h("div", { class: CSS.imageContainer }, h("slot", { name: "image" }))) : null;
    }
    renderCloseButton() {
        const { closeButton, textClose } = this;
        return closeButton ? (h("button", { ref: closeButtonEl => (this.closeButtonEl = closeButtonEl), "aria-label": textClose, title: textClose, class: { [CSS.closeButton]: true }, onClick: this.hide }, h("calcite-icon", { icon: "x", scale: "m" }))) : null;
    }
    render() {
        const { _referenceElement, open, disablePointer } = this;
        const displayed = _referenceElement && open;
        const arrowNode = !disablePointer ? (h("div", { class: CSS.arrow, ref: arrowEl => (this.arrowEl = arrowEl) })) : null;
        return (h(Host, { role: "dialog", class: {
                [HOST_CSS.hydratedInvisible]: !displayed
            }, "aria-hidden": !displayed ? "true" : "false", id: this.getId() }, arrowNode, h("div", { class: CSS.container }, this.renderImage(), h("div", { class: CSS.content }, h("slot", null), this.renderCloseButton()))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "offsetDistance": ["offsetDistanceOffsetHandler"],
        "offsetSkidding": ["offsetSkiddingHandler"],
        "open": ["openHandler"],
        "placement": ["placementHandler"],
        "referenceElement": ["referenceElementHandler"]
    }; }
    static get style() { return ":host([hidden]) {\n  display: none;\n}\n\n:host {\n  display: block;\n  position: absolute;\n  z-index: 999;\n  top: -999999px;\n  left: -999999px;\n}\n\n:host([aria-hidden=true]) {\n  pointer-events: none;\n}\n\n:host([aria-hidden=false]) {\n  -webkit-box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.16);\n  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.16);\n}\n\n.arrow,\n.arrow::before {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  z-index: -1;\n}\n\n.arrow::before {\n  content: \"\";\n  -webkit-box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.16);\n  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.16);\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  background: var(--calcite-ui-foreground-1);\n}\n\n:host([data-popper-placement^=top]) > .arrow {\n  bottom: -4px;\n}\n\n:host([data-popper-placement^=bottom]) > .arrow {\n  top: -4px;\n}\n\n:host([data-popper-placement^=left]) > .arrow {\n  right: -4px;\n}\n\n:host([data-popper-placement^=right]) > .arrow {\n  left: -4px;\n}\n\n.container {\n  border-radius: var(--calcite-border-radius);\n  background: var(--calcite-ui-foreground-1);\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  max-width: 350px;\n  overflow: hidden;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  color: var(--calcite-ui-text-1);\n}\n\n.content {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  line-height: 24px;\n}\n\n.close-button {\n  outline-offset: 0;\n  outline-color: transparent;\n  -webkit-transition: outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;\n  transition: outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;\n}\n.close-button:focus {\n  outline: 2px solid var(--calcite-ui-blue-1);\n  outline-offset: -2px;\n}\n\n.close-button {\n  display: block;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  padding: 12px;\n  border: none;\n  border-radius: 0 var(--calcite-border-radius) 0 0;\n  color: var(--calcite-ui-text-1);\n  cursor: pointer;\n  background: var(--calcite-ui-foreground-1);\n  z-index: 1;\n}\n.close-button:hover {\n  background: var(--calcite-ui-foreground-2);\n}\n.close-button:active {\n  background: var(--calcite-ui-foreground-3);\n}\n\n:host-context([dir=rtl]) .close-button {\n  border-radius: var(--calcite-border-radius) 0 0 0;\n}\n\n.image-container {\n  overflow: hidden;\n  max-height: 200px;\n  margin: 5px;\n}\n\nslot[name=image]::slotted(img) {\n  height: auto;\n  width: 100%;\n  max-height: 200px;\n  -o-object-position: 50% 50%;\n  object-position: 50% 50%;\n  -o-object-fit: cover;\n  object-fit: cover;\n}"; }
};

export { CalcitePopover as calcite_popover };
