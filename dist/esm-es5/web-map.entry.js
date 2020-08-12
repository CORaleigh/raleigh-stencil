var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { r as registerInstance, h, g as getElement } from './core-f49384c5.js';
import { e as esriLoader_3, a as esriLoader_5 } from './esri-loader-42a1ccca.js';
var WebMap = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        //show search box (true or false)
        this.search = false;
        //show layer list (true or false)
        this.layerlist = false;
        //show legend (true or false)
        this.legend = false;
        //disable map navigation to make static (true or false)
        this.navigate = true;
        //display popup (true or false)
        this.popup = true;
        //hide features that don't match where clause (true or false)
        this.filter = false;
        //dock the popup (true or false)   
        this.popupdocked = false;
        //position docked (auto, top-left, top-center,top-right,bottom-left,bottom-center,bottom-right)
        this.dockposition = 'auto';
        //highlight the searched feature (true or false)    
        this.highlight = true;
        //show as 3D scene (true or false)
        this.scene = false;
        //show basemap gallery widget (true or false);
        this.basemapselect = false;
        //collapse widgets in upper right corner (true or false)
        this.collapsewidgets = true;
        //load widgets in dark mode (true or false)
        this.darkMode = false;
        this.list = false;
        this.divId = "";
        this.features = [];
        this.getRandomString = function () {
            var x = 2147483648;
            return Math.floor(Math.random() * x).toString(36) +
                Math.abs(Math.floor(Math.random() * x) ^ +new Date()).toString(36);
        };
        this.searchLoaded = function (search, mapView) {
            if (_this.address) {
                search.search(_this.address);
            }
            search.goToOverride = function (view, goToParams) {
                if (_this.zoom) {
                    goToParams.target.zoom = _this.zoom;
                }
                view.graphics.removeAll();
                view.graphics.add({ symbol: {
                        type: "simple-marker",
                        path: 'M15.65,36.85c1.9,2.3,4.47,4.93,7.8,7.45c0.49,0.37,0.99,0.73,1.51,1.09c0.54-0.37,1.07-0.75,1.58-1.14' +
                            'c10.44-7.92,15.7-18.63,15.7-24.62c0-8.93-6.84-16.3-15.56-17.13c-0.54-0.05-1.09-0.08-1.64-0.08l0,0l0,0l0,0l0,0' +
                            'c-0.72,0-1.42,0.06-2.11,0.14c-8.5,1.05-15.1,8.3-15.1,17.07C7.81,24.34,10.89,31.09,15.65,36.85z M22.91,4.38' +
                            'c0.69-0.1,1.39-0.16,2.11-0.16c0.56,0,1.1,0.03,1.65,0.09c7.73,0.83,13.77,7.38,13.77,15.33c0,5.71-5.17,15.99-15.42,23.54' +
                            'C14.77,35.63,9.6,25.35,9.6,19.64C9.6,11.85,15.4,5.41,22.91,4.38z' +
                            'M25.11,9.97c-5.67,0-10.29,4.62-10.29,10.29s4.62,10.29,10.29,10.29S35.4,25.93,35.4,20.26' +
                            'S30.79,9.97,25.11,9.97z M25.11,28.61c-4.6,0-8.35-3.74-8.35-8.35s3.74-8.35,8.35-8.35s8.35,3.74,8.35,8.35S29.72,28.61,25.11,28.61',
                        size: 24,
                        color: (mapView.map.basemap.title.toLowerCase().includes('dark')) ? '#FFFFFF' : '#000000',
                        outline: {
                            color: (mapView.map.basemap.title.toLowerCase().includes('dark')) ? '#FFFFFF' : '#000000',
                            width: "0.5px"
                        },
                        yoffset: 4
                    }, geometry: goToParams.target.target
                });
                return view.goTo(goToParams.target, goToParams.options);
            };
        };
        this.setPopupConfig = function () {
            return {
                highlightEnabled: _this.highlight,
                dockEnabled: _this.popupdocked,
                dockOptions: {
                    position: _this.dockposition,
                    buttonEnabled: false,
                    breakpoint: false
                }
            };
        };
        this.disableNavigation = function (mapView) {
            mapView.ui.remove('zoom');
            mapView.on("drag", function (event) {
                event.stopPropagation();
            });
            mapView.on("key-down", function (event) {
                var keyPressed = event.key;
                if (keyPressed.slice(0, 5) === "Arrow") {
                    event.stopPropagation();
                }
                var prohibitedKeys = ["+", "-", "Shift", "_", "="];
                var keyPressed = event.key;
                if (prohibitedKeys.indexOf(keyPressed) !== -1) {
                    event.stopPropagation();
                }
            });
            mapView.on("mouse-wheel", function (event) {
                event.stopPropagation();
            });
            mapView.on("double-click", function (event) {
                event.stopPropagation();
            });
            mapView.on("double-click", ["Control"], function (event) {
                event.stopPropagation();
            });
            mapView.on("drag", ["Shift"], function (event) {
                event.stopPropagation();
            });
            mapView.on("drag", ["Shift", "Control"], function (event) {
                event.stopPropagation();
            });
        };
        this.featureClicked = function (feature) {
            _this.mapView.goTo(feature);
        };
    }
    class_1.prototype.initializeMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, WebMap_1, Map, MapView, map, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, esriLoader_3([
                                'esri/WebMap',
                                'esri/Map',
                                'esri/views/MapView'
                            ])];
                    case 1:
                        _a = _b.sent(), WebMap_1 = _a[0], Map = _a[1], MapView = _a[2];
                        map = void 0;
                        if (this.mapId) {
                            map = new WebMap_1({ portalItem: { id: this.mapId } });
                        }
                        else {
                            map = new Map({ basemap: this.basemap });
                        }
                        return [2 /*return*/, new MapView({ map: map, container: this.divId, popup: this.setPopupConfig() })];
                    case 2:
                        error_1 = _b.sent();
                        console.log('EsriLoader: ', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.initializeScene = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, WebMap_2, WebScene, SceneView, map, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, esriLoader_3([
                                'esri/WebMap',
                                'esri/WebScene',
                                'esri/views/SceneView'
                            ])];
                    case 1:
                        _a = _b.sent(), WebMap_2 = _a[0], WebScene = _a[1], SceneView = _a[2];
                        map = void 0;
                        if (this.mapId) {
                            map = new WebMap_2({ portalItem: { id: this.mapId } });
                        }
                        if (this.sceneId) {
                            map = new WebScene({ portalItem: { id: this.sceneId } });
                        }
                        return [2 /*return*/, new SceneView({ map: map, container: this.element, popup: this.setPopupConfig() })];
                    case 2:
                        error_2 = _b.sent();
                        console.log('EsriLoader: ', error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.initializeSearch = function (mapView) {
        return __awaiter(this, void 0, void 0, function () {
            var Search, search, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, esriLoader_3([
                                'esri/widgets/Search'
                            ])];
                    case 1:
                        Search = (_a.sent())[0];
                        search = new Search({ view: mapView, container: document.createElement("div"), popupEnabled: this.popup, resultGraphicEnabled: false });
                        if (this.search) {
                            mapView.ui.add({ component: search, position: 'top-left' });
                        }
                        return [2 /*return*/, search];
                    case 2:
                        error_3 = _a.sent();
                        console.log('EsriLoader: ', error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.initializeLayerList = function (mapView) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, LayerList, Expand, layerlist, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, esriLoader_3([
                                'esri/widgets/LayerList',
                                'esri/widgets/Expand'
                            ])];
                    case 1:
                        _a = _b.sent(), LayerList = _a[0], Expand = _a[1];
                        layerlist = new LayerList({ view: mapView, container: document.createElement("div") });
                        if (this.collapsewidgets) {
                            mapView.ui.add({ component: new Expand({ view: mapView, group: 'top-right', expandTooltip: 'Layers',
                                    expandIconClass: "esri-icon-layers", content: layerlist.domNode, expanded: this.expandedwidget === 'layerlist' && ["xsmall"].indexOf(mapView.widthBreakpoint) === -1 }), position: 'top-right' });
                        }
                        else {
                            mapView.ui.add({ component: layerlist, position: 'top-right' });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _b.sent();
                        console.log('EsriLoader: ', error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.initializeBaseMapGallery = function (mapView) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, BasemapGallery, Expand, gallery, error_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, esriLoader_3([
                                'esri/widgets/BasemapGallery',
                                'esri/widgets/Expand'
                            ])];
                    case 1:
                        _a = _b.sent(), BasemapGallery = _a[0], Expand = _a[1];
                        gallery = new BasemapGallery({ view: mapView, container: document.createElement("div") });
                        if (this.collapsewidgets) {
                            mapView.ui.add({ component: new Expand({ view: mapView, group: 'top-right', expandTooltip: 'Basemap Gallery',
                                    expandIconClass: "esri-icon-basemap", content: gallery.domNode, expanded: this.expandedwidget === 'basemap' && ["xsmall"].indexOf(mapView.widthBreakpoint) === -1 }), position: 'top-right' });
                        }
                        else {
                            mapView.ui.add({ component: gallery, position: 'top-right' });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _b.sent();
                        console.log('EsriLoader: ', error_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.initializeLegend = function (mapView) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, Legend, Expand, legend, error_6;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, esriLoader_3([
                                'esri/widgets/Legend',
                                'esri/widgets/Expand'
                            ])];
                    case 1:
                        _a = _b.sent(), Legend = _a[0], Expand = _a[1];
                        legend = new Legend({ view: mapView, container: document.createElement("div") });
                        if (this.collapsewidgets) {
                            mapView.ui.add({ component: new Expand({ view: mapView, group: 'top-right', expandTooltip: 'Legend',
                                    expandIconClass: "esri-icon-layer-list", content: legend.domNode, expanded: this.expandedwidget === 'legend' && ["xsmall"].indexOf(mapView.widthBreakpoint) === -1 }), position: 'top-right' });
                        }
                        else {
                            mapView.ui.add({ component: legend, position: 'top-right' });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_6 = _b.sent();
                        console.log('EsriLoader: ', error_6);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.query = function (mapView) {
        var _this = this;
        mapView.on('layerview-create', function (layerView) {
            if (layerView.layer.title === _this.querylayer) {
                if (_this.filter) {
                    layerView.layer.definitionExpression = _this.querywhere;
                    layerView.layer.refresh();
                }
                layerView.layer.queryFeatures({ where: _this.querywhere, returnGeometry: true, outSpatialReference: mapView.spatialReference, outFields: ['*'] }).then(function (result) {
                    if (result.features.length) {
                        var target = { target: result.features };
                        if (_this.zoom) {
                            target.zoom = _this.zoom;
                        }
                        mapView.goTo(target, { duration: 2500 });
                        if (_this.popup) {
                            mapView.popup.open({ features: result.features });
                        }
                        _this.features = __spreadArrays(result.features);
                    }
                });
            }
        });
    };
    class_1.prototype.componentDidLoad = function () {
        var _this = this;
        this.divId = this.getRandomString();
        if (this.darkMode) {
            esriLoader_5('https://js.arcgis.com/4.13/esri/themes/dark/main.css');
        }
        this.initializeMap().then((function (mapView) {
            _this.mapView = mapView;
            mapView.ui.remove('zoom');
            if (_this.zoom && !_this.querylayer) {
                mapView.zoom = _this.zoom;
            }
            if (_this.querylayer && _this.querywhere) {
                _this.query(mapView);
            }
            if (!_this.navigate) {
                _this.disableNavigation(mapView);
            }
            if (_this.search || _this.address) {
                _this.initializeSearch(mapView).then(function (search) { return _this.searchLoaded(search, mapView); });
            }
            if (_this.layerlist) {
                _this.initializeLayerList(mapView);
            }
            if (_this.basemapselect) {
                _this.initializeBaseMapGallery(mapView);
            }
            if (_this.legend) {
                _this.initializeLegend(mapView);
            }
        }));
    };
    class_1.prototype.loadFeatureWidget = function (id, feature) {
        esriLoader_3(['esri/widgets/Feature']).then(function (_a) {
            var Feature = _a[0];
            setTimeout(function () {
                var widget = new Feature({ container: id });
                widget.graphic = feature;
            }, 200);
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        if (this.list) {
            return h("div", { class: "container" }, h("div", { class: (this.list) ? 'list-mode map' : '', id: this.divId }), h("div", { class: (this.list) ? 'list-mode list' : '' }, this.features.map(function (feature) {
                return h("div", { onClick: function () { _this.featureClicked(feature); }, id: _this.divId + '_list_' + feature.attributes['OBJECTID'] }, _this.loadFeatureWidget(_this.divId + '_list_' + feature.attributes['OBJECTID'], feature));
            })));
        }
        else {
            return h("div", { class: "container" }, h("div", { id: this.divId }));
        }
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return "\@import url(\"https://js.arcgis.com/4.13/esri/themes/light/main.css\");.esri-view{height:100%;width:100%}.list-mode{max-height:50%;overflow:auto}\@media only screen and (min-width:800px){.list-mode.list{max-width:400px}.list-mode.list,.list-mode.map{max-height:100%;overflow:auto;float:left}.list-mode.map{max-width:calc(100% - 400px)}}:host{position:absolute;left:0;right:0;bottom:0;top:0}.container,body,html{height:100%;width:100%;margin:0;font-family:sans-serif}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { WebMap as web_map };
