import { h } from "@stencil/core";
import { loadModules } from 'esri-loader';
export class MapGallery {
    constructor() {
        this.items = [];
    }
    initializeMap() {
        loadModules(['esri/portal/Portal']).then(([Portal]) => {
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
        return h("div", { class: "views-element-container" },
            h("ol", { class: "o-layout-grid o-layout-grid--3" }, this.items.map(item => {
                return h("li", { class: "o-layout-grid__item" },
                    h("article", { class: "js--block-link c-project-teaser" },
                        h("div", { class: "c-project-teaser__thumbnail" },
                            h("div", { class: "c-project-teaser__image" },
                                h("div", { "data-align": "center", class: "paragraph paragraph--type--stories-image paragraph--view-mode--teaser" },
                                    h("div", { class: "field field--name-field-stories-image field--type-entity-reference field--label-hidden media--content field__item" },
                                        h("figure", { class: "media" },
                                            h("div", { class: "media__image" },
                                                h("img", { srcset: item.thumbnailUrl, sizes: "(min-width: 37.5em) 374px, calc(100vw - 30px)", src: item.thumbnailUrl, alt: item.title, typeof: "foaf:Image" }))))))),
                        h("h3", { class: "c-project-teaser__title" },
                            h("a", { class: "c-project-teaser__title-link", target: "_blank", href: item.url, rel: "bookmark" },
                                h("span", null, item.title)))));
            })));
    }
    static get is() { return "map-gallery"; }
    static get originalStyleUrls() { return {
        "$": ["map-gallery.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["map-gallery.css"]
    }; }
    static get properties() { return {
        "groupId": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "group-id",
            "reflect": false
        }
    }; }
    static get states() { return {
        "items": {}
    }; }
}
