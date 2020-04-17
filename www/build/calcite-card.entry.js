import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './core-17370b86.js';
import { g as getElementDir } from './dom-21b0c18b.js';
import { S as SPACE, a as ENTER } from './keys-ed140d96.js';

const CSS = {
    container: "container",
    header: "header",
    footer: "footer",
    title: "title",
    subtitle: "subtitle",
    thumbnailWrapper: "thumbnail-wrapper",
    checkboxWrapper: "checkbox-wrapper"
};

const CalciteCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        /**  When true, the cards content is waiting to be loaded. This state shows a busy indicator.*/
        this.loading = false;
        /** Indicates whether the card is selected. */
        this.selected = false;
        /** Indicates whether the card is selectable. */
        this.selectable = false;
        this.calciteCardSelected = createEvent(this, "calciteCardSelected", 7);
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    render() {
        const dir = getElementDir(this.el);
        return (h(Host, { dir: dir }, h("div", { class: "calcite-card-container" }, this.loading ? (h("div", { class: "calcite-card-loader-container" }, h("calcite-loader", { "is-active": true }))) : null, h("section", { class: { [CSS.container]: true }, "aria-busy": this.loading }, this.selectable ? this.renderCheckbox() : null, this.renderThumbnail(), this.renderHeader(), h("div", { class: "card-content" }, h("slot", null)), this.renderFooter()))));
    }
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    cardSelectClick() {
        this.selectCard();
    }
    cardSelectKeyDown(e) {
        switch (e.keyCode) {
            case SPACE:
            case ENTER:
                this.selectCard();
                e.preventDefault();
                break;
        }
    }
    selectCard() {
        this.selected = !this.selected;
        this.calciteCardSelected.emit({
            element: this.el,
            selected: this.selected,
        });
    }
    renderThumbnail() {
        const hasThumbnail = this.el.querySelector(`[slot=${"thumbnail" /* thumbnail */}]`);
        return hasThumbnail ? (h("div", { class: CSS.thumbnailWrapper }, h("slot", { name: "thumbnail" /* thumbnail */ }))) : null;
    }
    renderCheckbox() {
        return (h("div", { class: CSS.checkboxWrapper, onClick: () => this.cardSelectClick(), onKeyDown: (e) => this.cardSelectKeyDown(e) }, h("calcite-checkbox", { checked: this.selected })));
    }
    renderHeader() {
        const title = this.el.querySelector(`[slot=${"title" /* title */}]`);
        const subtitle = this.el.querySelector(`[slot=${"subtitle" /* subtitle */}]`);
        const hasHeader = title || subtitle;
        return hasHeader ? (h("header", { class: CSS.header }, h("slot", { name: "title" /* title */ }), h("slot", { name: "subtitle" /* subtitle */ }))) : null;
    }
    renderFooter() {
        const leadingFooter = this.el.querySelector(`[slot=${"footer-leading" /* footerLeading */}]`);
        const trailingFooter = this.el.querySelector(`[slot=${"footer-trailing" /* footerTrailing */}]`);
        const hasFooter = leadingFooter || trailingFooter;
        return hasFooter ? (h("footer", { class: CSS.footer }, h("slot", { name: "footer-leading" /* footerLeading */ }), h("slot", { name: "footer-trailing" /* footerTrailing */ }))) : null;
    }
    get el() { return getElement(this); }
    static get style() { return ":host([hidden]) {\n  display: none;\n}\n\n:host {\n  max-width: 100%;\n}\n:host .calcite-card-container {\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  background-color: var(--calcite-ui-foreground-1);\n  -webkit-transition: 150ms ease-in-out;\n  transition: 150ms ease-in-out;\n  position: relative;\n  border: 1px solid var(--calcite-ui-border-2);\n  color: var(--calcite-ui-text-3);\n  -webkit-box-shadow: 0 0 0 rgba(0, 0, 0, 0);\n  box-shadow: 0 0 0 rgba(0, 0, 0, 0);\n}\n:host .calcite-card-container:hover {\n  -webkit-box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);\n  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);\n  z-index: 1;\n}\n:host .calcite-card-container:active {\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.16);\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.16);\n  z-index: 1;\n}\n\n:host([loading]) .calcite-card-container *:not(calcite-loader):not(.calcite-card-loader-container) {\n  opacity: 0;\n  pointer-events: none;\n}\n\n:host([loading]) .calcite-card-loader-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n:host .header,\n:host .footer {\n  padding: 0.75rem;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n:host .header {\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n\n:host .footer {\n  padding: 0.75rem;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-line-pack: justify;\n  align-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n\n:host .card-content {\n  padding: 0 0.75rem;\n  color: var(--calcite-ui-text-3);\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n\n:host([selectable]) .calcite-card-container:active {\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.16);\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.16);\n}\n\n:host([selected]) .calcite-card-container {\n  border-color: var(--calcite-ui-blue-1);\n}\n\nslot[name=title]::slotted(*),\n*::slotted([slot=title]) {\n  font-weight: 500;\n  color: var(--calcite-ui-text-1);\n  margin: 0;\n  font-size: 0.9375rem;\n  line-height: 1.5;\n}\n\nslot[name=subtitle]::slotted(*),\n*::slotted([slot=subtitle]) {\n  font-weight: 400;\n  color: var(--calcite-ui-text-2);\n  margin: 0;\n  margin-top: 0.375rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n\nslot[name=thumbnail]::slotted(img),\nimg::slotted([slot=thumbnail]) {\n  max-width: 100%;\n  min-width: 100%;\n}\n\nslot[name=footer-leading]::slotted(*),\n*::slotted([slot=footer-leading]) {\n  -webkit-margin-end: auto;\n  margin-inline-end: auto;\n  -ms-flex-item-align: center;\n  align-self: center;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n\nslot[name=footer-trailing]::slotted(*),\n*::slotted([slot=footer-trailing]) {\n  -ms-flex-item-align: center;\n  align-self: center;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n\n:host .thumbnail-wrapper {\n  font-size: 0;\n}\n\n:host .checkbox-wrapper {\n  position: absolute;\n  top: 0.375rem;\n  right: 0.375rem;\n  margin: 0;\n  padding: 0;\n}\n\n:host([dir=rtl]) .checkbox-wrapper {\n  left: 0.375rem;\n  right: auto;\n}"; }
};

export { CalciteCard as calcite_card };
