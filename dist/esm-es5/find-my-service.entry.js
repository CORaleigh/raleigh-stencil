var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { r as registerInstance, h } from './core-f49384c5.js';
import { e as esriLoader_3 } from './esri-loader-42a1ccca.js';
var FindMyService = /** @class */ (function () {
    function FindMyService(hostRef) {
        registerInstance(this, hostRef);
        this.council = false;
        this.webmaps = [];
        this.maps = [];
        this.councilInfo = [];
        this.features = [];
    }
    FindMyService.prototype.initializeMap = function () {
        var _this = this;
        esriLoader_3(['esri/portal/Portal', 'esri/widgets/Search', 'esri/WebMap', 'esri/layers/FeatureLayer', 'esri/tasks/Locator']).then(function (_a) {
            var Portal = _a[0], Search = _a[1], WebMap = _a[2], FeatureLayer = _a[3], Locator = _a[4];
            _this.search = new Search({
                container: 'searchDiv', includeDefaultSources: false,
                sources: [
                    {
                        locator: new Locator({ url: "https://maps.raleighnc.gov/arcgis/rest/services/Locators/FindMyService/GeocodeServer" }),
                        placeholder: "Search by address"
                    }
                ]
            });
            _this.search.on('select-result', function (selection) {
                _this.maps = [];
                var maps = [];
                _this.councilInfo = [];
                new FeatureLayer({ url: "https://maps.raleighnc.gov/arcgis/rest/services/Planning/Jurisdictions/MapServer/0" }).queryFeatureCount({
                    geometry: selection.result.feature.geometry, outFields: ['*'],
                    where: "LONG_NAME = 'RALEIGH'"
                }).then(function (count) {
                    _this.webmaps.forEach(function (map) {
                        if (map.portalItem.title.includes('Leaf') && count === 0) {
                            console.log('Leaf collection not available outside city limits');
                        }
                        else {
                            var featureCnt_1 = 0;
                            var showLayers_1 = [];
                            if (_this.layers) {
                                showLayers_1 = _this.layers.split(',');
                            }
                            var layers_1 = [];
                            map.layers.forEach(function (layer) {
                                if (showLayers_1.length === 0 || showLayers_1.includes(layer.title)) {
                                    layer.queryFeatures({ geometry: selection.result.feature.geometry, outFields: ['*'] }).then(function (featureSet) {
                                        layers_1 = __spreadArrays(layers_1, [{ title: layer.title, features: featureSet.features, id: layer.id }]);
                                        featureCnt_1 += featureSet.features.length;
                                        if (_this.council && layer.title.includes('City Council') && featureSet.features.length > 0) {
                                            console.log(featureSet.features[0]);
                                            featureSet.features[0].useDefaultPopupTemplate = false;
                                            featureSet.features[0].layer.popupTemplate.content[0].text = '<div style="padding:30px"><img alt="" src="{expression/expr0}" style="padding-right:1em;max-height:200px;"/>';
                                            featureSet.features[0].layer.popupTemplate.content[0].text += "<h5>{COUNCIL_PERSON}</h5><span>Raleigh City Council</span><div>District {COUNCIL_DIST}</div><div><a href='https://www.raleighnc.gov/services/government/city-council-and-committees'><span>Website </span></a></div></div>";
                                            featureSet.features[0].layer.popupTemplate.title = "";
                                            _this.councilInfo.push(featureSet.features[0]);
                                        }
                                        if (layers_1.length === map.layers.length || showLayers_1.length === layers_1.length) {
                                            layers_1.sort(function (a, b) {
                                                if (a.title < b.title) {
                                                    return -1;
                                                }
                                                if (a.title > b.title) {
                                                    return 0;
                                                }
                                            });
                                            maps = __spreadArrays(maps, [{ title: map.portalItem.title, featureCnt: featureCnt_1, layers: layers_1 }]);
                                        }
                                        if (maps.length === _this.webmaps.length) {
                                            maps.sort(function (a, b) {
                                                if (a.title < b.title) {
                                                    return -1;
                                                }
                                                if (a.title > b.title) {
                                                    return 0;
                                                }
                                            });
                                            _this.maps = __spreadArrays(maps);
                                        }
                                    });
                                }
                            });
                        }
                    });
                });
            });
            var portal = new Portal();
            portal.load().then(function () {
                var queryParams = {
                    query: 'id: a8acaca3d4514d40bc7f302a8db291fb',
                    sortField: 'title'
                };
                portal.queryGroups(queryParams).then(function (result) {
                    if (result.results.length) {
                        queryParams = {
                            query: 'type: map',
                            sortField: 'title'
                        };
                        var categories_1 = [];
                        if (_this.categories) {
                            categories_1 = _this.categories.split(',');
                        }
                        result.results[0].queryItems(queryParams).then(function (result) {
                            if (result.results.length) {
                                result.results.forEach(function (item) {
                                    console.log(categories_1);
                                    if (categories_1.length === 0 || categories_1.includes(item.title)) {
                                        new WebMap({ portalItem: { id: item.id } }).loadAll().then(function (map) {
                                            map.layers.items.forEach(function (layer) {
                                                layer.features = [];
                                            });
                                            map.featureCnt = 0;
                                            _this.webmaps.push(map);
                                            if (_this.webmaps.length === result.results.length) {
                                                _this.webmaps = __spreadArrays(_this.webmaps);
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            });
        });
    };
    FindMyService.prototype.componentDidLoad = function () {
        this.webmaps = [];
        this.initializeMap();
    };
    FindMyService.prototype.componentWillLoad = function () {
        if (this.search) {
            this.search.destroy();
        }
        if (document.getElementById('searchDiv')) {
            document.getElementById('searchDiv').innerHTML = '';
        }
        this.maps = [];
    };
    FindMyService.prototype.loadFeatureWidget = function (id, feature) {
        esriLoader_3(['esri/widgets/Feature']).then(function (_a) {
            var Feature = _a[0];
            setTimeout(function () {
                var widget = new Feature({ container: id });
                widget.graphic = feature;
            }, 200);
        });
    };
    FindMyService.prototype.disconnectedCallback = function () {
        document.getElementById('councilDiv').innerHTML = '';
    };
    FindMyService.prototype.render = function () {
        var _this = this;
        return this.council ? (h("div", null, h("div", { id: 'searchDiv' }), h("div", { class: "o-layout-sidebar-after o-layout-sidebar-after--tight" }, this.councilInfo.map(function (info) {
            return h("div", { id: "councilDiv", class: "o-layout-sidebar-after__secondary" }, _this.loadFeatureWidget("councilDiv", info));
        }), h("ol", { class: "o-layout-grid o-layout-grid--3 o-layout-sidebar-after__primary" }, this.maps.map(function (webmap) {
            return webmap.featureCnt > 0 ? h("li", { class: "o-layout-grid__item" }, h("div", null, h("h3", null, webmap.title), webmap.layers.map(function (layer) {
                return layer.features.length > 0 ? h("div", null, layer.features.map(function (feature, i) {
                    return _this.council && layer.title.includes('City Council') ?
                        h("div", null)
                        :
                            h("div", { id: layer.id + '_' + i }, _this.loadFeatureWidget(layer.id + '_' + i, feature), h("br", null));
                }))
                    : h("div", null);
            })))
                : h("div", null, "Services not provided for this address");
        }))))) :
            (h("div", null, h("div", { id: 'searchDiv' }), h("div", null, h("ol", { class: "o-layout-grid o-layout-grid--3" }, this.maps.map(function (webmap) {
                return h("li", { class: "o-layout-grid__item" }, h("div", null, h("h3", null, webmap.title), webmap.layers.map(function (layer) {
                    return layer.features.length > 0 ? h("div", null, layer.features.map(function (feature, i) {
                        return h("div", { id: layer.id + '_' + i }, _this.loadFeatureWidget(layer.id + '_' + i, feature), h("br", null));
                    }))
                        : h("div", { class: "esri-feature esri-widget" }, h("br", null), h("h4", { class: "esri-feature__title" }, layer.title), h("div", { class: "esri-feature__text esri-feature__content-element" }, h("div", { class: "esri-feature__main-container" }, "Service not provided for this address")));
                })));
            })))));
    };
    Object.defineProperty(FindMyService, "style", {
        get: function () { return "\@import url(\"https://js.arcgis.com/4.13/esri/themes/light/main.css\");"; },
        enumerable: true,
        configurable: true
    });
    return FindMyService;
}());
export { FindMyService as find_my_service };
