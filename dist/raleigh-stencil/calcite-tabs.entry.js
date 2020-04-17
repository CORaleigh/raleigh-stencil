import { r as registerInstance, h, H as Host, d as getElement } from './core-17370b86.js';

const CalciteTabs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Align tab titles to the edge or fully justify them across the tab nav ("center")
         */
        this.layout = "inline";
        //--------------------------------------------------------------------------
        //
        //  Events
        //
        //--------------------------------------------------------------------------
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /**
         * @internal
         *
         * Stores an array of ids of `<calcite-tab-titles>`s to match up ARIA
         * attributes.
         */
        this.titles = [];
        /**
         * @internal
         *
         * Stores an array of ids of `<calcite-tab>`s to match up ARIA attributes.
         */
        this.tabs = [];
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    render() {
        return (h(Host, null, h("slot", { name: "tab-nav" }), h("section", null, h("slot", null))));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    /**
     * @internal
     */
    calciteTabTitleRegister(e) {
        this.titles = [...this.titles, e.target];
        this.registryHandler();
        e.stopPropagation();
    }
    /**
     * @internal
     */
    calciteTabTitleUnregister(e) {
        this.titles = this.titles.filter(el => el !== e.target);
        this.registryHandler();
        e.stopPropagation();
    }
    /**
     * @internal
     */
    calciteTabRegister(e) {
        this.tabs = [...this.tabs, e.target];
        this.registryHandler();
        e.stopPropagation();
    }
    /**
     * @internal
     */
    calciteTabUnregister(e) {
        this.tabs = this.tabs.filter(el => el !== e.target);
        this.registryHandler();
        e.stopPropagation();
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    /**
     * @internal
     *
     * Matches up elements from the internal `tabs` and `titles` to automatically
     * update the ARIA attributes and link `<calcite-tab>` and
     * `<calcite-tab-title>` components.
     */
    async registryHandler() {
        var tabIds;
        var titleIds;
        // determine if we are using `tab` based or `index` based tab identifiers.
        if (this.tabs.some(e => e.tab) || this.titles.some(e => e.tab)) {
            // if we are using `tab` based identifiers sort by `tab` to account for
            // possible out of order tabs and get the id of each tab
            tabIds = this.tabs
                .sort((a, b) => a.tab.localeCompare(b.tab))
                .map(e => e.id);
            titleIds = this.titles
                .sort((a, b) => a.tab.localeCompare(b.tab))
                .map(e => e.id);
        }
        else {
            // if we are using index based tabs then the `<calcite-tab>` and
            // `<calcite-tab-title>` might have been rendered out of order so the
            // order of `this.tabs` and `this.titles` might not reflect the DOM state,
            // and might not match each other so we need to get the index of all the
            // tabs and titles in the DOM order to match them up as a source of truth
            const tabDomIndexes = await Promise.all(this.tabs.map(el => el.getTabIndex()));
            const titleDomIndexes = await Promise.all(this.titles.map(el => el.getTabIndex()));
            // once we have the DOM order as a source of truth we can build the
            // matching tabIds and titleIds arrays
            tabIds = tabDomIndexes.reduce((ids, indexInDOM, registryIndex) => {
                ids[indexInDOM] = this.tabs[registryIndex].id;
                return ids;
            }, []);
            titleIds = titleDomIndexes.reduce((ids, indexInDOM, registryIndex) => {
                ids[indexInDOM] = this.titles[registryIndex].id;
                return ids;
            }, []);
        }
        // pass all our new aria information to each `<calcite-tab>` and
        // `<calcite-tab-title>` which will check if they can update their internal
        // `controlled` or `labeledBy` states and re-render if necessary
        this.tabs.forEach(el => el.updateAriaInfo(tabIds, titleIds));
        this.titles.forEach(el => el.updateAriaInfo(tabIds, titleIds));
    }
    get el() { return getElement(this); }
    static get style() { return ":host([hidden]) {\n  display: none;\n}\n\n:host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n\nsection {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  overflow: hidden;\n  border-top: 1px solid var(--calcite-ui-border-1);\n}"; }
};

export { CalciteTabs as calcite_tabs };
