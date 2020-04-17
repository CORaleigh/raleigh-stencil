import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './core-17370b86.js';
import { g as guid } from './guid-8a4914c4.js';
import { U as UP, R as RIGHT, D as DOWN, L as LEFT, P as PAGE_UP, c as PAGE_DOWN, H as HOME, E as END } from './keys-ed140d96.js';

const CalciteSlider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Disable and gray out the slider */
        this.disabled = false;
        /** Minimum selectable value */
        this.min = 0;
        /** Maximum selectable value */
        this.max = 100;
        /** Currently selected number (if single select) */
        this.value = null;
        /** Snap selection along the step interval */
        this.snap = true;
        /** Interval to move on up/down keys */
        this.step = 1;
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /** @internal */
        this.guid = `calcite-slider-${guid()}`;
        /** @internal */
        this.isRange = false;
        /** @internal */
        this.tickValues = [];
        /** @internal */
        this.activeProp = "value";
        this.calciteSliderUpdate = createEvent(this, "calciteSliderUpdate", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentWillLoad() {
        this.isRange = !!(this.maxValue || this.maxValue === 0);
        this.tickValues = this.generateTickValues();
        this.value = this.bound(this.value);
        if (this.snap) {
            this.value = this.getClosestStep(this.value);
        }
        this.calciteSliderUpdate.emit();
    }
    render() {
        const id = this.el.id || this.guid;
        const min = this.minValue || this.min;
        const max = this.maxValue || this.value;
        const maxProp = this.isRange ? "maxValue" : "value";
        const left = `${this.getUnitInterval(min) * 100}%`;
        const right = `${100 - this.getUnitInterval(max) * 100}%`;
        return (h(Host, { id: id, "is-range": this.isRange }, h("div", { class: "slider__track" }, h("div", { class: "slider__track__range", style: { left, right } }), h("div", { class: "slider__ticks" }, this.tickValues.map(number => (h("span", { class: {
                slider__tick: true,
                "slider__tick--active": number >= min && number <= max
            }, style: {
                left: `${this.getUnitInterval(number) * 100}%`
            } }, this.labelTicks ? (h("span", { class: {
                slider__tick__label: true,
                "slider__tick__label--min": number === this.min,
                "slider__tick__label--max": number === this.max
            } }, number)) : ("")))))), this.isRange ? (h("button", { ref: el => (this.minHandle = el), onFocus: () => (this.activeProp = "minValue"), onBlur: () => (this.activeProp = null), onMouseDown: () => this.dragStart("minValue"), onTouchStart: e => this.dragStart("minValue", e), role: "slider", "aria-orientation": "horizontal", "aria-label": this.minLabel, "aria-valuenow": this.minValue, "aria-valuemin": this.min, "aria-valuemax": this.max, disabled: this.disabled, style: { left }, class: {
                slider__thumb: true,
                "slider__thumb--min": true,
                "slider__thumb--active": this.dragProp === "minValue",
                "slider__thumb--precise": this.precise
            } }, h("span", { class: "slider__handle" }), this.labelHandles ? (h("span", { class: "slider__handle__label", "aria-hidden": "true" }, this.minValue)) : (""))) : (""), h("button", { ref: el => (this.maxHandle = el), onFocus: () => (this.activeProp = maxProp), onBlur: () => (this.activeProp = null), onMouseDown: () => this.dragStart(maxProp), onTouchStart: e => this.dragStart(maxProp, e), role: "slider", "aria-orientation": "horizontal", "aria-label": this.isRange ? this.maxLabel : this.minLabel, "aria-valuenow": this[maxProp], "aria-valuemin": this.min, "aria-valuemax": this.max, disabled: this.disabled, style: { right }, class: {
                slider__thumb: true,
                "slider__thumb--max": true,
                "slider__thumb--active": this.dragProp === maxProp,
                "slider__thumb--precise": this.precise
            } }, h("span", { class: "slider__handle" }), this.labelHandles ? (h("span", { class: "slider__handle__label", "aria-hidden": "true" }, this[maxProp])) : (""))));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    keyDownHandler(e) {
        const value = this[this.activeProp];
        switch (e.keyCode) {
            case UP:
            case RIGHT:
                e.preventDefault();
                this[this.activeProp] = this.bound(value + this.step, this.activeProp);
                this.calciteSliderUpdate.emit();
                break;
            case DOWN:
            case LEFT:
                e.preventDefault();
                this[this.activeProp] = this.bound(value - this.step, this.activeProp);
                this.calciteSliderUpdate.emit();
                break;
            case PAGE_UP:
                if (this.pageStep) {
                    e.preventDefault();
                    this[this.activeProp] = this.bound(value + this.pageStep, this.activeProp);
                    this.calciteSliderUpdate.emit();
                }
                break;
            case PAGE_DOWN:
                if (this.pageStep) {
                    e.preventDefault();
                    this[this.activeProp] = this.bound(value - this.pageStep, this.activeProp);
                    this.calciteSliderUpdate.emit();
                }
                break;
            case HOME:
                e.preventDefault();
                this[this.activeProp] = this.bound(this.min, this.activeProp);
                this.calciteSliderUpdate.emit();
                break;
            case END:
                e.preventDefault();
                this[this.activeProp] = this.bound(this.max, this.activeProp);
                this.calciteSliderUpdate.emit();
                break;
        }
    }
    clickHandler(e) {
        const x = e.clientX || e.pageX;
        const num = this.translate(x);
        let prop = "value";
        if (this.isRange) {
            const closerToMax = Math.abs(this.maxValue - num) < Math.abs(this.minValue - num);
            prop = closerToMax ? "maxValue" : "minValue";
        }
        this[prop] = this.bound(num, prop);
        this.calciteSliderUpdate.emit();
        const handle = prop === "minValue" ? this.minHandle : this.maxHandle;
        handle.focus();
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    generateTickValues() {
        const ticks = [];
        let current = this.min;
        while (this.ticks && current < this.max + this.ticks) {
            ticks.push(current);
            current = current + this.ticks;
        }
        return ticks;
    }
    dragStart(prop, e) {
        if (e) {
            e.preventDefault();
        }
        if (this.dragListener) {
            this.dragEnd();
        }
        this.dragProp = prop;
        this.activeProp = prop;
        this.dragListener = this.dragListener || this.dragUpdate.bind(this);
        document.addEventListener("mousemove", this.dragListener);
        document.addEventListener("touchmove", this.dragListener, {
            capture: false
        });
        document.addEventListener("mouseup", this.dragEnd.bind(this));
        document.addEventListener("touchend", this.dragEnd.bind(this), false);
        document.addEventListener("touchcancel", this.dragEnd.bind(this));
    }
    dragUpdate(e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.dragProp) {
            const value = this.translate(e.clientX || e.pageX);
            this[this.dragProp] = this.bound(value, this.dragProp);
            this.calciteSliderUpdate.emit();
        }
    }
    dragEnd() {
        this.dragProp = null;
        document.removeEventListener("mousemove", this.dragListener);
        document.removeEventListener("touchmove", this.dragListener);
    }
    /**
     * If number is outside range, constrain to min or max
     * @internal
     */
    bound(num, prop) {
        num = Math.min(num, this.max);
        num = Math.max(num, this.min);
        // ensure that maxValue and minValue don't swap positions
        if (prop === "maxValue") {
            num = Math.max(num, this.minValue);
        }
        if (prop === "minValue") {
            num = Math.min(num, this.maxValue);
        }
        return num;
    }
    /**
     * Translate a pixel position to value along the range
     * @internal
     */
    translate(x) {
        const range = this.max - this.min;
        const { left, width } = this.el.getBoundingClientRect();
        const percent = (x - left) / width;
        let value = this.bound(this.min + range * percent);
        if (this.snap && this.step) {
            value = this.getClosestStep(value);
        }
        return value;
    }
    /**
     * Get closest allowed value along stepped values
     * @internal
     */
    getClosestStep(num) {
        num = this.bound(num);
        if (this.step) {
            const step = Math.round(num / this.step) * this.step;
            num = this.bound(step);
        }
        return num;
    }
    /**
     * Get position of value along range as fractional value
     * @return {number} number in the unit interval [0,1]
     * @internal
     */
    getUnitInterval(num) {
        num = this.bound(num);
        const range = this.max - this.min;
        return (num - this.min) / range;
    }
    get el() { return getElement(this); }
    static get style() { return ":host([hidden]) {\n  display: none;\n}\n\n:host {\n  display: block;\n  padding: 7px 0;\n  margin: 7px 0;\n  position: relative;\n}\n\n:host([disabled]) {\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n/*\n * Ensure we have enough space on variants\n * with text elements to prevent overlap\n */\n:host([label-handles]),\n:host([precise]) {\n  margin-top: 21px;\n}\n\n:host([label-ticks]),\n:host([precise][is-range]) {\n  margin-bottom: 21px;\n}\n\n:host([precise][label-handles]) {\n  margin-top: 35px;\n}\n\n:host([precise][label-handles][is-range]) {\n  margin-bottom: 35px;\n}\n\n.slider__thumb {\n  outline-offset: 0;\n  outline-color: transparent;\n  -webkit-transition: outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;\n  transition: outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;\n}\n.slider__thumb:focus {\n  outline: 2px solid var(--calcite-ui-blue-1);\n  outline-offset: 2px;\n}\n\n.slider__thumb {\n  position: absolute;\n  height: 28px;\n  width: 28px;\n  margin: -14px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  font-family: inherit;\n  z-index: 3;\n}\n\n.slider__handle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 14px;\n  width: 14px;\n  margin: 7px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 100%;\n  background-color: var(--calcite-ui-foreground-1);\n  border: 2px solid var(--calcite-ui-text-3);\n  -webkit-transition: border 0.25s ease, background-color 0.25s ease, -webkit-box-shadow 0.25s ease;\n  transition: border 0.25s ease, background-color 0.25s ease, -webkit-box-shadow 0.25s ease;\n  transition: border 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease;\n  transition: border 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease, -webkit-box-shadow 0.25s ease;\n}\n\n.slider__handle__label {\n  position: absolute;\n  left: 0;\n  bottom: 28px;\n  width: 28px;\n  height: 0.75em;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  font-weight: 500;\n  line-height: 1;\n  color: var(--calcite-ui-text-3);\n  text-align: center;\n}\n\n.slider__thumb:hover .slider__handle {\n  border-width: 3px;\n  border-color: var(--calcite-ui-blue-1);\n  -webkit-box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);\n  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);\n}\n\n.slider__thumb:focus,\n.slider__thumb--active {\n  z-index: 4;\n}\n.slider__thumb:focus .slider__handle,\n.slider__thumb--active .slider__handle {\n  background-color: var(--calcite-ui-blue-1);\n  border-color: var(--calcite-ui-blue-1);\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.16);\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.16);\n}\n\n.slider__thumb--precise {\n  margin-top: -28px;\n}\n\n.slider__thumb--precise:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 14px;\n  left: 50%;\n  width: 2px;\n  height: 7px;\n  background-color: var(--calcite-ui-text-3);\n  margin-left: -1px;\n  margin-top: 7px;\n  z-index: 2;\n}\n\n.slider__thumb:hover.slider__thumb--precise:after,\n.slider__thumb:focus.slider__thumb--precise:after,\n.slider__thumb--active.slider__thumb--precise:after {\n  background-color: var(--calcite-ui-blue-1);\n}\n\n.slider__thumb--precise.slider__thumb--min {\n  margin-top: -2px;\n}\n.slider__thumb--precise.slider__thumb--min .slider__handle__label {\n  bottom: unset;\n  top: 28px;\n}\n\n.slider__thumb--precise.slider__thumb--min:after {\n  top: 0;\n  margin-top: 0;\n}\n\n.slider__track {\n  height: 2px;\n  border-radius: 0;\n  z-index: 2;\n  background-color: var(--calcite-ui-border-2);\n  -webkit-transition: all 250ms ease-in;\n  transition: all 250ms ease-in;\n  position: relative;\n}\n\n.slider__track__range {\n  position: absolute;\n  top: 0;\n  height: 2px;\n  background-color: var(--calcite-ui-blue-1);\n}\n\n.slider__tick {\n  position: absolute;\n  top: -2px;\n  width: 2px;\n  height: 4px;\n  left: var(--calcite-ui-border-1-offset);\n  margin-left: -3px;\n  border: 1px solid var(--calcite-ui-foreground-1);\n  border-right-width: 2px;\n  border-left-width: 2px;\n  background-color: var(--calcite-ui-border-1);\n}\n\n.slider__tick--active {\n  background-color: var(--calcite-ui-blue-1);\n}\n\n.slider__tick__label {\n  position: absolute;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  font-weight: 500;\n  color: var(--calcite-ui-text-3);\n  width: 4em;\n  margin: 14px -2em;\n  text-align: center;\n  display: block;\n  pointer-events: none;\n}\n\n.slider__tick__label--min {\n  left: 0;\n  margin: 14px -3px;\n  text-align: left;\n}\n\n.slider__tick__label--max {\n  left: unset;\n  right: 0;\n  margin: 14px -3px;\n  text-align: right;\n}"; }
};

export { CalciteSlider as calcite_slider };
