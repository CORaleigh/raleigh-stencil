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
import { r as registerInstance, h } from './core-f49384c5.js';
import { e as esriLoader_3 } from './esri-loader-42a1ccca.js';
var TransitMap = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.name = [];
        this.view = null;
        this.stopsLayer = null;
        this.routesLayer = null;
        this.vehiclesLayer = null;
        this.stopView = null;
        this.vehiclesLoaded = false;
        this.vehicles = [];
        this.highlight = null;
    }
    class_1.prototype.initializeMap = function () {
        var _this = this;
        esriLoader_3(['esri/views/MapView', 'esri/Map', 'esri/layers/GraphicsLayer', 'esri/layers/FeatureLayer', 'esri/widgets/Locate']).then(function (_a) {
            var MapView = _a[0], Map = _a[1], GraphicsLayer = _a[2], FeatureLayer = _a[3], Locate = _a[4];
            var now = new Date();
            console.log(now.getHours());
            var basemap = "dark-gray-vector";
            if (now.getHours() >= 7 && now.getHours() <= 19) {
                basemap = "gray-vector";
            }
            var map = new Map({
                basemap: basemap
            });
            _this.view = new MapView({
                container: "viewDiv",
                map: map,
                highlightOptions: { color: 'yellow' },
                extent: {
                    // autocasts as new Extent()
                    xmin: -9177811,
                    ymin: 4247000,
                    xmax: -9176791,
                    ymax: 4247784,
                    spatialReference: 102100
                }
            });
            _this.routesLayer = new GraphicsLayer();
            //this.stopsLayer = new GraphicsLayer();
            _this.stopsLayer = new FeatureLayer({
                source: [],
                geometryType: 'point',
                objectIdField: "OBJECTID",
                fields: [{
                        name: "OBJECTID",
                        type: "oid"
                    }, {
                        name: "name",
                        type: "string"
                    }, {
                        name: "code",
                        type: "string"
                    }],
                labelingInfo: [{
                        // autocasts as new LabelClass()
                        symbol: {
                            type: "text",
                            color: "#cf2e19",
                            haloColor: "white",
                            haloSize: '2px',
                            font: {
                                size: 8,
                                weight: "bold"
                            }
                        },
                        minScale: 10000,
                        labelPlacement: "above-right",
                        labelExpressionInfo: {
                            expression: "$feature.name"
                        }
                    }],
                renderer: {
                    type: "simple",
                    symbol: {
                        type: "simple-marker",
                        style: "circle",
                        color: "#cf2e19",
                        size: "12px",
                        outline: {
                            color: "#ffffff",
                            width: 1
                        }
                    }
                }
            });
            _this.vehiclesLayer = new FeatureLayer({
                source: [],
                geometryType: 'point',
                objectIdField: "OBJECTID",
                fields: [{
                        name: "OBJECTID",
                        type: "oid"
                    }, {
                        name: "name",
                        type: "string"
                    }, {
                        name: "id",
                        type: "string"
                    }],
                labelingInfo: [{
                        // autocasts as new LabelClass()
                        symbol: {
                            type: "text",
                            color: "black",
                            haloColor: "white",
                            haloSize: '2px',
                            font: {
                                size: 12,
                                weight: "bold"
                            }
                        },
                        minScale: 100000,
                        labelPlacement: "above-center",
                        labelExpressionInfo: {
                            expression: "$feature.name"
                        }
                    }],
                renderer: {
                    type: "simple",
                    symbol: {
                        type: "picture-marker",
                        url: "data:image/png;base64,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",
                        height: "41px",
                        width: "25px",
                        yoffset: "20px"
                    }
                }
            });
            //  this.vehiclesLayer = new GraphicsLayer();
            _this.view.map.layers.add(_this.routesLayer);
            _this.view.map.layers.add(_this.stopsLayer);
            _this.view.map.layers.add(_this.vehiclesLayer);
            _this.view.ui.add(new Locate(), 'top-left');
            _this.view.when(function () {
                _this.getRoutes();
                _this.view.whenLayerView(_this.stopsLayer).then(function (layerView) {
                    _this.stopView = layerView;
                });
            });
        });
    };
    class_1.prototype.addVehiclesToMap = function (vehicles) {
        var _this = this;
        esriLoader_3(['esri/geometry/Point', 'esri/Graphic']).then(function (_a) {
            var Point = _a[0], Graphic = _a[1];
            //this.vehiclesLayer.graphics.removeAll();
            var graphics = [];
            vehicles.forEach(function (vehicle) {
                var point = new Point({ x: vehicle.location.lng, y: vehicle.location.lat, spatialReference: { wkid: 4326 } });
                var graphic = new Graphic({ geometry: point, attributes: { 'id': parseInt(vehicle.vehicle_id), 'name': vehicle.call_name } });
                //this.vehiclesLayer.graphics.add(graphic);
                graphics.push(graphic);
            });
            _this.vehiclesLayer.queryFeatures().then(function (result) {
                _this.vehiclesLayer.applyEdits({ deleteFeatures: result.features });
            });
            _this.vehiclesLayer.applyEdits({ addFeatures: graphics });
        });
    };
    class_1.prototype.addStopsToMap = function (stops) {
        var _this = this;
        esriLoader_3(['esri/geometry/Point', 'esri/Graphic']).then(function (_a) {
            var Point = _a[0], Graphic = _a[1];
            var graphics = [];
            stops.forEach(function (stop) {
                var point = new Point({ x: stop.location.lng, y: stop.location.lat, spatialReference: { wkid: 4326 } });
                var graphic = new Graphic({ attributes: { name: stop.name, code: stop.code }, geometry: point });
                graphics.push(graphic);
            });
            _this.stopsLayer.applyEdits({ addFeatures: graphics });
        });
    };
    class_1.prototype.addRouteToMap = function (paths) {
        var _this = this;
        esriLoader_3(['esri/geometry/Polyline', 'esri/Graphic']).then(function (_a) {
            var Polyline = _a[0], Graphic = _a[1];
            var line = new Polyline({ paths: paths, spatialReference: { wkid: 4326 } });
            var graphic = new Graphic({ geometry: line, symbol: {
                    type: "simple-line",
                    color: { r: 207, g: 46, b: 25, a: 0.5 },
                    width: "3px",
                    style: "solid"
                } });
            _this.view.goTo(graphic);
            _this.routesLayer.graphics.add(graphic);
        });
    };
    class_1.prototype.getRoutes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, routes, route;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('https://transloc-api-1-2.p.mashape.com/routes.json?agencies=20', {
                            headers: { 'X-Mashape-Key': 'QcvihLtHdgmshtY0Yjsg7nytW4Iqp1MEy05jsnSqvl1Lqjt9eW' }
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        routes = _a.sent();
                        route = routes.data[20].filter(function (r) {
                            return r.short_name === _this.route;
                        })[0];
                        this.name = route.long_name;
                        console.log(route);
                        this.getSegments(route.route_id);
                        this.getStops(route.route_id);
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.getStops = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, stops, routeStops;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('https://transloc-api-1-2.p.mashape.com/stops.json?agencies=20', {
                            headers: { 'X-Mashape-Key': 'QcvihLtHdgmshtY0Yjsg7nytW4Iqp1MEy05jsnSqvl1Lqjt9eW' }
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        stops = _a.sent();
                        console.log(stops);
                        routeStops = stops.data.filter(function (s) {
                            return s.routes.indexOf(id) > -1;
                        });
                        this.addStopsToMap(routeStops);
                        this.getVehicles(id, routeStops);
                        setInterval(function () {
                            _this.getVehicles(id, routeStops);
                        }, 10000);
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.getVehicles = function (id, stops) {
        return __awaiter(this, void 0, void 0, function () {
            var response, vehiclesJson, vehicles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('https://transloc-api-1-2.p.mashape.com/vehicles.json?agencies=20&routes=' + id, {
                            headers: { 'X-Mashape-Key': 'QcvihLtHdgmshtY0Yjsg7nytW4Iqp1MEy05jsnSqvl1Lqjt9eW' }
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        vehiclesJson = _a.sent();
                        if (vehiclesJson.data) {
                            vehicles = vehiclesJson.data[20];
                            vehicles.forEach(function (vehicle) {
                                vehicle.arrival_estimates.forEach(function (est) {
                                    est.arriving_in = (new Date(est.arrival_at).getTime() - new Date().getTime()) / 60000;
                                    var minutes = Math.floor(est.arriving_in);
                                    var seconds = (est.arriving_in - minutes) * 60;
                                    if (minutes === 0) {
                                        est.arriving_label = Math.round(seconds) + ' seconds';
                                    }
                                    else {
                                        est.arriving_label = minutes + ' minutes ' + Math.round(seconds) + ' seconds';
                                    }
                                    var stop = stops.filter(function (s) {
                                        return s.stop_id === est.stop_id;
                                    });
                                    if (stop.length) {
                                        est.stop_name = stop[0].name;
                                        est.stop_code = stop[0].code;
                                    }
                                });
                            });
                            vehicles.forEach(function (vehicle) {
                                vehicle.arrival_estimates = vehicle.arrival_estimates.filter(function (est) {
                                    return est.arriving_in > 0 && est.arriving_in <= 20;
                                });
                            });
                            this.vehicles = __spreadArrays(vehicles);
                            this.addVehiclesToMap(this.vehicles);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.getSegments = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, segments, paths;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('https://transloc-api-1-2.p.mashape.com/segments.json?agencies=20&routes=' + id, {
                            headers: { 'X-Mashape-Key': 'QcvihLtHdgmshtY0Yjsg7nytW4Iqp1MEy05jsnSqvl1Lqjt9eW' }
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        segments = _a.sent();
                        paths = [];
                        Object.keys(segments.data).forEach(function (key) {
                            paths.push(_this.decodeSegment(segments.data[key]));
                        });
                        this.addRouteToMap(paths);
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.decodeSegment = function (encoded) {
        var len = encoded.length;
        var index = 0;
        var array = [];
        var lat = 0;
        var lng = 0;
        while (index < len) {
            var b = void 0;
            var shift = 0;
            var result = 0;
            do {
                b = encoded.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            var dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
            lat += dlat;
            shift = 0;
            result = 0;
            do {
                b = encoded.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            var dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));
            lng += dlng;
            array.push([lng * 1e-5, lat * 1e-5]);
        }
        return array;
    };
    class_1.prototype.zoomToBus = function (event) {
        var _this = this;
        console.log(event);
        this.vehiclesLayer.queryFeatures({ where: "id = '" + event.target.dataset.code + "'" }).then(function (result) {
            _this.view.goTo({ target: result.features, zoom: 16 });
        });
    };
    class_1.prototype.zoomToStop = function (event) {
        var _this = this;
        console.log(event);
        this.stopsLayer.queryFeatures({ where: "code = '" + event.target.dataset.code + "'" }).then(function (result) {
            _this.view.goTo({ target: result.features, zoom: 16 });
        });
    };
    class_1.prototype.highlightStop = function (event) {
        var _this = this;
        this.stopsLayer.queryFeatures({ where: "code = '" + event.target.dataset.code + "'" }).then(function (result) {
            if (_this.highlight) {
                _this.highlight.remove();
            }
            _this.highlight = _this.stopView.highlight(result.features);
        });
    };
    class_1.prototype.componentDidLoad = function () {
        this.initializeMap();
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "container" }, h("div", { id: "viewDiv" }), h("ol", { class: "stops o-layout-grid o-layout-grid--4" }, this.vehicles.map(function (vehicle) {
            return vehicle.arrival_estimates.length ? h("li", { class: "o-layout-grid__item" }, h("div", null, h("h3", { "data-code": vehicle.vehicle_id, onClick: function (ev) { return _this.zoomToBus(ev); } }, "Bus ", vehicle.call_name), h("div", null, vehicle.arrival_estimates.slice(0, 3).map(function (est) {
                return h("div", { onMouseOver: function (ev) { return _this.highlightStop(ev); }, onClick: function (ev) { return _this.zoomToStop(ev); } }, h("h5", { "data-code": est.stop_code }, est.stop_name), h("div", { "data-code": est.stop_code }, "Arriving in approximately ", est.arriving_label));
            })))) : h("div", null);
        }))));
    };
    Object.defineProperty(class_1, "style", {
        get: function () { return "\@import url(\"https://js.arcgis.com/4.13/esri/themes/light/main.css\");.container,body,html{height:100%;width:100%;margin:0;padding:0}.esri-view{height:50%;width:100%}.stops{height:50%}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { TransitMap as transit_map };
