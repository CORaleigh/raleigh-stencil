'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-7a9a1188.js');
const esriLoader = require('./esri-loader-e1a1b18f.js');

const MapGallery = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.items = [];
    }
    initializeMap() {
        esriLoader.esriLoader_3(['esri/portal/Portal']).then(([Portal]) => {
            const portal = new Portal();
            portal.load().then(() => {
                portal.queryGroups({ query: "id:" + this.groupId }).then(result => {
                    if (result.results.length) {
                        debugger;
                        let group = result.results[0];
                        group.queryItems({ query: "type:Application" }).then(result => {
                            console.log(result);
                            this.items = result.results;
                        });
                    }
                });
            });
        });
    }
    componentDidLoad() {
        this.initializeMap();
    }
    render() {
        return core.h("div", { class: "views-element-container" }, core.h("ol", { class: "o-layout-grid o-layout-grid--3" }, this.items.map(item => {
            return core.h("li", { class: "o-layout-grid__item" }, core.h("article", { class: "js--block-link c-project-teaser" }, core.h("div", { class: "c-project-teaser__thumbnail" }, core.h("div", { class: "c-project-teaser__image" }, core.h("div", { "data-align": "center", class: "paragraph paragraph--type--stories-image paragraph--view-mode--teaser" }, core.h("div", { class: "field field--name-field-stories-image field--type-entity-reference field--label-hidden media--content field__item" }, core.h("figure", { class: "media" }, core.h("div", { class: "media__image" }, core.h("img", { srcset: item.thumbnailUrl, sizes: "(min-width: 37.5em) 374px, calc(100vw - 30px)", src: item.thumbnailUrl, alt: item.title, typeof: "foaf:Image" }))))))), core.h("h3", { class: "c-project-teaser__title" }, core.h("a", { class: "c-project-teaser__title-link", target: "_blank", href: item.url, rel: "bookmark" }, core.h("span", null, item.title)))));
        })));
    }
    static get style() { return ""; }
};

exports.map_gallery = MapGallery;
