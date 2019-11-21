import { r as registerInstance, h } from './core-ac2e091d.js';
import { e as esriLoader_3 } from './esri-loader-24201da0.js';

const FindMyService = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.council = false;
        this.webmaps = [];
        this.maps = [];
        this.councilInfo = [];
        this.features = [];
    }
    initializeMap() {
        esriLoader_3(['esri/portal/Portal', 'esri/widgets/Search', 'esri/WebMap', 'esri/layers/FeatureLayer', 'esri/tasks/Locator']).then(([Portal, Search, WebMap, FeatureLayer, Locator]) => {
            this.search = new Search({
                container: 'searchDiv', includeDefaultSources: false,
                sources: [
                    {
                        locator: new Locator({ url: "https://maps.raleighnc.gov/arcgis/rest/services/Locators/FindMyService/GeocodeServer" }),
                        placeholder: "Search by address"
                    }
                ]
            });
            this.search.on('select-result', (selection) => {
                this.maps = [...[]];
                let maps = [...[]];
                this.councilInfo = [...[]];
                new FeatureLayer({ url: "https://maps.raleighnc.gov/arcgis/rest/services/Planning/Jurisdictions/MapServer/0" }).queryFeatureCount({
                    geometry: selection.result.feature.geometry, outFields: ['*'],
                    where: "LONG_NAME = 'RALEIGH'"
                }).then((count) => {
                    this.webmaps.forEach((map) => {
                        if (map.portalItem.title.includes('Leaf') && count === 0) {
                            console.log('Leaf collection not available outside city limits');
                        }
                        else {
                            let featureCnt = 0;
                            let showLayers = [];
                            if (this.layers) {
                                showLayers = this.layers.split(',');
                            }
                            let layers = [...[]];
                            map.layers.forEach((layer) => {
                                if (showLayers.length === 0 || showLayers.includes(layer.title)) {
                                    layer.queryFeatures({ geometry: selection.result.feature.geometry, outFields: ['*'] }).then(featureSet => {
                                        layers = [...layers, { title: layer.title, features: featureSet.features, id: layer.id }];
                                        featureCnt += featureSet.features.length;
                                        if (this.council && layer.title.includes('City Council') && featureSet.features.length > 0) {
                                            console.log(featureSet.features[0]);
                                            featureSet.features[0].useDefaultPopupTemplate = false;
                                            featureSet.features[0].layer.popupTemplate.content[0].text = '<div style="padding:30px"><img alt="" src="{expression/expr0}" style="padding-right:1em;max-height:200px;"/>';
                                            featureSet.features[0].layer.popupTemplate.content[0].text += "<h5>{COUNCIL_PERSON}</h5><span>Raleigh City Council</span><div>District {COUNCIL_DIST}</div><div><a href='https://www.raleighnc.gov/services/government/city-council-and-committees'><span>Website </span></a></div></div>";
                                            featureSet.features[0].layer.popupTemplate.title = "";
                                            this.councilInfo.push(featureSet.features[0]);
                                        }
                                        if (layers.length === map.layers.length || showLayers.length === layers.length) {
                                            layers.sort((a, b) => {
                                                if (a.title < b.title) {
                                                    return -1;
                                                }
                                                if (a.title > b.title) {
                                                    return 0;
                                                }
                                            });
                                            maps = [...maps, { title: map.portalItem.title, featureCnt: featureCnt, layers: layers }];
                                        }
                                        if (maps.length === this.webmaps.length) {
                                            maps.sort((a, b) => {
                                                if (a.title < b.title) {
                                                    return -1;
                                                }
                                                if (a.title > b.title) {
                                                    return 0;
                                                }
                                            });
                                            this.maps = [...maps];
                                        }
                                    });
                                }
                            });
                        }
                    });
                });
            });
            const portal = new Portal();
            portal.load().then(() => {
                let queryParams = {
                    query: 'id: a8acaca3d4514d40bc7f302a8db291fb',
                    sortField: 'title'
                };
                portal.queryGroups(queryParams).then(result => {
                    if (result.results.length) {
                        queryParams = {
                            query: 'type: map',
                            sortField: 'title'
                        };
                        let categories = [];
                        if (this.categories) {
                            categories = this.categories.split(',');
                        }
                        result.results[0].queryItems(queryParams).then(result => {
                            if (result.results.length) {
                                result.results.forEach(item => {
                                    console.log(categories);
                                    if (categories.length === 0 || categories.includes(item.title)) {
                                        new WebMap({ portalItem: { id: item.id } }).loadAll().then(map => {
                                            map.layers.items.forEach((layer) => {
                                                layer.features = [];
                                            });
                                            map.featureCnt = 0;
                                            this.webmaps.push(map);
                                            if (this.webmaps.length === result.results.length) {
                                                this.webmaps = [...this.webmaps];
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
    }
    componentDidLoad() {
        this.webmaps = [];
        this.initializeMap();
    }
    componentWillLoad() {
        if (this.search) {
            this.search.destroy();
        }
        if (document.getElementById('searchDiv')) {
            document.getElementById('searchDiv').innerHTML = '';
        }
        this.maps = [...[]];
    }
    loadFeatureWidget(id, feature) {
        esriLoader_3(['esri/widgets/Feature']).then(([Feature]) => {
            setTimeout(() => {
                let widget = new Feature({ container: id });
                widget.graphic = feature;
            }, 200);
        });
    }
    disconnectedCallback() {
        document.getElementById('councilDiv').innerHTML = '';
    }
    render() {
        return this.council ? (h("div", null, h("div", { id: 'searchDiv' }), h("div", { class: "o-layout-sidebar-after o-layout-sidebar-after--tight" }, this.councilInfo.map((info) => {
            return h("div", { id: "councilDiv", class: "o-layout-sidebar-after__secondary" }, this.loadFeatureWidget("councilDiv", info));
        }), h("ol", { class: "o-layout-grid o-layout-grid--3 o-layout-sidebar-after__primary" }, this.maps.map((webmap) => {
            return webmap.featureCnt > 0 ? h("li", { class: "o-layout-grid__item" }, h("div", null, h("h3", null, webmap.title), webmap.layers.map((layer) => {
                return layer.features.length > 0 ? h("div", null, layer.features.map((feature, i) => {
                    return this.council && layer.title.includes('City Council') ?
                        h("div", null)
                        :
                            h("div", { id: layer.id + '_' + i }, this.loadFeatureWidget(layer.id + '_' + i, feature), h("br", null));
                }))
                    : h("div", null);
            })))
                : h("div", null);
        }))))) :
            (h("div", null, h("div", { id: 'searchDiv' }), h("div", null, h("ol", { class: "o-layout-grid o-layout-grid--3" }, this.maps.map((webmap) => {
                return webmap.featureCnt > 0 ? h("li", { class: "o-layout-grid__item" }, h("div", null, h("h3", null, webmap.title), webmap.layers.map((layer) => {
                    return layer.features.length > 0 ? h("div", null, layer.features.map((feature, i) => {
                        return h("div", { id: layer.id + '_' + i }, this.loadFeatureWidget(layer.id + '_' + i, feature), h("br", null));
                    }))
                        : h("div", null);
                })))
                    : h("div", null);
            })))));
    }
    static get style() { return "\@import url(\"https://js.arcgis.com/4.13/esri/themes/light/main.css\");\nbody, html {\n  width: 100%;\n  color: #333;\n  font-family: \"Merriweather\", serif !important;\n  padding: 1em;\n}\n\ninput, textarea {\n  font-size: 0.88889rem !important;\n  border: 1px solid #999 !important;\n  border-top-color: #333 !important;\n  max-width: 100% !important;\n  padding: 0.5rem 0.66667rem !important;\n  -webkit-transition: all 0.2s ease-out !important;\n  transition: all 0.2s ease-out !important;\n}\n\ninput:focus, textarea:focus {\n  line-height: 22px !important;\n}\n\n.esri-search__input-container {\n  height: 100% !important;\n}\n\n\@media (min-width: 37.5em) {\n  input, textarea {\n    font-size: 0.77778rem !important;\n  }\n}\n\@media (min-width: 37.5em) {\n  input, textarea {\n    padding: 0.66667rem 1rem !important;\n  }\n}\nbutton, input, optgroup, select, textarea {\n  color: inherit !important;\n  font: inherit !important;\n  margin: 0 !important;\n  font-size: 1rem !important;\n  color: #333 !important;\n  font-family: \"Merriweather\", serif !important;\n  width: 100%;\n}\n\n.esri-search {\n  width: 100% !important;\n  -ms-flex-flow: row nowrap !important;\n  flex-flow: row nowrap !important;\n  -ms-flex-pack: center !important;\n  justify-content: center !important;\n  -ms-flex-align: center !important;\n  align-items: center !important;\n  overflow: visible !important;\n  line-height: 22px !important;\n  -webkit-transition: none !important;\n  transition: none !important;\n}\n\n.esri-search__submit-button {\n  background-color: #4C8C2B !important;\n  border: 1px solid #4C8C2B !important;\n  color: #fff !important;\n  font-size: 0.83333rem !important;\n  font-family: \"Typold W05\", sans-serif !important;\n  font-weight: 500 !important;\n  letter-spacing: 0.1em !important;\n  line-height: 1rem !important;\n  padding: 0.5rem 0.66667rem !important;\n  text-transform: uppercase !important;\n  height: 50px !important;\n  width: 120px !important;\n}\n\n.esri-input[type=text] {\n  border: none !important;\n  -ms-flex-flow: row nowrap !important;\n  flex-flow: row nowrap !important;\n  -ms-flex-pack: center !important;\n  justify-content: center !important;\n  -ms-flex-align: center !important;\n  align-items: center !important;\n  overflow: visible !important;\n  padding: 12px 18px !important;\n  -webkit-transition: none !important;\n  transition: none !important;\n  height: 48px !important;\n}\n\n.esri-input[type=text]:focus-within {\n  -webkit-box-shadow: none !important;\n  box-shadow: none !important;\n  outline: none;\n}\n\n.esri-search__input-container {\n  border-top-color: #333 !important;\n  border: 1px solid #999 !important;\n}\n\n.esri-search__input-container:focus-within {\n  border-color: #01426A !important;\n  -webkit-box-shadow: 0 1px 5px 2px rgba(1, 66, 106, 0.25) !important;\n  box-shadow: 0 1px 5px 2px rgba(1, 66, 106, 0.25) !important;\n  outline: none !important;\n}\n\n.esri-menu__list-item {\n  color: #333;\n  font-family: \"Merriweather\", serif !important;\n}\n\n.esri-icon-search:before {\n  content: \"SEARCH\" !important;\n  background-color: #4C8C2B;\n  border: 1px solid #4C8C2B;\n  color: #fff;\n  font-size: 0.83333rem;\n  font-family: \"Typold W05\", sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.1em;\n  line-height: 1rem;\n  padding: 0.5rem 0.66667rem;\n  text-transform: uppercase;\n}\n\n.esri-feature {\n  background: none !important;\n  font-family: \"Merriweather\", serif !important;\n}\n\n\@media (min-width: 37.5em) {\n  body {\n    font-size: 1rem !important;\n  }\n}\n.esri-search__clear-button:hover {\n  background: none !important;\n}\n\n.esri-icon-close {\n  height: 100%;\n}"; }
};

export { FindMyService as find_my_service };
