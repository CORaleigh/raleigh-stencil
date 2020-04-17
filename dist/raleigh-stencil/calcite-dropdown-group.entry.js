import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './core-17370b86.js';
import { g as guid } from './guid-8a4914c4.js';

const CalciteDropdownGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** specify the selection mode - multi (allow any number of (or no) active items), single (allow and require one active item),
         none (no active items), defaults to single */
        this.selectionMode = "single";
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /** created list of dropdown items */
        this.items = [];
        /** unique id for dropdown group */
        this.dropdownGroupId = `calcite-dropdown-group-${guid()}`;
        this.titleEl = null;
        this.sortItems = (items) => items.sort((a, b) => a.position - b.position).map((a) => a.item);
        this.calciteDropdownItemHasChanged = createEvent(this, "calciteDropdownItemHasChanged", 7);
        this.registerCalciteDropdownGroup = createEvent(this, "registerCalciteDropdownGroup", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        // validate props
        let selectionMode = ["multi", "single", "none"];
        if (!selectionMode.includes(this.selectionMode))
            this.selectionMode = "single";
    }
    componentDidLoad() {
        this.groupPosition = this.getGroupPosition();
        this.items = this.sortItems(this.items);
        this.registerCalciteDropdownGroup.emit({
            items: this.items,
            position: this.groupPosition,
            groupId: this.dropdownGroupId,
            titleEl: this.titleEl,
        });
    }
    render() {
        const groupTitle = this.groupTitle ? (h("span", { class: "dropdown-title", ref: (node) => (this.titleEl = node) }, this.groupTitle)) : null;
        return (h(Host, null, groupTitle, h("slot", null)));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    registerCalciteDropdownItem(event) {
        const item = {
            item: event.target,
            position: event.detail.position,
        };
        this.items.push(item);
    }
    updateActiveItemOnChange(event) {
        this.requestedDropdownGroup = event.detail.requestedDropdownGroup;
        this.requestedDropdownItem = event.detail.requestedDropdownItem;
        this.calciteDropdownItemHasChanged.emit({
            requestedDropdownGroup: this.requestedDropdownGroup,
            requestedDropdownItem: this.requestedDropdownItem,
        });
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    getGroupPosition() {
        return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"), this.el);
    }
    get el() { return getElement(this); }
    static get style() { return ":host([hidden]) {\n  display: none;\n}\n\n:host-context([theme=dark]) {\n  --calcite-ui-blue-1: #00A0FF;\n  --calcite-ui-blue-2: #0087D7;\n  --calcite-ui-blue-3: #47BBFF;\n  --calcite-ui-green-1: #36DA43;\n  --calcite-ui-green-2: #11AD1D;\n  --calcite-ui-green-3: #44ED51;\n  --calcite-ui-yellow-1: #FFC900;\n  --calcite-ui-yellow-2: #F4B000;\n  --calcite-ui-yellow-3: #FFE24D;\n  --calcite-ui-red-1: #FE583E;\n  --calcite-ui-red-2: #F3381B;\n  --calcite-ui-red-3: #FF7465;\n  --calcite-ui-background: #202020;\n  --calcite-ui-foreground-1: #2b2b2b;\n  --calcite-ui-foreground-2: #353535;\n  --calcite-ui-foreground-3: #404040;\n  --calcite-ui-text-1: #ffffff;\n  --calcite-ui-text-2: #bfbfbf;\n  --calcite-ui-text-3: #9f9f9f;\n  --calcite-ui-border-1: #4a4a4a;\n  --calcite-ui-border-2: #404040;\n  --calcite-ui-border-3: #353535;\n  --calcite-ui-border-4: #757575;\n  --calcite-ui-border-5: #9f9f9f;\n}\n\n:host-context([scale=s]) {\n  --calcite-dropdown-group-padding: 0.5rem 0;\n}\n\n:host-context([scale=m]) {\n  --calcite-dropdown-group-padding: 0.75rem 0;\n}\n\n:host-context([scale=l]) {\n  --calcite-dropdown-group-padding: 1rem 0;\n}\n\n:host .dropdown-title {\n  display: block;\n  margin: 0 1rem -1px 1rem;\n  padding: var(--calcite-dropdown-group-padding);\n  border-bottom: 1px solid var(--calcite-ui-border-3);\n  color: var(--calcite-ui-text-2);\n  font-weight: 600;\n  word-wrap: break-word;\n  cursor: default;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}"; }
};

export { CalciteDropdownGroup as calcite_dropdown_group };
