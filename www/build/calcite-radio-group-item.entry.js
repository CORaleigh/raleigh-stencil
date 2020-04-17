import { r as registerInstance, c as createEvent, B as Build, h, H as Host, d as getElement } from './core-17370b86.js';
import { a as getElementProp } from './dom-21b0c18b.js';

const CalciteRadioGroupItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /**
         * Indicates whether the control is checked.
         */
        this.checked = false;
        this.mutationObserver = this.getMutationObserver();
        this.calciteRadioGroupItemChange = createEvent(this, "calciteRadioGroupItemChange", 7);
    }
    handleCheckedChange() {
        this.calciteRadioGroupItemChange.emit();
        this.syncToExternalInput();
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        let inputProxy = this.el.querySelector(`input[slot="input"]`);
        if (inputProxy) {
            this.value = inputProxy.value;
            this.checked = inputProxy.checked;
            if (Build.isBrowser) {
                this.mutationObserver.observe(inputProxy, { attributes: true });
            }
        }
        this.inputProxy = inputProxy;
    }
    disconnectedCallback() {
        this.mutationObserver.disconnect();
    }
    componentDidLoad() {
        // only use default slot content in browsers that support shadow dom
        // or if ie11 has no label provided (#374)
        const label = this.el.querySelector("label");
        this.useFallback = !label || label.textContent === "";
    }
    render() {
        const { checked, useFallback, value } = this;
        const scale = getElementProp(this.el, "scale", "m");
        return (h(Host, { role: "radio", "aria-checked": checked.toString(), scale: scale }, h("label", null, h("slot", null, useFallback ? value : ""), h("slot", { name: "input" }))));
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    getMutationObserver() {
        return (Build.isBrowser &&
            new MutationObserver(() => this.syncFromExternalInput()));
    }
    syncFromExternalInput() {
        if (this.inputProxy) {
            this.value = this.inputProxy.value;
            this.checked = this.inputProxy.checked;
        }
    }
    syncToExternalInput() {
        if (!this.inputProxy) {
            return;
        }
        this.inputProxy.value = this.value;
        if (this.checked) {
            this.inputProxy.setAttribute("checked", "true");
        }
        else {
            this.inputProxy.removeAttribute("checked");
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "checked": ["handleCheckedChange"]
    }; }
    static get style() { return ":host([hidden]) {\n  display: none;\n}\n\n:host {\n  display: -ms-flexbox;\n  display: flex;\n  background-color: var(--calcite-ui-foreground-1);\n  color: var(--calcite-ui-text-3);\n  cursor: pointer;\n  line-height: 1.25;\n  margin: 0.25rem -1px 0 0px;\n  border: 1px solid var(--calcite-ui-border-1);\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-transition: background 0.1s ease-in-out, border-color 0.1s ease-in-out;\n  transition: background 0.1s ease-in-out, border-color 0.1s ease-in-out;\n  cursor: pointer;\n}\n\n:host {\n  outline-offset: 0;\n  outline-color: transparent;\n  -webkit-transition: outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;\n  transition: outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;\n}\n\n:host(:focus) {\n  outline: 2px solid var(--calcite-ui-blue-1);\n  outline-offset: 2px;\n}\n\n:host([scale=s]) {\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  padding: 0.25rem 0.75rem;\n}\n\n:host([scale=m]) {\n  font-size: 0.9375rem;\n  line-height: 1.5;\n  padding: 0.4rem 1rem;\n}\n\n:host([scale=l]) {\n  font-size: 1rem;\n  line-height: 1.5;\n  padding: 0.5rem 1.5rem;\n}\n\n:host(:hover) {\n  background-color: var(--calcite-ui-foreground-2);\n}\n\n:host(:active) {\n  background-color: var(--calcite-ui-foreground-3);\n}\n\n:host([checked]) {\n  background-color: var(--calcite-ui-blue-1);\n  border-color: var(--calcite-ui-blue-1);\n  color: var(--calcite-ui-background);\n  cursor: default;\n}\n\nlabel {\n  pointer-events: none;\n}\n\n::slotted(input) {\n  display: none;\n}"; }
};

export { CalciteRadioGroupItem as calcite_radio_group_item };
