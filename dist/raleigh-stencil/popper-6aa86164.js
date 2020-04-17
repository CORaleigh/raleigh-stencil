import { createPopper as createPopper$1 } from '@popperjs/core';
import { g as getElementDir } from './dom-21b0c18b.js';

function getPlacement(el, placement) {
    const values = ["left", "right"];
    if (getElementDir(el) === "rtl") {
        values.reverse();
    }
    return placement
        .replace(/leading/gi, values[0])
        .replace(/trailing/gi, values[1]);
}
function createPopper({ referenceEl, el, open, placement, modifiers }) {
    if (!referenceEl || !open) {
        return null;
    }
    return createPopper$1(referenceEl, el, {
        placement: getPlacement(el, placement),
        modifiers
    });
}
function updatePopper({ el, modifiers, placement: calcitePlacement, popper }) {
    const placement = getPlacement(el, calcitePlacement);
    popper.setOptions({
        modifiers,
        placement
    });
}
function hypotenuse(sideA, sideB) {
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}
const visiblePointerSize = 4;
const defaultOffsetDistance = Math.ceil(hypotenuse(visiblePointerSize, visiblePointerSize));

export { createPopper as c, defaultOffsetDistance as d, updatePopper as u };
