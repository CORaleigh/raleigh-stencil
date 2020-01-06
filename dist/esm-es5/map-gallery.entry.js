import { r as registerInstance, h } from './core-f49384c5.js';
import { e as esriLoader_3 } from './esri-loader-42a1ccca.js';
var MapGallery = /** @class */ (function () {
    function MapGallery(hostRef) {
        registerInstance(this, hostRef);
        this.items = [];
    }
    MapGallery.prototype.initializeMap = function () {
        var _this = this;
        esriLoader_3(['esri/portal/Portal']).then(function (_a) {
            var Portal = _a[0];
            var portal = new Portal();
            portal.load().then(function () {
                portal.queryGroups({ query: "id:" + _this.groupId }).then(function (result) {
                    if (result.results.length) {
                        debugger;
                        var group = result.results[0];
                        group.queryItems({ query: "type:Application" }).then(function (result) {
                            console.log(result);
                            _this.items = result.results;
                        });
                    }
                });
            });
        });
    };
    MapGallery.prototype.componentDidLoad = function () {
        this.initializeMap();
    };
    MapGallery.prototype.render = function () {
        return h("div", { class: "views-element-container" }, h("ol", { class: "o-layout-grid o-layout-grid--3" }, this.items.map(function (item) {
            return h("li", { class: "o-layout-grid__item" }, h("article", { class: "js--block-link c-project-teaser" }, h("div", { class: "c-project-teaser__thumbnail" }, h("div", { class: "c-project-teaser__image" }, h("div", { "data-align": "center", class: "paragraph paragraph--type--stories-image paragraph--view-mode--teaser" }, h("div", { class: "field field--name-field-stories-image field--type-entity-reference field--label-hidden media--content field__item" }, h("figure", { class: "media" }, h("div", { class: "media__image" }, h("img", { srcset: item.thumbnailUrl, sizes: "(min-width: 37.5em) 374px, calc(100vw - 30px)", src: item.thumbnailUrl, alt: item.title, typeof: "foaf:Image" }))))))), h("h3", { class: "c-project-teaser__title" }, h("a", { class: "c-project-teaser__title-link", target: "_blank", href: item.url, rel: "bookmark" }, h("span", null, item.title)))));
        })));
    };
    Object.defineProperty(MapGallery, "style", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return MapGallery;
}());
export { MapGallery as map_gallery };
