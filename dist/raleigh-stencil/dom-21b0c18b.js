// turn a domNodeList into an array
function nodeListToArray(domNodeList) {
    if (Array.isArray(domNodeList)) {
        return domNodeList;
    }
    else {
        return Array.prototype.slice.call(domNodeList);
    }
}
function getElementDir(el) {
    return getElementProp(el, "dir", "ltr");
}
function getElementTheme(el) {
    return getElementProp(el, "theme", "light");
}
function getElementProp(el, prop, value) {
    const closestWithProp = el.closest(`[${prop}]`);
    return closestWithProp ? closestWithProp.getAttribute(prop) : value;
}
function focusElement(el) {
    if (!el) {
        return;
    }
    typeof el.setFocus === "function" ? el.setFocus() : el.focus();
}
function hasSlottedContent(el) {
    const assignedNodes = el && el.assignedNodes();
    return assignedNodes && assignedNodes.length > 0;
}
function getSlottedElements(wrapperEl, selector) {
    const slot = wrapperEl.querySelector("slot");
    const elements = slot ? slot.assignedElements() : wrapperEl.children;
    return nodeListToArray(elements).filter(el => el.matches(selector));
}
function getDescribedByElement(element) {
    const id = element && element.getAttribute("aria-describedby");
    return (id && document.getElementById(id)) || null;
}
const HOST_CSS = {
    hydratedInvisible: "hydrated--invisible"
};

export { HOST_CSS as H, getElementProp as a, getSlottedElements as b, getElementTheme as c, getDescribedByElement as d, focusElement as f, getElementDir as g, nodeListToArray as n };
