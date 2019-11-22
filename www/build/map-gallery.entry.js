import { r as registerInstance, h } from './core-8193746a.js';
import { e as esriLoader_3 } from './esri-loader-24201da0.js';

const MapGallery = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.items = [];
    }
    initializeMap() {
        esriLoader_3(['esri/portal/Portal']).then(([Portal]) => {
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
        return h("div", { class: "views-element-container" }, h("ol", { class: "o-layout-grid o-layout-grid--3" }, this.items.map(item => {
            return h("li", { class: "o-layout-grid__item" }, h("article", { class: "js--block-link c-project-teaser" }, h("div", { class: "c-project-teaser__thumbnail" }, h("div", { class: "c-project-teaser__image" }, h("div", { "data-align": "center", class: "paragraph paragraph--type--stories-image paragraph--view-mode--teaser" }, h("div", { class: "field field--name-field-stories-image field--type-entity-reference field--label-hidden media--content field__item" }, h("figure", { class: "media" }, h("div", { class: "media__image" }, h("img", { srcset: item.thumbnailUrl, sizes: "(min-width: 37.5em) 374px, calc(100vw - 30px)", src: item.thumbnailUrl, alt: item.title, typeof: "foaf:Image" }))))))), h("h3", { class: "c-project-teaser__title" }, h("a", { class: "c-project-teaser__title-link", target: "_blank", href: item.url, rel: "bookmark" }, h("span", null, item.title)))));
        })));
    }
    static get style() { return ""; }
};

export { MapGallery as map_gallery };
