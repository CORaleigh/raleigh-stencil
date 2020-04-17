import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './core-17370b86.js';
import { g as getElementDir } from './dom-21b0c18b.js';
import { D as DOWN, U as UP } from './keys-ed140d96.js';
import { c as getMonths, e as getYear, f as prevMonth, a as dateFromRange, n as nextMonth, r as replaceArabicNumerals, g as getLocaleFormatData } from './date-f2e9c8a9.js';

const CalciteDateMonthHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.calciteActiveDateChange = createEvent(this, "calciteActiveDateChange", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    render() {
        const activeMonth = this.activeDate.getMonth();
        const localizedMonth = getMonths(this.locale)[activeMonth];
        const localizedYear = getYear(this.activeDate, this.locale);
        const dir = getElementDir(this.el);
        return (h(Host, { dir: dir }, h("div", { class: "month-year", "aria-hidden": "true" }, h("button", { class: "left-icon", "aria-label": this.prevMonthLabel, onClick: () => this.selectPrevMonth() }, h("calcite-icon", { icon: "chevron-left", scale: "s", mirrored: true, dir: dir })), h("div", { class: "month-year-text" }, h("span", { class: "month", role: "heading" }, localizedMonth), h("input", { class: "year", type: "text", inputmode: "numeric", maxlength: "4", minlength: "4", pattern: "\\d*", value: `${localizedYear.slice(-4)}`, onKeyDown: (event) => this.onYearKey(event), onChange: (event) => this.setYear(event.target.value), ref: (el) => (this.yearInput = el) })), h("button", { class: "right-icon", "aria-label": this.nextMonthLabel, onClick: () => this.selectNextMonth() }, h("calcite-icon", { icon: "chevron-right", scale: "s", mirrored: true, dir: dir })))));
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    /**
     * Set active date to previous month (or min if out of range)
     */
    selectPrevMonth() {
        const nextDate = prevMonth(this.activeDate);
        this.calciteActiveDateChange.emit(dateFromRange(nextDate, this.min, this.max));
    }
    /**
     * Set active date to next month (or max if out of range)
     */
    selectNextMonth() {
        const nextDate = nextMonth(this.activeDate);
        this.calciteActiveDateChange.emit(dateFromRange(nextDate, this.min, this.max));
    }
    /**
     * Increment year on UP/DOWN keys
     */
    onYearKey(e) {
        const year = e.target.value;
        switch (e.keyCode) {
            case DOWN:
                e.preventDefault();
                this.setYear(year, -1);
                break;
            case UP:
                e.preventDefault();
                this.setYear(year, 1);
                break;
        }
    }
    /**
     * Parse localized year string from input,
     * set to active if in range
     */
    setYear(localizedYear, increment = 0) {
        const { min, max, activeDate, locale, yearInput } = this;
        const parsedYear = parseInt(replaceArabicNumerals(localizedYear));
        const length = parsedYear.toString().length;
        const offset = getLocaleFormatData(locale).buddhist ? 543 : 0;
        const year = isNaN(parsedYear) ? false : parsedYear - offset + increment;
        const inRange = year &&
            (!min || min.getFullYear() <= year) &&
            (!max || max.getFullYear() >= year);
        // if you've supplied a year and it's in range, update active date
        if (year && inRange && length === localizedYear.length && length > 3) {
            const nextDate = new Date(activeDate);
            nextDate.setFullYear(year);
            const inRangeDate = dateFromRange(nextDate, min, max);
            this.calciteActiveDateChange.emit(inRangeDate);
            yearInput.value = getYear(inRangeDate, locale).slice(-4);
        }
        else {
            // leave the current active date and clean up garbage input
            yearInput.value = getYear(activeDate, locale).slice(-4);
        }
    }
    get el() { return getElement(this); }
    static get style() { return ":host([hidden]) {\n  display: none;\n}\n\n:host-context([theme=dark]) {\n  --calcite-ui-blue-1: #00A0FF;\n  --calcite-ui-blue-2: #0087D7;\n  --calcite-ui-blue-3: #47BBFF;\n  --calcite-ui-green-1: #36DA43;\n  --calcite-ui-green-2: #11AD1D;\n  --calcite-ui-green-3: #44ED51;\n  --calcite-ui-yellow-1: #FFC900;\n  --calcite-ui-yellow-2: #F4B000;\n  --calcite-ui-yellow-3: #FFE24D;\n  --calcite-ui-red-1: #FE583E;\n  --calcite-ui-red-2: #F3381B;\n  --calcite-ui-red-3: #FF7465;\n  --calcite-ui-background: #202020;\n  --calcite-ui-foreground-1: #2b2b2b;\n  --calcite-ui-foreground-2: #353535;\n  --calcite-ui-foreground-3: #404040;\n  --calcite-ui-text-1: #ffffff;\n  --calcite-ui-text-2: #bfbfbf;\n  --calcite-ui-text-3: #9f9f9f;\n  --calcite-ui-border-1: #4a4a4a;\n  --calcite-ui-border-2: #404040;\n  --calcite-ui-border-3: #353535;\n  --calcite-ui-border-4: #757575;\n  --calcite-ui-border-5: #9f9f9f;\n}\n\n.month-year {\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.right-icon,\n.left-icon {\n  color: var(--calcite-ui-text-3);\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  outline: none;\n  padding: 0;\n  border: none;\n  color: inherit;\n  background-color: var(--calcite-ui-foreground-1);\n  cursor: pointer;\n  -webkit-transition: all 0.15s ease-in-out;\n  transition: all 0.15s ease-in-out;\n}\n.right-icon:hover, .right-icon:focus,\n.left-icon:hover,\n.left-icon:focus {\n  fill: var(--calcite-ui-text-1);\n  background-color: var(--calcite-ui-foreground-2);\n}\n.right-icon:active,\n.left-icon:active {\n  background-color: var(--calcite-ui-foreground-3);\n}\n\n.month-year-text {\n  padding: 0.5rem;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  width: 50%;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\n.month,\n.year {\n  color: var(--calcite-ui-text-1);\n  background: var(--calcite-ui-foreground-1);\n  font-size: 1rem;\n  line-height: 1.5;\n  font-weight: 500;\n}\n\n.year {\n  font-family: inherit;\n  text-align: center;\n  border: none;\n  width: 3em;\n  padding: 0;\n  margin: 0 8px;\n  outline-offset: 0;\n  outline-color: rgba(0, 0, 0, 0);\n  -webkit-transition: outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;\n  transition: outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;\n}\n.year:focus {\n  outline: 2px solid var(--calcite-ui-blue-1);\n  outline-offset: 2px;\n}"; }
};

export { CalciteDateMonthHeader as calcite_date_month_header };
