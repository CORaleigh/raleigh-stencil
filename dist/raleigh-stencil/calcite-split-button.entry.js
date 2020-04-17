import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './core-17370b86.js';
import { g as getElementDir } from './dom-21b0c18b.js';

const CalciteButtonWithDropdown = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** specify the color of the control, defaults to blue */
        this.color = "blue";
        /** select theme (light or dark), defaults to light */
        this.theme = "light";
        /** specify the scale of the control, defaults to m */
        this.scale = "m";
        /** specify the icon used for the dropdown menu, defaults to chevron */
        this.dropdownIconType = "chevron";
        /** optionally add a calcite-loader component to the control,
          disabling interaction. with the primary button */
        this.loading = false;
        this.calciteSplitButtonPrimaryClickHandler = (e) => this.calciteSplitButtonPrimaryClick.emit(e);
        this.calciteSplitButtonPrimaryClick = createEvent(this, "calciteSplitButtonPrimaryClick", 7);
    }
    validateColor() {
        let color = ["blue", "red", "dark", "light"];
        if (!color.includes(this.color))
            this.color = "blue";
    }
    validateScale() {
        let scale = ["xs", "s", "m", "l", "xl"];
        if (!scale.includes(this.scale))
            this.scale = "m";
    }
    validateTheme() {
        let theme = ["dark", "light"];
        if (!theme.includes(this.theme))
            this.theme = "light";
    }
    validateDropdownIconType() {
        let dropdownIconType = ["chevron", "caret"];
        if (!dropdownIconType.includes(this.dropdownIconType))
            this.dropdownIconType = "chevron";
    }
    connectedCallback() {
        this.validateColor();
        this.validateScale();
        this.validateTheme();
        this.validateDropdownIconType();
    }
    render() {
        const dir = getElementDir(this.el);
        return (h(Host, { dir: dir }, h("div", { class: "split-button__container" }, h("calcite-button", { "aria-label": this.primaryLabel, color: this.color, scale: this.buttonScale, loading: this.loading, icon: this.primaryIcon, iconPosition: "start", disabled: this.disabled, theme: this.theme, onClick: this.calciteSplitButtonPrimaryClickHandler }, this.primaryText), h("div", { class: "split-button__divider-container" }, h("div", { class: "split-button__divider" })), h("calcite-dropdown", { alignment: "end", dir: dir, theme: this.theme, scale: this.dropdownScale, width: this.dropdownScale }, h("calcite-button", { "aria-label": this.dropdownLabel, slot: "dropdown-trigger", scale: this.buttonScale, color: this.color, disabled: this.disabled, theme: this.theme, icon: this.dropdownIcon }), h("slot", null)))));
    }
    get dropdownIcon() {
        return this.dropdownIconType === "chevron" ? "chevronDown" : "caretDown";
    }
    get buttonScale() {
        const scaleLookup = {
            s: "xs",
            m: "s",
            l: "m",
        };
        return scaleLookup[this.scale];
    }
    get dropdownScale() {
        const scaleLookup = {
            s: "s",
            m: "s",
            l: "m",
        };
        return scaleLookup[this.scale];
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "color": ["validateColor"],
        "scale": ["validateScale"],
        "theme": ["validateTheme"],
        "dropdownIconType": ["validateDropdownIconType"]
    }; }
    static get style() { return ":host([hidden]) {\n  display: none;\n}\n\n:host {\n  --calcite-button-light: #eaeaea;\n  --calcite-button-light-text: #151515;\n  --calcite-button-dark: #404040;\n  --calcite-button-dark-text: #0b0b0b;\n}\n:host .split-button__container {\n  display: -ms-flexbox;\n  display: flex;\n}\n:host .split-button__container > calcite-dropdown > calcite-button {\n  height: 100%;\n}\n\n:host([color=blue]) .split-button__divider-container {\n  background-color: var(--calcite-ui-blue-1);\n}\n:host([color=blue]):host([theme=dark]) .split-button__divider {\n  background-color: var(--calcite-button-dark-text);\n}\n\n:host([color=red]) .split-button__divider-container {\n  background-color: var(--calcite-ui-red-1);\n}\n:host([color=red]):host([theme=dark]) .split-button__divider {\n  background-color: var(--calcite-button-dark-text);\n}\n\n:host([color=light]) .split-button__divider-container {\n  background-color: var(--calcite-button-light);\n}\n:host([color=light]) .split-button__divider {\n  background-color: var(--calcite-button-light-text);\n}\n\n:host([color=dark]) .split-button__divider-container {\n  background-color: var(--calcite-button-dark);\n}\n\n:host([disabled]) .split-button__divider-container {\n  opacity: 0.4;\n}\n:host([disabled]) calcite-dropdown > calcite-button {\n  pointer-events: none;\n}\n\n.split-button__divider-container {\n  width: 1px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-transition: all 0.15s ease-in-out;\n  transition: all 0.15s ease-in-out;\n}\n\n.split-button__divider {\n  width: 1px;\n  height: 66.666%;\n  display: inline-block;\n  background-color: white;\n}"; }
};

export { CalciteButtonWithDropdown as calcite_split_button };
