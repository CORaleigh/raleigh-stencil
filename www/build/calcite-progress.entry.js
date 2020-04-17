import { r as registerInstance, h, H as Host, d as getElement } from './core-17370b86.js';

const CalciteProgress = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Use indeterminate if finding actual progress value is impossible */
        this.type = "determinate";
        /** Percent complete of 100 */
        this.value = 0;
        /** Text label for the progress indicator */
        this.text = null;
        /** Fill bar in the opposite direction */
        this.reversed = false;
    }
    render() {
        const isDeterminate = this.type === "determinate";
        const barStyles = isDeterminate ? { width: `${this.value * 100}%` } : {};
        return (h(Host, { class: "calcite-progress" }, h("div", { class: "track" }), h("div", { class: {
                bar: true,
                indeterminate: this.type === "indeterminate",
                reversed: this.reversed
            }, style: barStyles }), this.text ? h("div", { class: "text" }, this.text) : null));
    }
    get el() { return getElement(this); }
    static get style() { return ":host([hidden]) {\n  display: none;\n}\n\n:host {\n  position: relative;\n  display: block;\n  height: 2px;\n  width: 100%;\n  overflow: hidden;\n}\n\n.track,\n.bar {\n  position: absolute;\n  top: 0;\n  height: 2px;\n}\n\n.track {\n  background: var(--calcite-ui-border-3);\n  z-index: 0;\n  width: 100%;\n}\n\n.bar {\n  background-color: var(--calcite-ui-blue-1);\n  z-index: 0;\n}\n\n.indeterminate {\n  width: 20%;\n  -webkit-animation: looping-progress-bar-ani 2200ms linear infinite;\n  animation: looping-progress-bar-ani 2200ms linear infinite;\n}\n\n.reversed {\n  right: 0;\n}\n\n.text {\n  padding: 1.5rem 0 0 0;\n}\n\n\@-webkit-keyframes looping-progress-bar-ani {\n  0% {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n  50% {\n    width: 40%;\n  }\n  100% {\n    -webkit-transform: translate3d(600%, 0, 0);\n    transform: translate3d(600%, 0, 0);\n  }\n}\n\n\@keyframes looping-progress-bar-ani {\n  0% {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n  50% {\n    width: 40%;\n  }\n  100% {\n    -webkit-transform: translate3d(600%, 0, 0);\n    transform: translate3d(600%, 0, 0);\n  }\n}"; }
};

export { CalciteProgress as calcite_progress };
