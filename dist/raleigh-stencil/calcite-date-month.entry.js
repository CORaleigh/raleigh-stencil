import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './core-17370b86.js';
import { U as UP, R as RIGHT, D as DOWN, L as LEFT, P as PAGE_UP, c as PAGE_DOWN, H as HOME, E as END, a as ENTER, S as SPACE, T as TAB } from './keys-ed140d96.js';
import { h as getFirstDayOfWeek, j as getLocalizedWeekdays, i as inRange, s as sameDate, a as dateFromRange } from './date-f2e9c8a9.js';

const CalciteDateMonth = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Date currently active.*/
        this.activeDate = new Date();
        /** User's language and region as BCP 47 formatted string. */
        this.locale = "en-US";
        this.calciteDateSelect = createEvent(this, "calciteDateSelect", 7);
        this.calciteActiveDateChange = createEvent(this, "calciteActiveDateChange", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    keyDownHandler(e) {
        const isRTL = this.el.dir === "rtl";
        switch (e.keyCode) {
            case UP:
                e.preventDefault();
                this.addDays(-7);
                break;
            case RIGHT:
                e.preventDefault();
                this.addDays(isRTL ? -1 : 1);
                break;
            case DOWN:
                e.preventDefault();
                this.addDays(7);
                break;
            case LEFT:
                e.preventDefault();
                this.addDays(isRTL ? 1 : -1);
                break;
            case PAGE_UP:
                e.preventDefault();
                this.addMonths(-1);
                break;
            case PAGE_DOWN:
                e.preventDefault();
                this.addMonths(1);
                break;
            case HOME:
                e.preventDefault();
                this.activeDate.setDate(1);
                this.addDays();
                break;
            case END:
                e.preventDefault();
                this.activeDate.setDate(new Date(this.activeDate.getFullYear(), this.activeDate.getMonth() + 1, 0).getDate());
                this.addDays();
                break;
            case ENTER:
            case SPACE:
                e.preventDefault();
                this.calciteDateSelect.emit(this.activeDate);
                break;
            case TAB:
                this.activeFocus = false;
        }
    }
    /**
     * Once user is not interacting via keyboard,
     * disable auto focusing of active date
     */
    disableActiveFocus() {
        this.activeFocus = false;
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    render() {
        const month = this.activeDate.getMonth();
        const year = this.activeDate.getFullYear();
        const startOfWeek = getFirstDayOfWeek(this.locale);
        const weekDays = getLocalizedWeekdays(this.locale);
        const curMonDays = this.getCurrentMonthDays(month, year);
        const prevMonDays = this.getPrevMonthdays(month, year, startOfWeek);
        const nextMonDays = this.getNextMonthDays(month, year, startOfWeek);
        const days = [
            ...prevMonDays.map((day) => {
                const date = new Date(year, month - 1, day);
                return (h("calcite-date-day", { day: day, disabled: !inRange(date, this.min, this.max), selected: sameDate(date, this.selectedDate), onCalciteDaySelect: () => this.calciteDateSelect.emit(date), locale: this.locale }));
            }),
            ...curMonDays.map((day) => {
                const date = new Date(year, month, day);
                const active = sameDate(date, this.activeDate);
                return (h("calcite-date-day", { day: day, disabled: !inRange(date, this.min, this.max), selected: sameDate(date, this.selectedDate), active: active, onCalciteDaySelect: () => this.calciteDateSelect.emit(date), locale: this.locale, ref: (el) => {
                        // when moving via keyboard, focus must be updated on active date
                        if (active && this.activeFocus) {
                            el === null || el === void 0 ? void 0 : el.focus();
                        }
                    }, "current-month": true }));
            }),
            ...nextMonDays.map((day) => {
                const date = new Date(year, month + 1, day);
                return (h("calcite-date-day", { day: day, disabled: !inRange(date, this.min, this.max), selected: sameDate(date, this.selectedDate), onCalciteDaySelect: () => this.calciteDateSelect.emit(date), locale: this.locale }));
            }),
        ];
        const weeks = [];
        for (let i = 0; i < days.length; i += 7) {
            weeks.push(days.slice(i, i + 7));
        }
        return (h(Host, null, h("div", { class: "calender", role: "grid" }, h("div", { class: "week-headers", role: "row" }, weekDays.map((weekday) => (h("span", { class: "week-header", role: "columnheader" }, weekday)))), weeks.map((days) => (h("div", { class: "week-days", role: "row" }, days))))));
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    /**
     * Add n months to the current month
     */
    addMonths(step) {
        const nextDate = new Date(this.activeDate);
        nextDate.setMonth(this.activeDate.getMonth() + step);
        this.calciteActiveDateChange.emit(dateFromRange(nextDate, this.min, this.max));
        this.activeFocus = true;
    }
    /**
     * Add n days to the current date
     */
    addDays(step = 0) {
        const nextDate = new Date(this.activeDate);
        nextDate.setDate(this.activeDate.getDate() + step);
        this.calciteActiveDateChange.emit(dateFromRange(nextDate, this.min, this.max));
        this.activeFocus = true;
    }
    /**
     * Get dates for last days of the previous month
     */
    getPrevMonthdays(month, year, startOfWeek) {
        const lastDate = new Date(year, month, 0);
        const date = lastDate.getDate();
        const day = lastDate.getDay();
        const days = [];
        if (day - 6 === startOfWeek) {
            return days;
        }
        for (let i = lastDate.getDay(); i >= startOfWeek; i--) {
            days.push(date - i);
        }
        return days;
    }
    /**
     * Get dates for the current month
     */
    getCurrentMonthDays(month, year) {
        const num = new Date(year, month + 1, 0).getDate();
        const days = [];
        for (let i = 0; i < num; i++) {
            days.push(i + 1);
        }
        return days;
    }
    /**
     * Get dates for first days of the next month
     */
    getNextMonthDays(month, year, startOfWeek) {
        const endDay = new Date(year, month + 1, 0).getDay();
        const days = [];
        if (endDay === (startOfWeek + 6) % 7) {
            return days;
        }
        for (let i = 0; i < (6 - (endDay - startOfWeek)) % 7; i++) {
            days.push(i + 1);
        }
        return days;
    }
    get el() { return getElement(this); }
    static get style() { return ":host([hidden]) {\n  display: none;\n}\n\n:host-context([theme=dark]) {\n  --calcite-ui-blue-1: #00A0FF;\n  --calcite-ui-blue-2: #0087D7;\n  --calcite-ui-blue-3: #47BBFF;\n  --calcite-ui-green-1: #36DA43;\n  --calcite-ui-green-2: #11AD1D;\n  --calcite-ui-green-3: #44ED51;\n  --calcite-ui-yellow-1: #FFC900;\n  --calcite-ui-yellow-2: #F4B000;\n  --calcite-ui-yellow-3: #FFE24D;\n  --calcite-ui-red-1: #FE583E;\n  --calcite-ui-red-2: #F3381B;\n  --calcite-ui-red-3: #FF7465;\n  --calcite-ui-background: #202020;\n  --calcite-ui-foreground-1: #2b2b2b;\n  --calcite-ui-foreground-2: #353535;\n  --calcite-ui-foreground-3: #404040;\n  --calcite-ui-text-1: #ffffff;\n  --calcite-ui-text-2: #bfbfbf;\n  --calcite-ui-text-3: #9f9f9f;\n  --calcite-ui-border-1: #4a4a4a;\n  --calcite-ui-border-2: #404040;\n  --calcite-ui-border-3: #353535;\n  --calcite-ui-border-4: #757575;\n  --calcite-ui-border-5: #9f9f9f;\n}\n\n.calender .week-headers {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  border-bottom: 1px solid var(--calcite-ui-border-3);\n  border-top: 1px solid var(--calcite-ui-border-3);\n}\n.calender .week-headers .week-header {\n  color: var(--calcite-ui-text-2);\n  padding: 0.75rem 0;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 11px;\n  width: calc(100% / 7);\n  text-align: center;\n}\n.calender .week-days {\n  outline: none;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n}"; }
};

export { CalciteDateMonth as calcite_date_month };
