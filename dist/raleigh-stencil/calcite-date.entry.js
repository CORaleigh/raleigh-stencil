import { r as registerInstance, B as Build, c as createEvent, h, H as Host, d as getElement } from './core-17370b86.js';
import { g as getElementDir } from './dom-21b0c18b.js';
import { b as ESCAPE } from './keys-ed140d96.js';
import { g as getLocaleFormatData, d as dateFromISO, a as dateFromRange, b as dateToISO, p as parseDateString, i as inRange } from './date-f2e9c8a9.js';

const CalciteDatePicker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Expand or collapse when calendar does not have input */
        this.showCalendar = false;
        /** Localized string for "previous month" */
        this.prevMonthLabel = "previous month";
        /** Localized string for "next month" */
        this.nextMonthLabel = "next month";
        /** BCP 47 language tag for desired language and country format */
        this.locale = "en-US";
        /** Show only calendar popup */
        this.noCalendarInput = false;
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        this.localeData = getLocaleFormatData(this.locale);
        this.hasShadow = Build.isBrowser && !!document.head.attachShadow;
        /**
         * Update component based on input proxy
         */
        this.syncThisToProxyInput = () => {
            this.min = this.inputProxy.min;
            this.max = this.inputProxy.max;
            const min = dateFromISO(this.min);
            const max = dateFromISO(this.max);
            const date = dateFromISO(this.inputProxy.value);
            this.valueAsDate = dateFromRange(date, min, max);
            this.value = dateToISO(this.valueAsDate);
        };
        /**
         * Update input proxy
         */
        this.syncProxyInputToThis = () => {
            if (this.inputProxy) {
                this.inputProxy.value = this.value || "";
                if (this.min) {
                    this.inputProxy.min = this.min;
                }
                if (this.max) {
                    this.inputProxy.max = this.max;
                }
            }
        };
        this.calciteDateChange = createEvent(this, "calciteDateChange", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    focusOutHandler() {
        this.reset();
    }
    /**
     * Blur doesn't fire properly when there is no shadow dom (ege/IE11)
     * Check if the focused element is inside the date picker, if not close
     */
    focusInHandler(e) {
        if (!this.hasShadow && !this.el.contains(e.srcElement)) {
            this.reset();
        }
    }
    keyDownHandler(e) {
        if (e.keyCode === ESCAPE) {
            this.reset();
        }
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    connectedCallback() {
        this.setupProxyInput();
    }
    disconnectedCallback() {
        this.observer.disconnect();
    }
    componentWillRender() {
        this.syncProxyInputToThis();
    }
    render() {
        const min = dateFromISO(this.min);
        const max = dateFromISO(this.max);
        const date = dateFromRange(this.valueAsDate, min, max);
        const activeDate = this.getActiveDate(date, min, max);
        const formattedDate = date ? date.toLocaleDateString(this.locale) : "";
        const dir = getElementDir(this.el);
        return (h(Host, { role: "application", dir: dir }, h("slot", null), !this.noCalendarInput && (h("div", { class: "date-input-wrapper", role: "application" }, h("calcite-icon", { icon: "calendar", class: "calendar-icon", scale: "s" }), h("input", { type: "text", placeholder: this.localeData.placeholder, value: formattedDate, class: "date-input", onFocus: () => (this.showCalendar = true), onInput: (e) => this.input(e.target.value), onBlur: (e) => this.blur(e.target) }))), h("div", { class: "calendar-picker-wrapper" }, h("calcite-date-month-header", { activeDate: activeDate, selectedDate: date || new Date(), prevMonthLabel: this.prevMonthLabel, nextMonthLabel: this.nextMonthLabel, locale: this.locale, min: min, max: max, onCalciteActiveDateChange: (e) => {
                this.activeDate = new Date(e.detail);
            }, dir: dir }), h("calcite-date-month", { min: min, max: max, selectedDate: date, activeDate: activeDate, locale: this.locale, onCalciteDateSelect: (e) => {
                this.setValue(new Date(e.detail));
                this.activeDate = new Date(e.detail);
                this.calciteDateChange.emit(new Date(e.detail));
                this.reset();
            }, onCalciteActiveDateChange: (e) => {
                this.activeDate = new Date(e.detail);
            }, dir: dir }))));
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    /**
     * Register slotted date input proxy, or create one if not provided
     */
    setupProxyInput() {
        // check for a proxy input
        this.inputProxy = this.el.querySelector("input");
        // if the user didn't pass a proxy input create one for them
        if (!this.inputProxy) {
            this.inputProxy = document.createElement("input");
            try {
                this.inputProxy.type = "date";
            }
            catch (e) {
                this.inputProxy.type = "text";
            }
            this.syncProxyInputToThis();
            this.el.appendChild(this.inputProxy);
        }
        this.syncThisToProxyInput();
        if (Build.isBrowser) {
            this.observer = new MutationObserver(this.syncThisToProxyInput);
            this.observer.observe(this.inputProxy, { attributes: true });
        }
    }
    /**
     * Set both iso value and date value and update proxy
     */
    setValue(date) {
        this.valueAsDate = new Date(date);
        this.value = date.toISOString().split("T")[0];
        this.syncProxyInputToThis();
    }
    /**
     * Reset active date and close
     */
    reset() {
        if (this.valueAsDate) {
            this.activeDate = new Date(this.valueAsDate);
        }
        if (!this.noCalendarInput) {
            this.showCalendar = false;
        }
    }
    /**
     * If inputted string is a valid date, update value/active
     */
    input(value) {
        const date = this.getDateFromInput(value);
        if (date) {
            this.setValue(date);
            this.activeDate = date;
            this.calciteDateChange.emit(new Date(date));
        }
    }
    /**
     * Clean up invalid date from input on blur
     */
    blur(target) {
        const date = this.getDateFromInput(target.value);
        if (!date && this.valueAsDate) {
            target.value = this.valueAsDate.toLocaleDateString(this.locale);
        }
    }
    /**
     * Get an active date using the value, or current date as default
     */
    getActiveDate(value, min, max) {
        return (dateFromRange(this.activeDate, min, max) ||
            value ||
            dateFromRange(new Date(), min, max));
    }
    /**
     * Find a date from input string
     * return false if date is invalid, or out of range
     */
    getDateFromInput(value) {
        const { separator } = this.localeData;
        const { day, month, year } = parseDateString(value, this.locale);
        const date = new Date(year, month, day);
        const validDate = !isNaN(date.getTime());
        const validLength = value.split(separator).filter((c) => c).length > 2;
        const validYear = year.toString().length > 3;
        if (validDate &&
            validLength &&
            validYear &&
            inRange(date, this.min, this.max)) {
            return date;
        }
        return false;
    }
    get el() { return getElement(this); }
    static get style() { return ":host([hidden]) {\n  display: none;\n}\n\n:host {\n  display: inline-block;\n  vertical-align: top;\n}\n\n::slotted(input) {\n  display: none;\n}\n\n.date-input-wrapper {\n  border: 1px solid var(--calcite-ui-border-1);\n  position: relative;\n}\n.date-input-wrapper:active, .date-input-wrapper:focus {\n  border-color: transparent;\n  border-bottom: 1px solid var(--calcite-ui-border-3);\n}\n\n.date-input {\n  color: var(--calcite-ui-text-3);\n  background: var(--calcite-ui-foreground-1);\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border: none;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.5;\n  font-family: inherit;\n  padding: 0.75rem 2.5rem;\n  width: 100%;\n  margin: 0;\n}\n.date-input:active, .date-input:focus {\n  outline: none;\n}\n\n.calendar-icon {\n  color: var(--calcite-ui-text-3);\n  position: absolute;\n  top: 50%;\n  margin: -8px 0.75rem;\n  pointer-events: none;\n}\n\n.calendar-picker-wrapper {\n  position: absolute;\n  background-color: var(--calcite-ui-foreground-1);\n  -webkit-box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.16);\n  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.16);\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: translate3d(0, -1.5rem, 0);\n  transform: translate3d(0, -1.5rem, 0);\n  -webkit-transition: all 0.15s ease-in-out;\n  transition: all 0.15s ease-in-out;\n  pointer-events: none;\n  z-index: 2;\n}\n\n:host([show-calendar]) {\n  background-color: var(--calcite-ui-foreground-1);\n  border-radius: var(--calcite-border-radius);\n  border: 1px solid var(--calcite-ui-border-2);\n  -webkit-box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.16);\n  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.16);\n  overflow: hidden;\n}\n:host([show-calendar]) .calendar-picker-wrapper {\n  opacity: 1;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  visibility: visible;\n  pointer-events: initial;\n}\n:host([show-calendar]) .date-input-wrapper {\n  border: none;\n  border-bottom: 1px solid var(--calcite-ui-border-3);\n}\n\n:host([no-calendar-input]) .calendar-picker-wrapper {\n  position: static;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}"; }
};

export { CalciteDatePicker as calcite_date };
