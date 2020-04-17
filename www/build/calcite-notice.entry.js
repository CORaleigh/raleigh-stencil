import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './core-17370b86.js';
import { g as getElementDir } from './dom-21b0c18b.js';

const CalciteNotice = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //---------------------------------------------------------------------------
        /** Is the notice currently active or not */
        this.active = false;
        /** Color for the notice (will apply to top border and icon) */
        this.color = "blue";
        /** specify the scale of the notice, defaults to m */
        this.scale = "m";
        /** specify the scale of the button, defaults to m */
        this.width = "auto";
        /** Select theme (light or dark) */
        this.dismissible = false;
        /** If false, no icon will be shown in the notice */
        this.icon = false;
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /** Unique ID for this notice */
        this.noticeId = this.el.id;
        this.iconDefaults = {
            green: "checkCircle",
            yellow: "exclamationMarkTriangle",
            red: "exclamationMarkTriangle",
            blue: "lightbulb",
        };
        this.calciteNoticeClose = createEvent(this, "calciteNoticeClose", 7);
        this.calciteNoticeOpen = createEvent(this, "calciteNoticeOpen", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        // prop validations
        let colors = ["blue", "red", "green", "yellow"];
        if (!colors.includes(this.color))
            this.color = "blue";
        let scales = ["s", "m", "l"];
        if (!scales.includes(this.scale))
            this.scale = "m";
        let widths = ["auto", "half", "full"];
        if (!widths.includes(this.width))
            this.width = "auto";
    }
    componentDidLoad() {
        this.noticeLinkEl = this.el.querySelectorAll("calcite-button")[0];
    }
    render() {
        const dir = getElementDir(this.el);
        const closeButton = (h("button", { class: "notice-close", "aria-label": "close", onClick: () => this.close(), ref: (el) => (this.closeButton = el) }, h("calcite-icon", { icon: "x", scale: "m" })));
        return (h(Host, { active: this.active, dir: dir }, this.icon ? this.setIcon() : null, h("div", { class: "notice-content" }, h("slot", { name: "notice-title" }), h("slot", { name: "notice-message" }), h("slot", { name: "notice-link" })), this.dismissible ? closeButton : null));
    }
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /** close the notice emit the `calciteNoticeClose` event - <calcite-notice> listens for this */
    async close() {
        this.active = false;
        this.calciteNoticeClose.emit({ requestedNotice: this.noticeId });
    }
    /** open the notice and emit the `calciteNoticeOpen` event - <calcite-notice> listens for this  */
    async open() {
        this.active = true;
        this.calciteNoticeOpen.emit({ requestedNotice: this.noticeId });
    }
    /** focus the close button, if present and requested */
    async setFocus() {
        if (!this.closeButton && !this.noticeLinkEl) {
            return;
        }
        if (this.noticeLinkEl)
            this.noticeLinkEl.setFocus();
        else if (this.closeButton) {
            this.closeButton.focus();
        }
    }
    setIcon() {
        var path = this.iconDefaults[this.color];
        return (h("div", { class: "notice-icon" }, h("calcite-icon", { icon: path, scale: "m" })));
    }
    get el() { return getElement(this); }
    static get style() { return ":host([hidden]) {\n  display: none;\n}\n\n:host([scale=s]) {\n  --calcite-notice-spacing-token-small: 0.75rem;\n  --calcite-notice-spacing-token-large: 1rem;\n}\n:host([scale=s]) slot[name=notice-title]::slotted(div),\n:host([scale=s]) div::slotted([slot=notice-title]) {\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n:host([scale=s]) slot[name=notice-message]::slotted(div),\n:host([scale=s]) div::slotted([slot=notice-message]) {\n  font-size: 0.8125rem;\n  line-height: 1.5;\n}\n:host([scale=s]) ::slotted(calcite-button) {\n  font-size: 0.8125rem;\n  line-height: 1.5;\n}\n\n:host([scale=m]) {\n  --calcite-notice-spacing-token-small: 1rem;\n  --calcite-notice-spacing-token-large: 1.5rem;\n}\n:host([scale=m]) slot[name=notice-title]::slotted(div),\n:host([scale=m]) div::slotted([slot=notice-title]) {\n  font-size: 0.9375rem;\n  line-height: 1.5;\n}\n:host([scale=m]) slot[name=notice-message]::slotted(div),\n:host([scale=m]) div::slotted([slot=notice-message]) {\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n:host([scale=m]) ::slotted(calcite-button) {\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n\n:host([scale=l]) {\n  --calcite-notice-spacing-token-small: 1.2rem;\n  --calcite-notice-spacing-token-large: 1.875rem;\n}\n:host([scale=l]) slot[name=notice-title]::slotted(div),\n:host([scale=l]) div::slotted([slot=notice-title]) {\n  font-size: 1rem;\n  line-height: 1.5;\n}\n:host([scale=l]) slot[name=notice-message]::slotted(div),\n:host([scale=l]) div::slotted([slot=notice-message]) {\n  font-size: 0.9375rem;\n  line-height: 1.5;\n}\n:host([scale=l]) ::slotted(calcite-button) {\n  font-size: 0.9375rem;\n  line-height: 1.5;\n}\n\n:host([width=auto]) {\n  --calcite-notice-width: auto;\n}\n\n:host([width=half]) {\n  --calcite-notice-width: 50%;\n}\n\n:host([width=full]) {\n  --calcite-notice-width: 100%;\n}\n\n:host {\n  display: none;\n  text-align: left;\n  margin: 0 auto;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  width: var(--calcite-notice-width);\n  max-height: 0;\n  background-color: var(--calcite-ui-foreground-1);\n  opacity: 0;\n  pointer-events: none;\n  -webkit-transition: 150ms ease-in-out;\n  transition: 150ms ease-in-out;\n  border-left: 0px solid;\n  -webkit-box-shadow: 0 0 0 0 transparent;\n  box-shadow: 0 0 0 0 transparent;\n}\n\n.notice-close {\n  outline-offset: 0;\n  outline-color: transparent;\n  -webkit-transition: outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;\n  transition: outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;\n}\n.notice-close:focus {\n  outline: 2px solid var(--calcite-ui-blue-1);\n  outline-offset: -2px;\n}\n\n:host([dir=rtl]) {\n  text-align: right;\n  border-left: none;\n  border-right: 0px solid;\n}\n\n:host([active]) {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: center;\n  align-items: center;\n  opacity: 1;\n  max-height: 100%;\n  pointer-events: initial;\n  border-width: 3px;\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);\n}\n\nslot[name=notice-title]::slotted(div),\ndiv::slotted([slot=notice-title]) {\n  color: var(--calcite-ui-text-1);\n  font-weight: 500;\n}\n\nslot[name=notice-message]::slotted(div),\ndiv::slotted([slot=notice-message]) {\n  display: inline;\n  margin-right: var(--calcite-notice-spacing-token-small);\n  color: var(--calcite-ui-text-2);\n}\n\n:host([dir=rtl]) slot[name=notice-message]::slotted(div),\n:host([dir=rtl]) div::slotted([slot=notice-message]) {\n  margin-right: unset;\n  margin-left: var(--calcite-notice-spacing-token-small);\n}\n\n.notice-content {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  -webkit-transition: all 0.15s ease-in-out;\n  transition: all 0.15s ease-in-out;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  min-width: 0;\n  word-wrap: break-word;\n  padding: var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small) 0;\n}\n.notice-content:first-of-type:not(:only-child) {\n  padding-left: var(--calcite-notice-spacing-token-large);\n}\n.notice-content:only-child {\n  padding: var(--calcite-notice-spacing-token-small);\n}\n\n:host([dir=rtl]) .notice-content {\n  padding: var(--calcite-notice-spacing-token-small) 0 var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small);\n}\n:host([dir=rtl]) .notice-content:first-of-type:not(:only-child) {\n  padding-right: var(--calcite-notice-spacing-token-large);\n}\n\n.notice-icon {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  -webkit-transition: all 0.15s ease-in-out;\n  transition: all 0.15s ease-in-out;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.notice-close {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  -webkit-transition: all 0.15s ease-in-out;\n  transition: all 0.15s ease-in-out;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  background-color: transparent;\n  -webkit-appearance: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  color: var(--calcite-ui-text-3);\n}\n.notice-close:hover, .notice-close:focus {\n  background-color: var(--calcite-ui-foreground-2);\n}\n.notice-close:active {\n  background-color: var(--calcite-ui-foreground-3);\n}\n\n:host([color=blue]) {\n  border-color: var(--calcite-ui-blue-1);\n}\n:host([color=blue]) .notice-icon {\n  color: var(--calcite-ui-blue-1);\n}\n\n:host([color=red]) {\n  border-color: var(--calcite-ui-red-1);\n}\n:host([color=red]) .notice-icon {\n  color: var(--calcite-ui-red-1);\n}\n\n:host([color=yellow]) {\n  border-color: var(--calcite-ui-yellow-1);\n}\n:host([color=yellow]) .notice-icon {\n  color: var(--calcite-ui-yellow-1);\n}\n\n:host([color=green]) {\n  border-color: var(--calcite-ui-green-1);\n}\n:host([color=green]) .notice-icon {\n  color: var(--calcite-ui-green-1);\n}"; }
};

export { CalciteNotice as calcite_notice };
