import { r as registerInstance, c as createEvent, h, H as Host, B as Build, d as getElement } from './core-17370b86.js';
import { S as SPACE, a as ENTER } from './keys-ed140d96.js';

const CalciteSwitch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** True if the switch is initially on */
        this.switched = false;
        /** The name of the checkbox input */
        this.name = "";
        /** The value of the checkbox input */
        this.value = "";
        /** What color the switch should be */
        this.color = "blue";
        /** The scale of the button */
        this.scale = "m";
        /** The component's theme. */
        this.theme = "light";
        this.syncThisToProxyInput = () => {
            this.switched = this.inputProxy.hasAttribute("checked");
            this.name = this.inputProxy.name;
            this.value = this.inputProxy.value;
        };
        this.syncProxyInputToThis = () => {
            this.switched
                ? this.inputProxy.setAttribute("checked", "")
                : this.inputProxy.removeAttribute("checked");
            this.inputProxy.setAttribute("name", this.name);
            this.inputProxy.setAttribute("value", this.value);
        };
        this.calciteSwitchChange = createEvent(this, "calciteSwitchChange", 7);
        this.change = createEvent(this, "change", 7);
    }
    onClick(e) {
        // prevent duplicate click events that occur
        // when the component is wrapped in a label and checkbox is clicked
        if ((this.el.closest("label") && e.target === this.inputProxy) ||
            (!this.el.closest("label") && e.target === this.el)) {
            this.updateSwitch(e);
        }
    }
    keyDownHandler(e) {
        if (e.keyCode === SPACE || e.keyCode === ENTER) {
            this.updateSwitch(e);
        }
    }
    switchWatcher() {
        this.switched
            ? this.inputProxy.setAttribute("checked", "")
            : this.inputProxy.removeAttribute("checked");
    }
    connectedCallback() {
        // prop validations
        let theme = ["light", "dark"];
        if (!theme.includes(this.theme))
            this.theme = "light";
        let color = ["blue", "red"];
        if (!color.includes(this.color))
            this.color = "blue";
        let scale = ["s", "m", "l"];
        if (!scale.includes(this.scale))
            this.scale = "m";
        this.setupProxyInput();
    }
    disconnectedCallback() {
        this.observer.disconnect();
    }
    componentWillRender() {
        this.syncProxyInputToThis();
    }
    render() {
        return (h(Host, { role: "checkbox", "aria-checked": this.switched.toString(), tabIndex: this.tabIndex }, h("div", { class: "track" }, h("div", { class: "handle" })), h("slot", null)));
    }
    get tabIndex() {
        const hasTabIndex = this.el.hasAttribute("tabindex");
        if (hasTabIndex) {
            return Number(this.el.getAttribute("tabindex"));
        }
        return 0;
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
    updateSwitch(e) {
        e.preventDefault();
        this.switched = !this.switched;
        this.change.emit();
        this.calciteSwitchChange.emit();
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "switched": ["switchWatcher"]
    }; }
    static get style() { return ":host([hidden]) {\n  display: none;\n}\n\n:host {\n  --calcite-switch-track-background: #f3f3f3;\n  --calcite-switch-track-border: #d4d4d4;\n  --calcite-switch-handle-background: #ffffff;\n  --calcite-switch-handle-border: #959595;\n  --calcite-switch-hover-handle-border: var(--calcite-ui-blue-2);\n  --calcite-switch-hover-track-background: #eaeaea;\n  --calcite-switch-hover-track-border: #bfbfbf;\n  --calcite-switch-switched-track-background: var(--calcite-ui-blue-2);\n  --calcite-switch-switched-track-border: var(--calcite-ui-blue-2);\n  --calcite-switch-switched-handle-border: var(--calcite-ui-blue-1);\n  --calcite-switch-switched-hover-track-background: var(--calcite-ui-blue-2);\n  --calcite-switch-switched-hover-track-border: var(--calcite-ui-blue-2);\n  --calcite-switch-switched-hover-handle-border: var(--calcite-ui-blue-3);\n}\n\n:host([theme=dark]) {\n  --calcite-switch-track-background: #353535;\n  --calcite-switch-track-border: #555555;\n  --calcite-switch-handle-background: #2b2b2b;\n  --calcite-switch-handle-border: #959595;\n  --calcite-switch-hover-track-background: #404040;\n  --calcite-switch-hover-track-border: #808080;\n}\n\n:host([color=red]) {\n  --calcite-switch-switched-track-background: var(--calcite-ui-red-2);\n  --calcite-switch-switched-track-border: var(--calcite-ui-red-1);\n  --calcite-switch-hover-handle-border: var(--calcite-ui-red-2);\n  --calcite-switch-switched-handle-border: var(--calcite-ui-red-1);\n  --calcite-switch-switched-hover-track-background: var(--calcite-ui-red-1);\n  --calcite-switch-switched-hover-track-border: var(--calcite-ui-red-2);\n  --calcite-switch-switched-hover-handle-border: var(--calcite-ui-red-3);\n}\n\n:host([scale=s]) {\n  --calcite-switch-track-width: 28px;\n  --calcite-switch-track-height: 16px;\n  --calcite-switch-handle-size: 14px;\n}\n\n:host([scale=m]) {\n  --calcite-switch-track-width: 36px;\n  --calcite-switch-track-height: 20px;\n  --calcite-switch-handle-size: 18px;\n}\n\n:host([scale=l]) {\n  --calcite-switch-track-width: 44px;\n  --calcite-switch-track-height: 24px;\n  --calcite-switch-handle-size: 22px;\n}\n\n::slotted(input) {\n  display: none;\n}\n\n:host {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  vertical-align: middle;\n  top: -0.1em;\n  tap-highlight-color: transparent;\n  margin-right: 0.5em;\n}\n\n:host {\n  outline-offset: 0;\n  outline-color: transparent;\n  -webkit-transition: outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;\n  transition: outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;\n}\n\n:host(:focus) {\n  outline: 2px solid var(--calcite-ui-blue-1);\n  outline-offset: 2px;\n}\n\n.track {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  width: var(--calcite-switch-track-width);\n  height: var(--calcite-switch-track-height);\n  background-color: var(--calcite-switch-track-background);\n  border-radius: 30px;\n  border: 1px solid var(--calcite-switch-track-border);\n  pointer-events: none;\n  -webkit-transition: all 150ms ease-in-out;\n  transition: all 150ms ease-in-out;\n}\n\n.handle {\n  position: absolute;\n  display: block;\n  width: var(--calcite-switch-handle-size);\n  height: var(--calcite-switch-handle-size);\n  top: -1px;\n  left: -1px;\n  right: auto;\n  background-color: var(--calcite-switch-handle-background);\n  border-radius: 30px;\n  border: 2px solid var(--calcite-switch-handle-border);\n  pointer-events: none;\n  -webkit-transition: all 150ms ease-in-out;\n  transition: all 150ms ease-in-out;\n}\n\n:host(:hover) .track,\n:host(:focus) .track {\n  background-color: var(--calcite-switch-hover-track-background);\n  border-color: var(--calcite-switch-hover-track-border);\n}\n:host(:hover) .handle,\n:host(:focus) .handle {\n  border-color: var(--calcite-switch-hover-handle-border);\n  right: auto;\n}\n\n:host([switched]) .track {\n  background-color: var(--calcite-switch-switched-track-background);\n  border-color: var(--calcite-switch-switched-track-border);\n}\n:host([switched]) .handle {\n  right: -1px;\n  left: auto;\n  border-color: var(--calcite-switch-switched-handle-border);\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);\n}\n\n:host([switched]:focus) .track {\n  -webkit-box-shadow: 0 0 6px 1px var(--calcite-switch-switched-box-shadow-color);\n  box-shadow: 0 0 6px 1px var(--calcite-switch-switched-box-shadow-color);\n}\n\n:host([switched]:hover) .track {\n  background-color: var(--calcite-switch-switched-hover-track-background);\n  border-color: var(--calcite-switch-switched-hover-track-border);\n}\n:host([switched]:hover) .handle {\n  border-color: var(--calcite-switch-switched-hover-handle-border);\n}\n\n:host([dir=rtl]) {\n  margin-right: 0;\n  margin-left: 0.5em;\n}\n:host([dir=rtl]) .handle {\n  left: auto;\n  right: -1px;\n}\n\n:host([dir=rtl]:hover) .handle {\n  right: 1px;\n  left: auto;\n}\n\n:host([dir=rtl][switched]) .handle {\n  right: auto;\n  left: -1px;\n}\n\n:host([dir=rtl][switched]:active) .handle,\n:host([dir=rtl][switched]:focus) .handle {\n  right: auto;\n  left: -1px;\n}"; }
};

export { CalciteSwitch as calcite_switch };
