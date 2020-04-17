import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './core-17370b86.js';

const CSS = {
    page: "page",
    selected: "is-selected",
    previous: "previous",
    next: "next",
    disabled: "is-disabled",
    ellipsis: "ellipsis",
    ellipsisStart: "ellipsis--start",
    ellipsisEnd: "ellipsis--end"
};
const TEXT = {
    nextLabel: "next",
    previousLabel: "previous"
};

const maxPagesDisplayed = 5;
const CalcitePagination = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        /** Change between foreground colors or background colors for container background */
        this.backgroundStyle = "foregroundColor";
        /** starting selected index */
        this.num = 1;
        /** starting number of the pagination */
        this.start = 1;
        /** title of the next button */
        this.textLabelNext = TEXT.nextLabel;
        /** title of the previous button */
        this.textLabelPrevious = TEXT.previousLabel;
        /** ending number of the pagination */
        this.total = 2;
        this.selectedIndex = this.num;
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.previousClicked = () => {
            this.previousPage();
        };
        this.nextClicked = () => {
            this.nextPage();
        };
        this.calcitePaginationUpdate = createEvent(this, "calcitePaginationUpdate", 7);
    }
    numWatchHandler(newValue) {
        this.selectedIndex = newValue;
    }
    selectedIndexWatchHandler() {
        this.calcitePaginationUpdate.emit({
            start: this.start,
            total: this.total,
            num: this.selectedIndex,
        });
    }
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------
    /** When called, selected page will increment by 1.
     */
    async nextPage() {
        this.selectedIndex = Math.min(this.total, this.selectedIndex + 1);
    }
    /** When called, selected page will decrement by 1.
     */
    async previousPage() {
        this.selectedIndex = Math.max(this.start, this.selectedIndex - 1);
    }
    /** Set selected page to a specific page number. Will not go below start or above total.
     */
    async setPage(num) {
        this.selectedIndex = Math.max(this.start, Math.min(this.total, num));
    }
    showLeftEllipsis() {
        return this.selectedIndex - this.start > 3;
    }
    showRightEllipsis() {
        return this.total - this.selectedIndex > 3;
    }
    //--------------------------------------------------------------------------
    //
    //  Render Methods
    //
    //--------------------------------------------------------------------------
    renderPages() {
        let pages = [];
        let currentNum;
        let end;
        if (this.total <= maxPagesDisplayed) {
            currentNum = this.start + 1;
            end = this.total - 1;
        }
        else {
            if (this.selectedIndex < maxPagesDisplayed) {
                currentNum = this.start + 1;
                end = this.start + 4;
            }
            else {
                if (this.selectedIndex + 3 >= this.total) {
                    currentNum = this.total - 4;
                    end = this.total - 1;
                }
                else {
                    currentNum = this.selectedIndex - 1;
                    end = this.selectedIndex + 1;
                }
            }
        }
        while (currentNum <= end) {
            pages.push(currentNum);
            currentNum++;
        }
        return pages.map((page) => this.renderPage(page));
    }
    renderPage(num) {
        return (h("a", { tabIndex: 0, class: { [CSS.page]: true, [CSS.selected]: num === this.selectedIndex }, onClick: () => {
                this.selectedIndex = num;
            } }, num));
    }
    renderLeftEllipsis() {
        if (this.total > maxPagesDisplayed && this.showLeftEllipsis()) {
            return (h("span", { class: `${CSS.ellipsis} ${CSS.ellipsisStart}` }, h("calcite-icon", { scale: "s", icon: "ellipsis" })));
        }
    }
    renderRightEllipsis() {
        if (this.total > maxPagesDisplayed && this.showRightEllipsis()) {
            return (h("span", { class: `${CSS.ellipsis} ${CSS.ellipsisEnd}` }, h("calcite-icon", { scale: "s", icon: "ellipsis" })));
        }
    }
    render() {
        return (h(Host, { class: this.backgroundStyle }, h("a", { class: {
                [CSS.previous]: true,
                [CSS.disabled]: this.selectedIndex <= 1,
            }, tabIndex: 0, title: this.textLabelPrevious, onClick: this.previousClicked }, h("calcite-icon", { scale: "s", icon: "chevronLeft" })), this.renderPage(this.start), this.renderLeftEllipsis(), this.renderPages(), this.renderRightEllipsis(), this.renderPage(this.total), h("a", { class: {
                [CSS.next]: true,
                [CSS.disabled]: this.selectedIndex >= this.total,
            }, tabIndex: 0, title: this.textLabelNext, onClick: this.nextClicked }, h("calcite-icon", { scale: "s", icon: "chevronRight" }))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "num": ["numWatchHandler"],
        "selectedIndex": ["selectedIndexWatchHandler"]
    }; }
    static get style() { return ":host([hidden]) {\n  display: none;\n}\n\n:host {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  background-color: var(--calcite-ui-foreground-1);\n  -webkit-writing-mode: horizontal-tb;\n  -ms-writing-mode: lr-tb;\n  writing-mode: horizontal-tb;\n}\n\n:host(.backgroundColor) {\n  background-color: var(--calcite-ui-background);\n}\n\n:host a {\n  outline-offset: 0;\n  outline-color: transparent;\n  -webkit-transition: outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;\n  transition: outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;\n}\n:host a:focus {\n  outline: 2px solid var(--calcite-ui-blue-1);\n  outline-offset: -2px;\n}\n\n.previous,\n.next,\n.page {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  border-top: 3px solid transparent;\n  border-bottom: 3px solid transparent;\n  color: var(--calcite-ui-text-3);\n  cursor: pointer;\n}\n.previous:hover,\n.next:hover,\n.page:hover {\n  color: var(--calcite-ui-text-1);\n  -webkit-transition: all 150ms ease-in-out;\n  transition: all 150ms ease-in-out;\n}\n\n.page:hover {\n  border-bottom-color: var(--calcite-ui-border-2);\n}\n.page.is-selected {\n  font-weight: 500;\n  color: var(--calcite-ui-text-1);\n  border-bottom-color: var(--calcite-ui-blue-1);\n}\n\n.previous,\n.next {\n  padding: 0.75em 1em;\n}\n.previous:hover,\n.next:hover {\n  color: var(--calcite-ui-blue-1);\n  background-color: var(--calcite-ui-foreground-2);\n}\n.previous:active,\n.next:active {\n  background-color: var(--calcite-ui-foreground-3);\n}\n.previous.is-disabled,\n.next.is-disabled {\n  background-color: transparent;\n}\n.previous.is-disabled > svg,\n.next.is-disabled > svg {\n  opacity: 0.3;\n}\n\n.next {\n  margin-right: 0;\n}\n\n.page,\n.ellipsis {\n  padding: 0.75em 1em;\n}\n\n.ellipsis {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: end;\n  align-items: flex-end;\n  color: var(--calcite-ui-text-3);\n}"; }
};

export { CalcitePagination as calcite_pagination };
