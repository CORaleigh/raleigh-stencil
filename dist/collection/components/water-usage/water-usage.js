import { h } from "@stencil/core";
import { WaterUsageSlider } from './water-usage-slider';
export class WaterUsage {
    constructor() {
        this.currentIndex = { index: 0 };
        this.shower1 = new WaterUsageSlider("How many minutes does the average shower last in your household?", 0, 30, 0, 0);
        this.shower2 = new WaterUsageSlider("How many showers are taken each week in your household?", 0, 50, 0, 0);
        this.bath1 = new WaterUsageSlider("How many full-tub baths are taken each week in your household?", 0, 50, 0, 0);
        this.bath2 = new WaterUsageSlider("How many half-tub baths are taken each week in your household?", 0, 50, 0, 0);
        this.toilet = new WaterUsageSlider("How many people are in your household?", 0, 25, 0, 0);
        this.teeth = new WaterUsageSlider("How many times per day does each person brush their teeth?", 0, 10, 0, 0);
        this.shaving = new WaterUsageSlider("How many times per week does someone shave in your household?", 0, 75, 0, 0);
        this.washing = new WaterUsageSlider("How many times are face or hands washed per day in your household?", 0, 100, 0, 0);
        this.dishwasher = new WaterUsageSlider("How many times per week is the dishwasher run in your household?", 0, 25, 0, 0);
        this.dishes = new WaterUsageSlider("How many minutes each day do you run water while hand-washing dishes?", 0, 60, 0, 0);
        this.clothes = new WaterUsageSlider("How many loads of laundry are washed per week?", 0, 25, 0, 0);
        this.outdoor = new WaterUsageSlider("How many minutes per week does your household use water outdoors?", 0, 500, 0, 0);
        this.dripping = new WaterUsageSlider("How many faucets are dripping in your household?", 0, 10, 0, 0);
        this.leaking = new WaterUsageSlider("How many toilets are leaking in your household?", 0, 5, 0, 0);
        this.indoor = new WaterUsageSlider("Based on the number of people in your household (as answered above)", 0, 50, 0, 0);
        this.sliders = [
            this.shower1,
            this.shower2,
            this.bath1,
            this.bath2,
            this.toilet,
            this.teeth,
            this.shaving,
            this.washing,
            this.dishwasher,
            this.dishes,
            this.clothes,
            this.outdoor,
            this.dripping,
            this.leaking,
            this.indoor
        ];
    }
    shower1Input(event) {
        this.shower1 = Object.assign(Object.assign({}, this.shower1), { value: event.target.value });
        this.shower2 = Object.assign(Object.assign({}, this.shower2), { gallons: this.shower1.value * this.shower2.value * 4.33 * 5 });
        this.shower2 = Object.assign(Object.assign({}, this.shower2), { ccfunits: this.shower2.gallons / 748 });
    }
    shower2Input(event) {
        this.shower2 = Object.assign(Object.assign({}, this.shower2), { value: event.target.value });
        this.shower2 = Object.assign(Object.assign({}, this.shower2), { gallons: this.shower1.value * this.shower2.value * 4.33 * 5 });
        this.shower2 = Object.assign(Object.assign({}, this.shower2), { ccfunits: this.shower2.gallons / 748 });
    }
    bath1Input(event) {
        this.bath1 = Object.assign(Object.assign({}, this.bath1), { value: event.target.value, gallons: event.target.value * 4.33 * 36 });
        this.bath1 = Object.assign(Object.assign({}, this.bath1), { ccfunits: this.bath1.gallons / 748 });
    }
    bath2Input(event) {
        this.bath2 = Object.assign(Object.assign({}, this.bath2), { value: event.target.value, gallons: event.target.value * 4.33 * 18 });
        this.bath2 = Object.assign(Object.assign({}, this.bath2), { ccfunits: this.bath2.gallons / 748 });
    }
    toiletInput(event) {
        this.toilet = Object.assign(Object.assign({}, this.toilet), { value: event.target.value, gallons: event.target.value * 30.4 * 12 });
        this.toilet = Object.assign(Object.assign({}, this.toilet), { ccfunits: this.toilet.gallons / 748 });
        this.teeth = Object.assign(Object.assign({}, this.teeth), { gallons: event.target.value * this.teeth.value * 30.4 * 3 });
        this.teeth = Object.assign(Object.assign({}, this.teeth), { ccfunits: this.teeth.gallons / 748 });
        this.indoor = Object.assign(Object.assign({}, this.toilet), { value: event.target.value });
    }
    teethInput(event) {
        this.teeth = Object.assign(Object.assign({}, this.teeth), { value: event.target.value, gallons: event.target.value * this.toilet.value * 30.4 * 3 });
        this.teeth = Object.assign(Object.assign({}, this.teeth), { ccfunits: this.teeth.gallons / 748 });
    }
    shavingInput(event) {
        this.shaving = Object.assign(Object.assign({}, this.shaving), { value: event.target.value, gallons: event.target.value * 4.33 });
        this.shaving = Object.assign(Object.assign({}, this.shaving), { ccfunits: this.shaving.gallons / 748 });
    }
    washingInput(event) {
        this.washing = Object.assign(Object.assign({}, this.washing), { value: event.target.value, gallons: event.target.value * 30.4 });
        this.washing = Object.assign(Object.assign({}, this.washing), { ccfunits: this.washing.gallons / 748 });
    }
    dishwasherInput(event) {
        this.dishwasher = Object.assign(Object.assign({}, this.dishwasher), { value: event.target.value, gallons: event.target.value * 16 * 4.33 });
        this.dishwasher = Object.assign(Object.assign({}, this.dishwasher), { ccfunits: this.dishwasher.gallons / 748 });
    }
    dishesInput(event) {
        this.dishes = Object.assign(Object.assign({}, this.dishes), { value: event.target.value, gallons: event.target.value * 3 * 30.4 });
        this.dishes = Object.assign(Object.assign({}, this.dishes), { ccfunits: this.dishes.gallons / 748 });
    }
    clothesInput(event) {
        this.clothes = Object.assign(Object.assign({}, this.clothes), { value: event.target.value, gallons: event.target.value * 44 * 4.33 });
        this.clothes = Object.assign(Object.assign({}, this.clothes), { ccfunits: this.clothes.gallons / 748 });
    }
    outdoorInput(event) {
        this.outdoor = Object.assign(Object.assign({}, this.outdoor), { value: event.target.value, gallons: event.target.value * 6 * 4.33 });
        this.outdoor = Object.assign(Object.assign({}, this.outdoor), { ccfunits: this.outdoor.gallons / 748 });
    }
    drippingInput(event) {
        this.dripping = Object.assign(Object.assign({}, this.dripping), { value: event.target.value, gallons: event.target.value * 1 * 30.4 });
        this.dripping = Object.assign(Object.assign({}, this.dripping), { ccfunits: this.dripping.gallons / 748 });
    }
    leakingInput(event) {
        this.leaking = Object.assign(Object.assign({}, this.leaking), { value: event.target.value, gallons: event.target.value * 200 * 30.4 });
        this.leaking = Object.assign(Object.assign({}, this.leaking), { ccfunits: this.leaking.gallons / 748 });
    }
    indoorInput(event) {
        this.indoor = Object.assign(Object.assign({}, this.indoor), { value: event.target.value, gallons: event.target.value * 30.4 * 10 });
        this.indoor = Object.assign(Object.assign({}, this.indoor), { ccfunits: this.indoor.gallons / 748 });
    }
    disconnectedCallback() {
        document.getElementById('councilDiv').innerHTML = '';
    }
    render() {
        return h("div", { id: 'waterUsage' },
            h("div", { class: (this.currentIndex.index === 0 ? ' active' : ' inactive') },
                h("h2", { class: "title t-forest" }, "Showers"),
                h("div", { class: "container" },
                    "An average shower uses 5 gallons of water per minute.",
                    h("label", null, this.shower1.label),
                    h("div", { class: "questions" },
                        h("div", { class: "inputs" },
                            h("input", { type: "range", onInput: ev => this.shower1Input(ev), onChange: ev => this.shower1Input(ev), min: "0", max: this.shower1.max, value: this.shower1.value, step: "1", "aria-valuemin": "0", "aria-valuemax": this.shower1.max, "aria-valuenow": "0" }),
                            h("input", { type: "number", min: "0", max: this.shower1.max, value: this.shower1.value, onInput: ev => this.shower1Input(ev) })),
                        h("div", { class: "totals" },
                            h("div", { class: "total" }),
                            h("div", { class: "total" }))),
                    h("label", null, this.shower2.label),
                    h("div", { class: "questions" },
                        h("div", { class: "inputs" },
                            h("input", { type: "range", onInput: ev => this.shower2Input(ev), onChange: ev => this.shower2Input(ev), min: "0", max: this.shower2.max, value: this.shower2.value, step: "1", "aria-valuemin": "0", "aria-valuemax": this.shower2.max, "aria-valuenow": "0" }),
                            h("input", { type: "number", min: "0", max: this.shower2.max, value: this.shower2.value, onInput: ev => this.shower2Input(ev) })),
                        h("div", { class: "totals" },
                            h("div", { class: "total" },
                                Math.round(this.shower2.gallons).toLocaleString(),
                                " gallons"),
                            h("div", { class: "total" },
                                this.shower2.ccfunits.toFixed(3),
                                " CCF"))))),
            h("div", { class: (this.currentIndex.index === 1 ? ' active' : ' inactive') },
                h("h2", { class: "title t-forest" }, "Baths"),
                h("div", { class: "container" },
                    "A full-tub bath uses 36 gallons of water; a half-tub bath uses 18 gallons of water.    ",
                    h("label", null, this.bath1.label),
                    h("div", { class: "questions" },
                        h("div", { class: "inputs" },
                            h("inp", { type: "range", onInput: ev => this.bath1Input(ev), onChange: ev => this.bath1Input(ev), min: "0", max: this.bath1.max, value: this.bath1.value, step: "1", "aria-valuemin": "0", "aria-valuemax": this.bath1.max, "aria-valuenow": "0" }),
                            h("input", { type: "number", min: "0", max: this.bath1.max, value: this.bath1.value, onInput: ev => this.bath1Input(ev) })),
                        h("div", { class: "totals" },
                            h("div", { class: "total" },
                                Math.round(Math.round(this.bath1.gallons)).toLocaleString(),
                                " gallons"),
                            h("div", { class: "total" },
                                this.bath1.ccfunits.toFixed(3),
                                " CCF"))),
                    h("label", null, this.bath2.label),
                    h("div", { class: "questions" },
                        h("div", { class: "inputs" },
                            h("inp", { type: "range", onInput: ev => this.bath2Input(ev), onChange: ev => this.bath2Input(ev), min: "0", max: this.bath2.max, value: this.bath2.value, step: "1", "aria-valuemin": "0", "aria-valuemax": this.bath2.max, "aria-valuenow": "0" }),
                            h("input", { type: "number", min: "0", max: this.bath2.max, value: this.bath2.value, onInput: ev => this.bath2Input(ev) })),
                        h("div", { class: "totals" },
                            h("div", { class: "total" },
                                Math.round(Math.round(this.bath2.gallons)).toLocaleString(),
                                " gallons            "),
                            h("div", { class: "total" },
                                this.bath2.ccfunits.toFixed(3),
                                " CCF"))))),
            h("div", { class: (this.currentIndex.index === 2 ? ' active' : ' inactive') },
                h("h2", { class: "title t-forest" }, "Toilet Flushes"),
                h("div", { class: "container" },
                    "The average person flushes 4 times daily, using 3 gallons of water per flush.     ",
                    h("label", null, this.toilet.label),
                    h("div", { class: "questions" },
                        h("div", { class: "inputs" },
                            h("inpu", { type: "range", onInput: ev => this.toiletInput(ev), onChange: ev => this.toiletInput(ev), min: "0", max: this.toilet.max, value: this.toilet.value, step: "1", "aria-valuemin": "0", "aria-valuemax": this.toilet.max, "aria-valuenow": "0" }),
                            h("input", { type: "number", min: "0", max: this.toilet.max, value: this.toilet.value, onInput: ev => this.toiletInput(ev) })),
                        h("div", { class: "totals" },
                            h("div", { class: "total" },
                                Math.round(this.toilet.value * 30.4 * 12).toLocaleString(),
                                " gallons"),
                            h("div", { class: "total" },
                                this.toilet.ccfunits.toFixed(3),
                                " CCF"))))),
            h("div", { class: (this.currentIndex.index === 3 ? ' active' : ' inactive') },
                h("h2", { class: "title t-forest" }, "Brushing Teeth"),
                h("div", { class: "container" },
                    "The average person uses 3 gallons of water each time they brush their teeth.",
                    h("label", null, this.teeth.label),
                    h("div", { class: "questions" },
                        h("div", { class: "inputs" },
                            h("inp", { type: "range", onInput: ev => this.teethInput(ev), onChange: ev => this.teethInput(ev), min: "0", max: this.teeth.max, value: this.teeth.value, step: "1", "aria-valuemin": "0", "aria-valuemax": this.teeth.max, "aria-valuenow": "0" }),
                            h("input", { type: "number", min: "0", max: this.teeth.max, value: this.teeth.value, onInput: ev => this.teethInput(ev) })),
                        h("div", { class: "totals" },
                            h("div", { class: "total" },
                                Math.round(this.teeth.gallons).toLocaleString(),
                                " gallons"),
                            h("div", { class: "total" },
                                this.teeth.ccfunits.toFixed(3),
                                " CCF"))))),
            h("div", { class: (this.currentIndex.index === 4 ? ' active' : ' inactive') },
                h("h2", { class: "title t-forest" }, "Shaving"),
                h("div", { class: "container" },
                    "The average shave uses 1 gallon of water.",
                    h("label", null, this.shaving.label),
                    h("div", { class: "questions" },
                        h("div", { class: "inputs" },
                            h("input", { type: "range", onInput: ev => this.shavingInput(ev), onChange: ev => this.shavingInput(ev), min: "0", max: this.shaving.max, value: this.shaving.value, step: "1", "aria-valuemin": "0", "aria-valuemax": this.shaving.max, "aria-valuenow": "0" }),
                            h("input", { type: "number", min: "0", max: this.shaving.max, value: this.shaving.value, onInput: ev => this.shavingInput(ev) })),
                        h("div", { class: "totals" },
                            h("div", { class: "total" },
                                Math.round(this.shaving.gallons).toLocaleString(),
                                " gallons"),
                            h("div", { class: "total" },
                                this.shaving.ccfunits.toFixed(3),
                                " CCF"))))),
            h("div", { class: (this.currentIndex.index === 5 ? ' active' : ' inactive') },
                h("h2", { class: "title t-forest" }, "Face/Hand Washing"),
                h("div", { class: "container" },
                    "Each time you wash your face or hands, approximately 1 gallon of water is used.    ",
                    h("label", null, this.washing.label),
                    h("div", { class: "questions" },
                        h("div", { class: "inputs" },
                            h("input", { type: "range", onInput: ev => this.washingInput(ev), onChange: ev => this.washingInput(ev), min: "0", max: this.washing.max, value: this.washing.value, step: "1", "aria-valuemin": "0", "aria-valuemax": this.washing.max, "aria-valuenow": "0" }),
                            h("input", { type: "number", min: "0", max: this.washing.max, value: this.washing.value, onInput: ev => this.washingInput(ev) })),
                        h("div", { class: "totals" },
                            h("div", { class: "total" },
                                Math.round(this.washing.gallons).toLocaleString(),
                                " gallons"),
                            h("div", { class: "total" },
                                this.washing.ccfunits.toFixed(3),
                                " CCF"))))),
            h("div", { class: (this.currentIndex.index === 6 ? ' active' : ' inactive') },
                h("h2", { class: "title t-forest" }, "Dishwasher"),
                h("div", { class: "container" },
                    "The average dishwasher uses 16 gallons of water per wash.",
                    h("label", null, this.dishwasher.label),
                    h("div", { class: "questions" },
                        h("div", { class: "inputs" },
                            h("input", { type: "range", onInput: ev => this.dishwasherInput(ev), onChange: ev => this.dishwasherInput(ev), min: "0", max: this.dishwasher.max, value: this.dishwasher.value, step: "1", "aria-valuemin": "0", "aria-valuemax": this.dishwasher.max, "aria-valuenow": "0" }),
                            h("input", { type: "number", min: "0", max: this.dishwasher.max, value: this.dishwasher.value, onInput: ev => this.dishwasherInput(ev) })),
                        h("div", { class: "totals" },
                            h("div", { class: "total" },
                                Math.round(this.dishwasher.gallons).toLocaleString(),
                                " gallons"),
                            h("div", { class: "total" },
                                this.dishwasher.ccfunits.toFixed(3),
                                " CCF"))))),
            h("div", { class: (this.currentIndex.index === 7 ? ' active' : ' inactive') },
                h("h2", { class: "title t-forest" }, "Hand-Washing Dishes"),
                h("div", { class: "container" },
                    "Hand-washing dishes with water running uses 3 gallons of water per minute.",
                    h("label", null, this.dishes.label),
                    h("div", { class: "questions" },
                        h("div", { class: "inputs" },
                            h("inpu", { type: "range", onInput: ev => this.dishesInput(ev), onChange: ev => this.dishesInput(ev), min: "0", max: this.dishes.max, value: this.dishes.value, step: "1", "aria-valuemin": "0", "aria-valuemax": this.dishes.max, "aria-valuenow": "0" }),
                            h("input", { type: "number", min: "0", max: this.dishes.max, value: this.dishes.value, onInput: ev => this.dishesInput(ev) })),
                        h("div", { class: "totals" },
                            h("div", { class: "total" },
                                Math.round(this.dishes.gallons).toLocaleString(),
                                " gallons"),
                            h("div", { class: "total" },
                                this.dishes.ccfunits.toFixed(3),
                                " CCF"))))),
            h("div", { class: (this.currentIndex.index === 8 ? ' active' : ' inactive') },
                h("h2", { class: "title t-forest" }, "Clothes Washer"),
                h("div", { class: "container" },
                    "The average washing machine uses 44 gallons of water per load of laundry.",
                    h("label", null, this.clothes.label),
                    h("div", { class: "questions" },
                        h("div", { class: "inputs" },
                            h("input", { type: "range", onInput: ev => this.clothesInput(ev), onChange: ev => this.clothesInput(ev), min: "0", max: this.clothes.max, value: this.clothes.value, step: "1", "aria-valuemin": "0", "aria-valuemax": this.clothes.max, "aria-valuenow": "0" }),
                            h("input", { type: "number", min: "0", max: this.clothes.max, value: this.clothes.value, onInput: ev => this.clothesInput(ev) })),
                        h("div", { class: "totals" },
                            h("div", { class: "total" },
                                Math.round(this.clothes.gallons).toLocaleString(),
                                " gallons"),
                            h("div", { class: "total" },
                                this.clothes.ccfunits.toFixed(3),
                                " CCF"))))),
            h("div", { class: (this.currentIndex.index === 9 ? ' active' : ' inactive') },
                h("h2", { class: "title t-forest" }, "Outdoor Use"),
                h("div", { class: "container" },
                    "When using water outdoors, the average use is 6 gallons of water per minute.        ",
                    h("label", null, this.outdoor.label),
                    h("div", { class: "questions" },
                        h("div", { class: "inputs" },
                            h("input", { type: "range", onInput: ev => this.outdoorInput(ev), onChange: ev => this.outdoorInput(ev), min: "0", max: this.outdoor.max, value: this.outdoor.value, step: "1", "aria-valuemin": "0", "aria-valuemax": this.outdoor.max, "aria-valuenow": "0" }),
                            h("input", { type: "number", min: "0", max: this.outdoor.max, value: this.outdoor.value, onInput: ev => this.outdoorInput(ev) })),
                        h("div", { class: "totals" },
                            h("div", { class: "total" },
                                Math.round(this.outdoor.gallons).toLocaleString(),
                                " gallons"),
                            h("div", { class: "total" },
                                this.outdoor.ccfunits.toFixed(3),
                                " CCF"))))),
            h("div", { class: (this.currentIndex.index === 10 ? ' active' : ' inactive') },
                h("h2", { class: "title t-forest" }, "Dripping faucet"),
                h("div", { class: "container" },
                    "A faucet that drips 10 times per minute uses 1 gallon of water per day.",
                    h("label", null, this.dripping.label),
                    h("div", { class: "questions" },
                        h("div", { class: "inputs" },
                            h("input", { type: "range", onInput: ev => this.drippingInput(ev), onChange: ev => this.drippingInput(ev), min: "0", max: this.dripping.max, value: this.dripping.value, step: "1", "aria-valuemin": "0", "aria-valuemax": this.dripping.max, "aria-valuenow": "0" }),
                            h("input", { type: "number", min: "0", max: this.dripping.max, value: this.dripping.value, onInput: ev => this.drippingInput(ev) })),
                        h("div", { class: "totals" },
                            h("div", { class: "total" },
                                Math.round(this.dripping.gallons).toLocaleString(),
                                " gallons"),
                            h("div", { class: "total" },
                                this.dripping.ccfunits.toFixed(3),
                                " CCF"))))),
            h("div", { class: (this.currentIndex.index === 11 ? ' active' : ' inactive') },
                h("h2", { class: "title t-forest" }, "Leaking toilet"),
                h("div", { class: "container" },
                    "A leaking toilet can use 200 or more gallons of water per day.",
                    h("label", null, this.leaking.label),
                    h("div", { class: "questions" },
                        h("div", { class: "inputs" },
                            h("input", { type: "range", onInput: ev => this.leakingInput(ev), onChange: ev => this.leakingInput(ev), min: "0", max: this.leaking.max, value: this.leaking.value, step: "1", "aria-valuemin": "0", "aria-valuemax": this.leaking.max, "aria-valuenow": "0" }),
                            h("input", { type: "number", min: "0", max: this.leaking.max, value: this.leaking.value, onInput: ev => this.leakingInput(ev) })),
                        h("div", { class: "totals" },
                            h("div", { class: "total" },
                                Math.round(this.leaking.gallons).toLocaleString(),
                                " gallons"),
                            h("div", { class: "total" },
                                this.leaking.ccfunits.toFixed(3),
                                " CCF"))))),
            h("div", { class: (this.currentIndex.index === 12 ? ' active' : ' inactive') },
                h("h2", { class: "title t-forest" }, "Other Indoor Use"),
                h("div", { class: "container" },
                    "An average person uses 10 gallons of water per day for other various indoor uses.",
                    h("label", null, this.indoor.label),
                    h("div", { class: "questions" },
                        h("div", { class: "inputs" },
                            h("input", { type: "range", onInput: ev => this.indoorInput(ev), onChange: ev => this.indoorInput(ev), disabled: true, min: "0", max: this.indoor.max, value: this.indoor.value, step: "1", "aria-valuemin": "0", "aria-valuemax": this.indoor.max, "aria-valuenow": "0" }),
                            h("input", { disabled: true, type: "number", min: "0", max: this.indoor.max, value: this.indoor.value, onInput: ev => this.indoorInput(ev) })),
                        h("div", { class: "totals" },
                            h("div", { class: "total" },
                                Math.round(this.indoor.gallons).toLocaleString(),
                                " gallons"),
                            h("div", { class: "total" },
                                this.indoor.ccfunits.toFixed(3),
                                " CCF"))))),
            h("div", { class: "container" },
                h("button", { onClick: () => this.currentIndex = Object.assign(Object.assign({}, this.currentIndex), { index: this.currentIndex.index -= 1 }), class: (this.currentIndex.index != 0 ? 'button back ' : ' hidden button back') }, "Previous"),
                h("button", { onClick: () => this.currentIndex = Object.assign(Object.assign({}, this.currentIndex), { index: this.currentIndex.index += 1 }), class: (this.currentIndex.index != 12 ? 'button next ' : ' hidden button back') }, "Next")),
            h("div", { class: "results" },
                h("h5", null, "Total Monthly Water Usage"),
                h("div", { class: "totals" },
                    h("div", { class: "total" },
                        Math.round(this.shower2.gallons + this.bath1.gallons + this.bath2.gallons + this.toilet.gallons +
                            this.teeth.gallons + this.shaving.gallons + this.washing.gallons + this.dishwasher.gallons +
                            this.dishes.gallons + this.clothes.gallons + this.outdoor.gallons + this.dripping.gallons +
                            this.leaking.gallons + this.indoor.gallons).toLocaleString().toLocaleString(),
                        " Gallons"),
                    h("div", { class: "total" },
                        (this.shower2.ccfunits + this.bath1.ccfunits + this.bath2.ccfunits + this.toilet.ccfunits +
                            this.teeth.ccfunits + this.shaving.ccfunits + this.washing.ccfunits + this.dishwasher.ccfunits +
                            this.dishes.ccfunits + this.clothes.ccfunits + this.outdoor.ccfunits + this.dripping.ccfunits +
                            this.leaking.ccfunits + this.indoor.ccfunits).toFixed(3),
                        " CCF"))));
    }
    static get is() { return "water-usage"; }
    static get originalStyleUrls() { return {
        "$": ["water-usage.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["water-usage.css"]
    }; }
    static get states() { return {
        "currentIndex": {},
        "shower1": {},
        "shower2": {},
        "bath1": {},
        "bath2": {},
        "toilet": {},
        "teeth": {},
        "shaving": {},
        "washing": {},
        "dishwasher": {},
        "dishes": {},
        "clothes": {},
        "outdoor": {},
        "dripping": {},
        "leaking": {},
        "indoor": {},
        "sliders": {}
    }; }
}
