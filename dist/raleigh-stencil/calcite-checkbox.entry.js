import { r as registerInstance, c as createEvent, h, H as Host, B as Build, d as getElement } from './core-17370b86.js';
import { S as SPACE, a as ENTER } from './keys-ed140d96.js';

const CalciteCheckbox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** True if the checkbox is initially checked */
        this.checked = false;
        /**
         * True if the checkbox is initially indeterminate,
         * which is independent from its checked state
         * https://css-tricks.com/indeterminate-checkboxes/
         * */
        this.indeterminate = false;
        /** The name of the checkbox input */
        this.name = "";
        /** The value of the checkbox input */
        this.value = "";
        /** Size of the checkbox  */
        this.size = null;
        /** True if the checkbox is disabled */
        this.disabled = false;
        this.toggle = () => {
            if (!this.disabled) {
                this.checked = !this.checked;
                this.indeterminate = false;
            }
        };
        this.indeterminatePath = "M4 7h8v2H4z";
        this.checkedPath = "M12.753 3l-7.319 7.497L3.252 8.31 2 9.373l3.434 3.434L14 4.24z";
        this.getPath = () => this.indeterminate
            ? this.indeterminatePath
            : this.checked
                ? this.checkedPath
                : "";
        this.syncThisToProxyInput = () => {
            this.checked = this.inputProxy.hasAttribute("checked");
            this.name = this.inputProxy.name;
            this.value = this.inputProxy.value;
        };
        this.syncProxyInputToThis = () => {
            this.checked
                ? this.inputProxy.setAttribute("checked", "")
                : this.inputProxy.removeAttribute("checked");
            this.inputProxy.name = this.name;
            this.inputProxy.value = this.value;
        };
        this.calciteCheckboxChange = createEvent(this, "calciteCheckboxChange", 7);
    }
    onClick({ target }) {
        // prevent duplicate click events that occur
        // when the component is wrapped in a label and checkbox is clicked
        if ((this.el.closest("label") && target === this.inputProxy) ||
            (!this.el.closest("label") && target === this.el)) {
            this.toggle();
        }
    }
    keyDownHandler(e) {
        if (e.keyCode === SPACE || e.keyCode === ENTER) {
            e.preventDefault();
            this.toggle();
        }
    }
    checkedWatcher() {
        this.calciteCheckboxChange.emit();
        this.checked
            ? this.inputProxy.setAttribute("checked", "")
            : this.inputProxy.removeAttribute("checked");
    }
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
        return (h(Host, { role: "checkbox", "aria-checked": this.checked.toString(), tabindex: this.disabled ? "-1" : "0" }, h("svg", { class: "check-svg", viewBox: "0 0 16 16" }, h("path", { d: this.getPath(), fill: "white" })), h("slot", null)));
    }
    setupProxyInput() {
        // check for a proxy input
        this.inputProxy = this.el.querySelector("input");
        // if the user didn't pass a proxy input create one for them
        if (!this.inputProxy) {
            this.inputProxy = document.createElement("input");
            this.inputProxy.type = "checkbox";
            this.syncProxyInputToThis();
            this.el.appendChild(this.inputProxy);
        }
        this.syncThisToProxyInput();
        if (Build.isBrowser) {
            this.observer = new MutationObserver(this.syncThisToProxyInput);
            this.observer.observe(this.inputProxy, { attributes: true });
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "checked": ["checkedWatcher"]
    }; }
    static get style() { return ":host([hidden]) {\n  display: none;\n}\n\n::slotted(input) {\n  display: none;\n}\n\n:host {\n  display: inline-block;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n:host .check-svg {\n  outline-offset: 0;\n  outline-color: transparent;\n  -webkit-transition: outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;\n  transition: outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;\n}\n\n:host(:focus) .check-svg {\n  outline: 2px solid var(--calcite-ui-blue-1);\n  outline-offset: 2px;\n}\n\n.check-svg {\n  width: 20px;\n  height: 20px;\n  overflow: hidden;\n  display: inline-block;\n  background-color: white;\n  border: 1px solid #757575;\n  vertical-align: -0.25em;\n  margin-right: 0.25em;\n  pointer-events: none;\n  -webkit-transition: all 150ms linear;\n  transition: all 150ms linear;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:host([theme=dark]) .check-svg {\n  background-color: transparent;\n  border-color: #eaeaea;\n}\n\n:host([theme=dark][disabled]) .check-svg {\n  border-color: #757575;\n  background-color: #2b2b2b;\n}\n\n:host([theme=dark][checked]) .check-svg,\n:host([theme=dark][indeterminate]) .check-svg {\n  background-color: #3db8ff;\n}\n\n:host([size=large]) .check-svg {\n  width: 24px;\n  height: 24px;\n}\n\n:host([size=small]) .check-svg {\n  width: 16px;\n  height: 16px;\n}\n\n:host([disabled]) {\n  pointer-events: none;\n  cursor: default;\n}\n:host([disabled]) .check-svg {\n  background-color: #f3f3f3;\n  border-color: #eaeaea;\n}\n\n:host([disabled][checked]) .check-svg,\n:host([disabled][indeterminate]) .check-svg {\n  background-color: #84c1e8;\n  border-color: #84c1e8;\n}\n\n:host([checked]) .check-svg,\n:host([indeterminate]) .check-svg {\n  background-color: #007ac2;\n  border: 1px solid #007ac2;\n}\n\n:host(:hover),\n:host(:focus) {\n  outline: none;\n}"; }
};

export { CalciteCheckbox as calcite_checkbox };
