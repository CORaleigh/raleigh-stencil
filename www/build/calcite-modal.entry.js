import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './core-17370b86.js';
import { g as getElementDir } from './dom-21b0c18b.js';
import { queryShadowRoot, isHidden, isFocusable } from '@a11y/focus-trap';

const CalciteModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /** Optionally pass a function to run before close */
        this.beforeClose = () => Promise.resolve();
        /** Aria label for the close button */
        this.closeLabel = "Close";
        /** Set the overall size of the modal */
        this.size = "small";
        this.calciteModalOpen = createEvent(this, "calciteModalOpen", 7);
        this.calciteModalClose = createEvent(this, "calciteModalClose", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    render() {
        const dir = getElementDir(this.el);
        return (h(Host, { dir: dir, role: "dialog", "aria-modal": "true", class: { "is-active": this.isActive } }, h("div", { class: "modal" }, h("div", { "data-focus-fence": "true", tabindex: "0", onFocus: this.focusLastElement.bind(this) }), h("div", { class: "modal__header" }, h("button", { class: "modal__close", "aria-label": this.closeLabel, ref: (el) => (this.closeButton = el), onClick: () => this.close() }, h("calcite-icon", { icon: "x", scale: "l" })), h("header", { class: "modal__title" }, h("slot", { name: "header" }))), h("div", { class: {
                modal__content: true,
                "modal__content--spaced": !this.noPadding,
            }, ref: (el) => (this.modalContent = el) }, h("slot", { name: "content" })), h("div", { class: "modal__footer" }, h("span", { class: "modal__back" }, h("slot", { name: "back" })), h("span", { class: "modal__secondary" }, h("slot", { name: "secondary" })), h("span", { class: "modal__primary" }, h("slot", { name: "primary" }))), h("div", { "data-focus-fence": "true", tabindex: "0", onFocus: this.focusFirstElement.bind(this) }))));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    handleEscape(e) {
        if (this.isActive && !this.disableEscape && e.key === "Escape") {
            this.close();
        }
    }
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /** Open the modal */
    async open() {
        this.previousActiveElement = document.activeElement;
        this.isActive = true;
        // wait for the modal to open, then handle focus.
        return new Promise((resolve) => {
            setTimeout(() => {
                this.focusElement(this.firstFocus);
                resolve(this.el);
            }, 300);
            document.documentElement.classList.add("overflow-hidden");
            this.calciteModalOpen.emit();
        });
    }
    /** Close the modal, first running the `beforeClose` method */
    async close() {
        return this.beforeClose(this.el).then(() => {
            this.isActive = false;
            this.previousActiveElement.focus();
            document.documentElement.classList.remove("overflow-hidden");
            this.calciteModalClose.emit();
            return new Promise((resolve) => {
                setTimeout(() => resolve(this.el), 300);
            });
        });
    }
    /** Focus first interactive element */
    async focusElement(el) {
        if (el) {
            el.focus();
            return;
        }
        const focusableElements = queryShadowRoot(this.el, isHidden, isFocusable);
        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
        else {
            this.closeButton && this.closeButton.focus();
        }
    }
    /** Set the scroll top of the modal content */
    async scrollContent(top = 0, left = 0) {
        if (this.modalContent) {
            if (this.modalContent.scrollTo) {
                this.modalContent.scrollTo({ top, left, behavior: "smooth" });
            }
            else {
                this.modalContent.scrollTop = top;
                this.modalContent.scrollLeft = left;
            }
        }
    }
    focusFirstElement() {
        this.closeButton && this.closeButton.focus();
    }
    focusLastElement() {
        const focusableElements = queryShadowRoot(this.el, isHidden, isFocusable).filter((el) => !el.getAttribute("data-focus-fence"));
        if (focusableElements.length > 0) {
            focusableElements[focusableElements.length - 1].focus();
        }
        else {
            this.closeButton && this.closeButton.focus();
        }
    }
    get el() { return getElement(this); }
    static get style() { return ":host([hidden]) {\n  display: none;\n}\n\n:host {\n  --calcite-modal-scrim: rgba(0, 0, 0, 0.75);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n  overflow-y: hidden;\n  color: var(--calcite-ui-text-2);\n  opacity: 0;\n  visibility: hidden !important;\n  background: var(--calcite-modal-scrim);\n  -webkit-transition: visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);\n  transition: visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);\n  z-index: 101;\n}\n\n.modal {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  z-index: 102;\n  float: none;\n  text-align: left;\n  -webkit-overflow-scrolling: touch;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-wrap: row-wrap;\n  flex-wrap: row-wrap;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);\n  transition: visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);\n  transition: transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);\n  transition: transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);\n  -webkit-transform: translate3d(0, 20px, 0);\n  transform: translate3d(0, 20px, 0);\n  background-color: var(--calcite-ui-foreground-1);\n  -webkit-box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.32);\n  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.32);\n  border-radius: var(--calcite-border-radius);\n  margin: 1.5rem;\n  width: 100%;\n}\n\n.modal__close {\n  outline-offset: 0;\n  outline-color: transparent;\n  -webkit-transition: outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;\n  transition: outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;\n}\n.modal__close.modal__close:focus {\n  outline: 2px solid var(--calcite-ui-blue-1);\n  outline-offset: -2px;\n}\n\n:host(.is-active) {\n  visibility: visible !important;\n  opacity: 1;\n  -webkit-transition-delay: 0ms;\n  transition-delay: 0ms;\n}\n:host(.is-active) .modal {\n  visibility: visible;\n  opacity: 1;\n  -webkit-transition-delay: 0ms;\n  transition-delay: 0ms;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  -webkit-transition: visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);\n  transition: visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);\n  transition: transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);\n  transition: transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);\n}\n\n:host([dir=rtl]) .modal {\n  text-align: right;\n}\n\n/**\n * Header\n */\n.modal__header {\n  background-color: var(--calcite-ui-foreground-1);\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  display: -ms-flexbox;\n  display: flex;\n  max-width: 100%;\n  min-width: 0;\n  z-index: 2;\n  border-bottom: 1px solid var(--calcite-ui-border-3);\n  border-radius: var(--calcite-border-radius) var(--calcite-border-radius) 0 0;\n}\n\n.modal__close {\n  padding: 0.75rem;\n  margin: 0;\n  -ms-flex-order: 2;\n  order: 2;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  -webkit-transition-delay: 300ms;\n  transition-delay: 300ms;\n  -webkit-transition: all 0.15s ease-in-out;\n  transition: all 0.15s ease-in-out;\n  background-color: transparent;\n  -webkit-appearance: none;\n  border: none;\n  color: var(--calcite-ui-text-1);\n  outline: none;\n  cursor: pointer;\n  border-radius: 0 var(--calcite-border-radius) 0 0;\n}\n.modal__close svg {\n  pointer-events: none;\n}\n.modal__close:hover, .modal__close:focus {\n  background-color: var(--calcite-ui-foreground-2);\n}\n.modal__close:active {\n  background-color: var(--calcite-ui-foreground-3);\n}\n\n:host([dir=rtl]) .modal__close {\n  border-radius: var(--calcite-border-radius) 0 0 0;\n}\n\n.modal__title {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: 0.75rem 1.5rem;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  -ms-flex-order: 1;\n  order: 1;\n  min-width: 0;\n}\n\nslot[name=header]::slotted(*),\n*::slotted([slot=header]) {\n  margin: 0;\n  font-weight: 400;\n  font-size: 1.414rem;\n  line-height: 1.5;\n  color: var(--calcite-ui-text-1);\n}\n\@media screen and (max-width: 859px) {\n  slot[name=header]::slotted(*),\n*::slotted([slot=header]) {\n    font-size: 1.33rem;\n  }\n}\n\@media screen and (max-width: 479px) {\n  slot[name=header]::slotted(*),\n*::slotted([slot=header]) {\n    font-size: 1.25rem;\n  }\n}\n\n/**\n * Content area\n */\n.modal__content {\n  position: relative;\n  padding: 0;\n  height: 100%;\n  overflow: auto;\n  max-height: calc(100vh - 12rem);\n  overflow-y: auto;\n  display: block;\n  background-color: var(--calcite-ui-foreground-1);\n  z-index: 1;\n}\n\n.modal__content--spaced {\n  padding: 1.5rem;\n}\n\nslot[name=content]::slotted(*),\n*::slotted([slot=content]) {\n  font-size: 1rem;\n  line-height: 1.5;\n}\n\n/**\n * Footer\n */\n.modal__footer {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  padding: 1.2rem 1.125rem;\n  margin-top: auto;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 0 0 var(--calcite-border-radius) var(--calcite-border-radius);\n  width: 100%;\n  background-color: var(--calcite-ui-foreground-1);\n  border-top: 1px solid var(--calcite-ui-border-3);\n  z-index: 2;\n}\n\n.modal__footer--hide-back .modal__back,\n.modal__footer--hide-secondary .modal__secondary {\n  display: none;\n}\n\n.modal__back {\n  display: block;\n  margin-right: auto;\n}\n\n:host([dir=rtl]) .modal__back {\n  margin-left: auto;\n  margin-right: unset;\n}\n\n.modal__secondary {\n  display: block;\n  margin: 0 0.375rem;\n}\n\nslot[name=primary] {\n  display: block;\n}\n\n/**\n * Sizes\n */\n:host([size=small]) .modal {\n  width: auto;\n}\n\n:host([size=small]) .modal {\n  max-width: 32rem;\n}\n\n\@media screen and (max-width: 35rem) {\n  :host([size=small]) .modal {\n    height: 100%;\n    max-height: 100%;\n    width: 100%;\n    max-width: 100%;\n    margin: 0;\n    border-radius: 0;\n  }\n  :host([size=small]) .modal__content {\n    -ms-flex: 1 1 auto;\n    flex: 1 1 auto;\n    max-height: unset;\n  }\n  :host([size=small]) .modal__header,\n:host([size=small]) .modal__footer {\n    -ms-flex: inherit;\n    flex: inherit;\n  }\n\n  :host([size=small][docked]) {\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n}\n:host([size=medium]) .modal {\n  max-width: 48rem;\n}\n\n\@media screen and (max-width: 51rem) {\n  :host([size=medium]) .modal {\n    height: 100%;\n    max-height: 100%;\n    width: 100%;\n    max-width: 100%;\n    margin: 0;\n    border-radius: 0;\n  }\n  :host([size=medium]) .modal__content {\n    -ms-flex: 1 1 auto;\n    flex: 1 1 auto;\n    max-height: unset;\n  }\n  :host([size=medium]) .modal__header,\n:host([size=medium]) .modal__footer {\n    -ms-flex: inherit;\n    flex: inherit;\n  }\n\n  :host([size=medium][docked]) {\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n}\n:host([size=large]) .modal {\n  max-width: 94rem;\n}\n\n\@media screen and (max-width: 97rem) {\n  :host([size=large]) .modal {\n    height: 100%;\n    max-height: 100%;\n    width: 100%;\n    max-width: 100%;\n    margin: 0;\n    border-radius: 0;\n  }\n  :host([size=large]) .modal__content {\n    -ms-flex: 1 1 auto;\n    flex: 1 1 auto;\n    max-height: unset;\n  }\n  :host([size=large]) .modal__header,\n:host([size=large]) .modal__footer {\n    -ms-flex: inherit;\n    flex: inherit;\n  }\n\n  :host([size=large][docked]) {\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n}\n/**\n * Fullscreen\n */\n:host([size=fullscreen]) {\n  background-color: transparent;\n}\n:host([size=fullscreen]) .modal {\n  -webkit-transform: translate3D(0, 20px, 0) scale(0.95);\n  transform: translate3D(0, 20px, 0) scale(0.95);\n  height: 100%;\n  max-height: 100%;\n  width: 100%;\n  max-width: 100%;\n  margin: 0;\n}\n:host([size=fullscreen]) .modal__content {\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n}\n:host([size=fullscreen]) .modal__header,\n:host([size=fullscreen]) .modal__footer {\n  -ms-flex: inherit;\n  flex: inherit;\n}\n\n:host(.is-active[size=fullscreen]) .modal {\n  -webkit-transform: translate3D(0, 0, 0) scale(1);\n  transform: translate3D(0, 0, 0) scale(1);\n}\n:host(.is-active[size=fullscreen]) .modal__header {\n  border-radius: 0;\n}\n:host(.is-active[size=fullscreen]) .modal__footer {\n  border-radius: 0;\n}\n\n/**\n * Docked\n */\n:host([docked]) .modal {\n  height: auto !important;\n}\n:host([docked]) .modal__content {\n  height: auto;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n}\n\@media screen and (max-width: 860px) {\n  :host([docked]) .modal {\n    border-radius: var(--calcite-border-radius) var(--calcite-border-radius) 0 0;\n  }\n  :host([docked]) .modal__close {\n    border-radius: 0 var(--calcite-border-radius) 0 0;\n  }\n}\n\n\@media screen and (max-width: 860px) {\n  :host([docked][dir=rtl]) .modal__close {\n    border-radius: var(--calcite-border-radius) var(--calcite-border-radius) 0 0;\n  }\n}\n/**\n * Colors\n */\n:host([color=red]) .modal {\n  border-top: 4px solid var(--calcite-ui-red-1);\n}\n\n:host([color=blue]) .modal {\n  border-top: 4px solid var(--calcite-ui-blue-1);\n}\n\n:host([color=red]) .modal__header,\n:host([color=blue]) .modal__header {\n  border-radius: var(--calcite-border-radius);\n}\n\n/**\n * Tablet\n */\n\@media screen and (max-width: 860px) {\n  slot[name=header]::slotted(*),\n*::slotted([slot=header]) {\n    font-size: 1.2019rem;\n    line-height: 1.5;\n  }\n}\n\@media screen and (max-width: 860px) and (max-width: 859px) {\n  slot[name=header]::slotted(*),\n*::slotted([slot=header]) {\n    font-size: 1.1305rem;\n  }\n}\n\@media screen and (max-width: 860px) and (max-width: 479px) {\n  slot[name=header]::slotted(*),\n*::slotted([slot=header]) {\n    font-size: 1.0625rem;\n  }\n}\n\@media screen and (max-width: 860px) {\n  .modal__title {\n    padding: 0.375rem 1.0125rem;\n  }\n}\n\@media screen and (max-width: 860px) {\n  .modal__close {\n    padding: 0.75rem;\n  }\n}\n\@media screen and (max-width: 860px) {\n  .modal__content--spaced {\n    padding: 1.0125rem;\n  }\n}\n\@media screen and (max-width: 860px) {\n  .modal__footer {\n    position: -webkit-sticky;\n    position: sticky;\n    bottom: 0;\n  }\n}\n/**\n * Mobile\n */\n\@media screen and (max-width: 480px) {\n  .modal__footer {\n    -ms-flex-direction: column;\n    flex-direction: column;\n  }\n\n  .modal__back,\n.modal__secondary {\n    margin: 0;\n    margin-bottom: 0.375rem;\n  }\n}"; }
};

export { CalciteModal as calcite_modal };
