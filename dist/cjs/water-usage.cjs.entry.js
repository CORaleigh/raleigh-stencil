'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-7a9a1188.js');
require('@esri/calcite-components');

class WaterUsageSlider {
    constructor(label, value, max, gallons, ccfunits) {
        this.label = label;
        this.value = value;
        this.max = max;
        this.gallons = gallons;
        this.ccfunits = ccfunits;
    }
}

const WaterUsage = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
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
        return core.h("div", { id: 'waterUsage' }, core.h("h3", null, "Estimate your monthly household water usage"), core.h("h5", null, "To estimate your monthly household water usage, slide the scrollbar next to each question to provide your answer. Calculations update automatically. "), core.h("h4", null, "Showers"), core.h("h5", null, "An average shower uses 5 gallons of water per minute. "), core.h("table", null, core.h("thead", null, core.h("tr", null, core.h("th", { class: "slider" }), core.h("th", null, "Gallons"), core.h("th", null, "CCF Units"))), core.h("tbody", null, core.h("tr", null, core.h("td", { class: "slider" }, core.h("form", null, core.h("label", null, this.shower1.label), core.h("input", { type: "text", value: this.shower1.value, onInput: ev => this.shower1Input(ev) }), core.h("input", { onInput: ev => this.shower1Input(ev), type: "range", min: "0", max: this.shower1.max, value: this.shower1.value, step: "1", "aria-valuemin": "0", "aria-valuemax": this.shower1.max, "aria-valuenow": "0" }))), core.h("td", null, "--"), core.h("td", null, "--")), core.h("tr", null, core.h("td", { class: "slider" }, core.h("form", null, core.h("label", null, this.shower2.label), core.h("input", { type: "text", value: this.shower2.value, onInput: ev => this.shower2Input(ev) }), core.h("input", { onInput: ev => this.shower2Input(ev), type: "range", min: "0", max: this.shower2.max, value: this.shower2.value, step: "1", "aria-valuemin": "0", "aria-valuemax": this.shower2.max, "aria-valuenow": "0" }))), core.h("td", null, Math.round(this.shower2.gallons)), core.h("td", null, this.shower2.ccfunits.toFixed(3))))), core.h("h4", null, "Baths"), core.h("h5", null, "A full-tub bath uses 36 gallons of water; a half-tub bath uses 18 gallons of water. "), core.h("table", null, core.h("thead", null, core.h("tr", null, core.h("th", { class: "slider" }), core.h("th", null, "Gallons"), core.h("th", null, "CCF Units"))), core.h("tbody", null, core.h("tr", null, core.h("td", { class: "slider" }, core.h("form", null, core.h("label", null, this.bath1.label), core.h("input", { type: "text", value: this.bath1.value, onInput: ev => this.bath1Input(ev) }), core.h("input", { onInput: ev => this.bath1Input(ev), type: "range", min: "0", max: this.bath1.max, value: this.bath1.value, step: "1", "aria-valuemin": "0", "aria-valuemax": this.bath1.max, "aria-valuenow": "0" }))), core.h("td", null, Math.round(Math.round(this.bath1.gallons))), core.h("td", null, this.bath1.ccfunits.toFixed(3))), core.h("tr", null, core.h("td", { class: "slider" }, core.h("form", null, core.h("label", null, this.bath2.label), core.h("input", { type: "text", value: this.bath2.value, onInput: ev => this.bath2Input(ev) }), core.h("input", { onInput: ev => this.bath2Input(ev), type: "range", min: "0", max: this.bath2.max, value: this.bath2.value, step: "1", "aria-valuemin": "0", "aria-valuemax": this.bath2.max, "aria-valuenow": "0" }))), core.h("td", null, Math.round(this.bath2.value * 4.33 * 18)), core.h("td", null, this.bath2.ccfunits.toFixed(3))))), core.h("h4", null, "Toilet Flushes"), core.h("h5", null, "The average person flushes 4 times daily, using 3 gallons of water per flush. "), core.h("table", null, core.h("thead", null, core.h("tr", null, core.h("th", { class: "slider" }), core.h("th", null, "Gallons"), core.h("th", null, "CCF Units"))), core.h("tbody", null, core.h("tr", null, core.h("td", { class: "slider" }, core.h("form", null, core.h("label", null, this.toilet.label), core.h("input", { type: "text", value: this.toilet.value, onInput: ev => this.toiletInput(ev) }), core.h("input", { onInput: ev => this.toiletInput(ev), type: "range", min: "0", max: this.toilet.max, value: this.toilet.value, step: "1", "aria-valuemin": "0", "aria-valuemax": this.toilet.max, "aria-valuenow": "0" }))), core.h("td", null, Math.round(this.toilet.value * 30.4 * 12)), core.h("td", null, this.toilet.ccfunits.toFixed(3))))), core.h("h4", null, "Brushing Teeth"), core.h("h5", null, "The average person uses 3 gallons of water each time they brush their teeth. "), core.h("table", null, core.h("thead", null, core.h("tr", null, core.h("th", { class: "slider" }), core.h("th", null, "Gallons"), core.h("th", null, "CCF Units"))), core.h("tbody", null, core.h("tr", null, core.h("td", { class: "slider" }, core.h("form", null, core.h("label", null, this.teeth.label), core.h("input", { type: "text", value: this.teeth.value, onInput: ev => this.teethInput(ev) }), core.h("input", { onInput: ev => this.teethInput(ev), type: "range", min: "0", max: this.teeth.max, value: this.teeth.value, step: "1", "aria-valuemin": "0", "aria-valuemax": this.teeth.max, "aria-valuenow": "0" }))), core.h("td", null, Math.round(this.teeth.gallons)), core.h("td", null, this.teeth.ccfunits.toFixed(3))))), core.h("h4", null, "Shaving"), core.h("h5", null, "The average shave uses 1 gallon of water. "), core.h("table", null, core.h("thead", null, core.h("tr", null, core.h("th", { class: "slider" }), core.h("th", null, "Gallons"), core.h("th", null, "CCF Units"))), core.h("tbody", null, core.h("tr", null, core.h("td", { class: "slider" }, core.h("form", null, core.h("label", null, this.shaving.label), core.h("input", { type: "text", value: this.shaving.value, onInput: ev => this.shavingInput(ev) }), core.h("input", { onInput: ev => this.shavingInput(ev), type: "range", min: "0", max: this.shaving.max, value: this.shaving.value, step: "1", "aria-valuemin": "0", "aria-valuemax": this.shaving.max, "aria-valuenow": "0" }))), core.h("td", null, Math.round(this.shaving.gallons)), core.h("td", null, this.shaving.ccfunits.toFixed(3))))), core.h("h4", null, "Face/Hand Washing"), core.h("h5", null, "Each time you wash your face or hands, approximately 1 gallon of water is used."), core.h("table", null, core.h("thead", null, core.h("tr", null, core.h("th", { class: "slider" }), core.h("th", null, "Gallons"), core.h("th", null, "CCF Units"))), core.h("tbody", null, core.h("tr", null, core.h("td", { class: "slider" }, core.h("form", null, core.h("label", null, this.washing.label), core.h("input", { type: "text", value: this.washing.value, onInput: ev => this.washingInput(ev) }), core.h("input", { onInput: ev => this.washingInput(ev), type: "range", min: "0", max: this.washing.max, value: this.washing.value, step: "1", "aria-valuemin": "0", "aria-valuemax": this.washing.max, "aria-valuenow": "0" }))), core.h("td", null, Math.round(this.washing.gallons)), core.h("td", null, this.washing.ccfunits.toFixed(3))))), core.h("h4", null, "Dishwasher"), core.h("h5", null, "The average dishwasher uses 16 gallons of water per wash."), core.h("table", null, core.h("thead", null, core.h("tr", null, core.h("th", { class: "slider" }), core.h("th", null, "Gallons"), core.h("th", null, "CCF Units"))), core.h("tbody", null, core.h("tr", null, core.h("td", { class: "slider" }, core.h("form", null, core.h("label", null, this.dishwasher.label), core.h("input", { type: "text", value: this.dishwasher.value, onInput: ev => this.dishwasherInput(ev) }), core.h("input", { onInput: ev => this.dishwasherInput(ev), type: "range", min: "0", max: this.dishwasher.max, value: this.dishwasher.value, step: "1", "aria-valuemin": "0", "aria-valuemax": this.dishwasher.max, "aria-valuenow": "0" }))), core.h("td", null, Math.round(this.dishwasher.gallons)), core.h("td", null, this.dishwasher.ccfunits.toFixed(3))))), core.h("h4", null, "Hand-Washing Dishes"), core.h("h5", null, "Hand-washing dishes with water running uses 3 gallons of water per minute."), core.h("table", null, core.h("thead", null, core.h("tr", null, core.h("th", { class: "slider" }), core.h("th", null, "Gallons"), core.h("th", null, "CCF Units"))), core.h("tbody", null, core.h("tr", null, core.h("td", { class: "slider" }, core.h("form", null, core.h("label", null, this.dishes.label), core.h("input", { type: "text", value: this.dishes.value, onInput: ev => this.dishesInput(ev) }), core.h("input", { onInput: ev => this.dishesInput(ev), type: "range", min: "0", max: this.dishes.max, value: this.dishes.value, step: "1", "aria-valuemin": "0", "aria-valuemax": this.dishes.max, "aria-valuenow": "0" }))), core.h("td", null, Math.round(this.dishes.gallons)), core.h("td", null, this.dishes.ccfunits.toFixed(3))))), core.h("h4", null, "Clothes Washer"), core.h("h5", null, "The average washing machine uses 44 gallons of water per load of laundry."), core.h("table", null, core.h("thead", null, core.h("tr", null, core.h("th", { class: "slider" }), core.h("th", null, "Gallons"), core.h("th", null, "CCF Units"))), core.h("tbody", null, core.h("tr", null, core.h("td", { class: "slider" }, core.h("form", null, core.h("label", null, this.clothes.label), core.h("input", { type: "text", value: this.clothes.value, onInput: ev => this.clothesInput(ev) }), core.h("input", { onInput: ev => this.clothesInput(ev), type: "range", min: "0", max: this.clothes.max, value: this.clothes.value, step: "1", "aria-valuemin": "0", "aria-valuemax": this.clothes.max, "aria-valuenow": "0" }))), core.h("td", null, Math.round(this.clothes.gallons)), core.h("td", null, this.clothes.ccfunits.toFixed(3))))), core.h("h4", null, "Outdoor Use"), core.h("h5", null, "When using water outdoors, the average use is 6 gallons of water per minute."), core.h("table", null, core.h("thead", null, core.h("tr", null, core.h("th", { class: "slider" }), core.h("th", null, "Gallons"), core.h("th", null, "CCF Units"))), core.h("tbody", null, core.h("tr", null, core.h("td", { class: "slider" }, core.h("form", null, core.h("label", null, this.outdoor.label), core.h("input", { type: "text", value: this.outdoor.value, onInput: ev => this.outdoorInput(ev) }), core.h("input", { onInput: ev => this.outdoorInput(ev), type: "range", min: "0", max: this.outdoor.max, value: this.outdoor.value, step: "1", "aria-valuemin": "0", "aria-valuemax": this.outdoor.max, "aria-valuenow": "0" }))), core.h("td", null, Math.round(this.outdoor.gallons)), core.h("td", null, this.outdoor.ccfunits.toFixed(3))))), core.h("h4", null, "Dripping faucet"), core.h("h5", null, "A faucet that drips 10 times per minute uses 1 gallon of water per day."), core.h("table", null, core.h("thead", null, core.h("tr", null, core.h("th", { class: "slider" }), core.h("th", null, "Gallons"), core.h("th", null, "CCF Units"))), core.h("tbody", null, core.h("tr", null, core.h("td", { class: "slider" }, core.h("form", null, core.h("label", null, this.dripping.label), core.h("input", { type: "text", value: this.dripping.value, onInput: ev => this.drippingInput(ev) }), core.h("input", { onInput: ev => this.drippingInput(ev), type: "range", min: "0", max: this.dripping.max, value: this.dripping.value, step: "1", "aria-valuemin": "0", "aria-valuemax": this.dripping.max, "aria-valuenow": "0" }))), core.h("td", null, Math.round(this.dripping.gallons)), core.h("td", null, this.dripping.ccfunits.toFixed(3))))), core.h("h4", null, "Leaking toilet"), core.h("h5", null, "A leaking toilet can use 200 or more gallons of water per day."), core.h("table", null, core.h("thead", null, core.h("tr", null, core.h("th", { class: "slider" }), core.h("th", null, "Gallons"), core.h("th", null, "CCF Units"))), core.h("tbody", null, core.h("tr", null, core.h("td", { class: "slider" }, core.h("form", null, core.h("label", null, this.leaking.label), core.h("input", { type: "text", value: this.leaking.value, onInput: ev => this.leakingInput(ev) }), core.h("input", { onInput: ev => this.leakingInput(ev), type: "range", min: "0", max: this.leaking.max, value: this.leaking.value, step: "1", "aria-valuemin": "0", "aria-valuemax": this.leaking.max, "aria-valuenow": "0" }))), core.h("td", null, Math.round(this.leaking.gallons)), core.h("td", null, this.leaking.ccfunits.toFixed(3))))), core.h("h4", null, "Other Indoor Use"), core.h("h5", null, "An average person uses 10 gallons of water per day for other various indoor uses. "), core.h("table", null, core.h("thead", null, core.h("tr", null, core.h("th", { class: "slider" }), core.h("th", null, "Gallons"), core.h("th", null, "CCF Units"))), core.h("tbody", null, core.h("tr", null, core.h("td", { class: "slider" }, core.h("form", null, core.h("label", null, this.indoor.label), core.h("input", { type: "text", value: this.indoor.value, onInput: ev => this.indoorInput(ev) }), core.h("input", { onInput: ev => this.indoorInput(ev), type: "range", min: "0", max: this.indoor.max, value: this.indoor.value, step: "1", "aria-valuemin": "0", "aria-valuemax": this.indoor.max, "aria-valuenow": "0" }))), core.h("td", null, Math.round(this.indoor.gallons)), core.h("td", null, this.indoor.ccfunits.toFixed(3))))), core.h("table", null, core.h("thead", null, core.h("tr", null, core.h("th", { class: "slider" }, "Estimated Monthly Water Usage"), core.h("th", null, Math.round(this.shower2.gallons + this.bath1.gallons + this.bath2.gallons + this.toilet.gallons +
            this.teeth.gallons + this.shaving.gallons + this.washing.gallons + this.dishwasher.gallons +
            this.dishes.gallons + this.clothes.gallons + this.outdoor.gallons + this.dripping.gallons +
            this.leaking.gallons + this.indoor.gallons)), core.h("th", null, (this.shower2.ccfunits + this.bath1.ccfunits + this.bath2.ccfunits + this.toilet.ccfunits +
            this.teeth.ccfunits + this.shaving.ccfunits + this.washing.ccfunits + this.dishwasher.ccfunits +
            this.dishes.ccfunits + this.clothes.ccfunits + this.outdoor.ccfunits + this.dripping.ccfunits +
            this.leaking.ccfunits + this.indoor.ccfunits).toFixed(3))))), core.h("div", { class: "paragraph" }, "Water bills are calculated using CCF units. ", core.h("br", null), "A CCF unit represents 100 cubic feet. One CCF equals 748 gallons."));
    }
    static get style() { return "\@import url(\"https://js.arcgis.com/4.13/esri/themes/light/main.css\");\@import url(\"https://s3-us-west-1.amazonaws.com/patterns.esri.com/files/calcite-web/1.2.5/css/calcite-web.min.css\");input[type=text]{float:left;width:80px}input[type=range]{float:right;width:calc(100% - 80px - 1em)}\@media (max-width:37.5em){input[type=text]{float:none;width:80px}input[type=range]{float:none;width:100%}}input:hover{border-color:#046a38!important}form{margin-bottom:3em}label{margin:0}td.slider,th.slider{width:75%;text-align:left}td,th{width:12.5%;text-align:center}table{width:100%}#waterUsage{margin:0 1em 0 1em}"; }
};

exports.water_usage = WaterUsage;
