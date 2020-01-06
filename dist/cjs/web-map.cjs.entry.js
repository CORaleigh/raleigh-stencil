'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-7a9a1188.js');
const esriLoader = require('./esri-loader-e1a1b18f.js');

const WebMap = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
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
        this.searchLoaded = (search, mapView) => {
            if (this.address) {
                search.search(this.address);
            }
            search.goToOverride = (view, goToParams) => {
                if (this.zoom) {
                    goToParams.target.zoom = this.zoom;
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
        this.setPopupConfig = () => {
            return {
                highlightEnabled: this.highlight,
                dockEnabled: this.popupdocked,
                dockOptions: {
                    position: this.dockposition,
                    buttonEnabled: false,
                    breakpoint: false
                }
            };
        };
        this.disableNavigation = (mapView) => {
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
        this.featureClicked = (feature) => {
            debugger;
            this.mapView.goTo(feature);
        };
    }
    async initializeMap() {
        try {
            const [WebMap, Map, MapView] = await esriLoader.esriLoader_3([
                'esri/WebMap',
                'esri/Map',
                'esri/views/MapView'
            ]);
            let map;
            if (this.mapId) {
                map = new WebMap({ portalItem: { id: this.mapId } });
            }
            else {
                map = new Map({ basemap: this.basemap });
            }
            return new MapView({ map: map, container: this.divId, popup: this.setPopupConfig() });
        }
        catch (error) {
            console.log('EsriLoader: ', error);
        }
    }
    async initializeScene() {
        try {
            const [WebMap, WebScene, SceneView] = await esriLoader.esriLoader_3([
                'esri/WebMap',
                'esri/WebScene',
                'esri/views/SceneView'
            ]);
            let map;
            if (this.mapId) {
                map = new WebMap({ portalItem: { id: this.mapId } });
            }
            if (this.sceneId) {
                map = new WebScene({ portalItem: { id: this.sceneId } });
            }
            return new SceneView({ map: map, container: this.element, popup: this.setPopupConfig() });
        }
        catch (error) {
            console.log('EsriLoader: ', error);
        }
    }
    async initializeSearch(mapView) {
        try {
            const [Search] = await esriLoader.esriLoader_3([
                'esri/widgets/Search'
            ]);
            let search = new Search({ view: mapView, container: document.createElement("div"), popupEnabled: this.popup, resultGraphicEnabled: false });
            if (this.search) {
                mapView.ui.add({ component: search, position: 'top-left' });
            }
            return search;
        }
        catch (error) {
            console.log('EsriLoader: ', error);
        }
    }
    async initializeLayerList(mapView) {
        try {
            const [LayerList, Expand] = await esriLoader.esriLoader_3([
                'esri/widgets/LayerList',
                'esri/widgets/Expand'
            ]);
            let layerlist = new LayerList({ view: mapView, container: document.createElement("div") });
            if (this.collapsewidgets) {
                mapView.ui.add({ component: new Expand({ view: mapView, group: 'top-right', expandTooltip: 'Layers',
                        expandIconClass: "esri-icon-layers", content: layerlist.domNode, expanded: this.expandedwidget === 'layerlist' && ["xsmall"].indexOf(mapView.widthBreakpoint) === -1 }), position: 'top-right' });
            }
            else {
                mapView.ui.add({ component: layerlist, position: 'top-right' });
            }
        }
        catch (error) {
            console.log('EsriLoader: ', error);
        }
    }
    async initializeBaseMapGallery(mapView) {
        try {
            const [BasemapGallery, Expand] = await esriLoader.esriLoader_3([
                'esri/widgets/BasemapGallery',
                'esri/widgets/Expand'
            ]);
            let gallery = new BasemapGallery({ view: mapView, container: document.createElement("div") });
            if (this.collapsewidgets) {
                mapView.ui.add({ component: new Expand({ view: mapView, group: 'top-right', expandTooltip: 'Basemap Gallery',
                        expandIconClass: "esri-icon-basemap", content: gallery.domNode, expanded: this.expandedwidget === 'basemap' && ["xsmall"].indexOf(mapView.widthBreakpoint) === -1 }), position: 'top-right' });
            }
            else {
                mapView.ui.add({ component: gallery, position: 'top-right' });
            }
        }
        catch (error) {
            console.log('EsriLoader: ', error);
        }
    }
    async initializeLegend(mapView) {
        try {
            const [Legend, Expand] = await esriLoader.esriLoader_3([
                'esri/widgets/Legend',
                'esri/widgets/Expand'
            ]);
            let legend = new Legend({ view: mapView, container: document.createElement("div") });
            if (this.collapsewidgets) {
                mapView.ui.add({ component: new Expand({ view: mapView, group: 'top-right', expandTooltip: 'Legend',
                        expandIconClass: "esri-icon-layer-list", content: legend.domNode, expanded: this.expandedwidget === 'legend' && ["xsmall"].indexOf(mapView.widthBreakpoint) === -1 }), position: 'top-right' });
            }
            else {
                mapView.ui.add({ component: legend, position: 'top-right' });
            }
        }
        catch (error) {
            console.log('EsriLoader: ', error);
        }
    }
    query(mapView) {
        mapView.on('layerview-create', (layerView) => {
            if (layerView.layer.title === this.querylayer) {
                if (this.filter) {
                    layerView.layer.definitionExpression = this.querywhere;
                    layerView.layer.refresh();
                }
                layerView.layer.queryFeatures({ where: this.querywhere, returnGeometry: true, outSpatialReference: mapView.spatialReference, outFields: ['*'] }).then(result => {
                    if (result.features.length) {
                        let target = { target: result.features };
                        if (this.zoom) {
                            target.zoom = this.zoom;
                        }
                        mapView.goTo(target, { duration: 2500 });
                        if (this.popup) {
                            mapView.popup.open({ features: result.features });
                        }
                        debugger;
                        this.features = [...result.features];
                    }
                });
            }
        });
    }
    componentDidLoad() {
        this.divId = this.getRandomString();
        if (this.darkMode) {
            esriLoader.esriLoader_5('https://js.arcgis.com/4.13/esri/themes/dark/main.css');
        }
        this.initializeMap().then((mapView => {
            this.mapView = mapView;
            mapView.ui.remove('zoom');
            if (this.zoom && !this.querylayer) {
                mapView.zoom = this.zoom;
            }
            if (this.querylayer && this.querywhere) {
                this.query(mapView);
            }
            if (!this.navigate) {
                this.disableNavigation(mapView);
            }
            if (this.search || this.address) {
                this.initializeSearch(mapView).then(search => this.searchLoaded(search, mapView));
            }
            if (this.layerlist) {
                this.initializeLayerList(mapView);
            }
            if (this.basemapselect) {
                this.initializeBaseMapGallery(mapView);
            }
            if (this.legend) {
                this.initializeLegend(mapView);
            }
        }));
    }
    loadFeatureWidget(id, feature) {
        esriLoader.esriLoader_3(['esri/widgets/Feature']).then(([Feature]) => {
            setTimeout(() => {
                let widget = new Feature({ container: id });
                widget.graphic = feature;
            }, 200);
        });
    }
    render() {
        return core.h("div", { class: "container" }, core.h("div", { class: (this.list) ? 'list-mode map' : '', id: this.divId }), core.h("div", { class: (this.list) ? 'list-mode list' : '' }, this.features.map(feature => {
            return core.h("div", { onClick: () => { this.featureClicked(feature); }, id: this.divId + '_list_' + feature.attributes['OBJECTID'] }, this.loadFeatureWidget(this.divId + '_list_' + feature.attributes['OBJECTID'], feature));
        })));
    }
    get element() { return core.getElement(this); }
    static get style() { return "\@import url(\"https://js.arcgis.com/4.13/esri/themes/light/main.css\");.esri-view{height:100%;width:100%}.list-mode{max-height:50%;overflow:auto}\@media only screen and (min-width:800px){.list-mode.list{max-width:400px}.list-mode.list,.list-mode.map{max-height:100%;overflow:auto;float:left}.list-mode.map{max-width:calc(100% - 400px)}}:host{position:absolute;left:0;right:0;bottom:0;top:0}.container,body,html{height:100%;width:100%;margin:0;font-family:sans-serif}"; }
};

exports.web_map = WebMap;
