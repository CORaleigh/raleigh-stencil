import { Component, Prop, h, State } from '@stencil/core';
import { loadModules } from 'esri-loader';
@Component({
    tag: 'find-my-service',
    styleUrl: 'find-my-service.scss'
})
export class FindMyService {
    @Prop() categories: string;
    @Prop() layers: string;
    @Prop() council: boolean = false;
    @State() webmaps: any[] = [];
    @State() maps: any[] = [];
    @State() councilInfo: any[] = [];
    features: any[] = [];
    search: any;
    initializeMap() {
        loadModules(['esri/portal/Portal', 'esri/widgets/Search', 'esri/WebMap', 'esri/layers/FeatureLayer', 'esri/tasks/Locator']).then(([Portal, Search, WebMap, FeatureLayer, Locator]) => {
            this.search = new Search({
                container: 'searchDiv', includeDefaultSources: false,
                sources: [
                    {
                        locator: new Locator({url:"https://maps.raleighnc.gov/arcgis/rest/services/Locators/FindMyService/GeocodeServer"}),
                        placeholder:"Search by address"
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
            }).then((count: number) => {
                this.webmaps.forEach((map: any) => {
                    if (map.portalItem.title.includes('Leaf') && count === 0) {
                        console.log('Leaf collection not available outside city limits');
                    } else {
                        let featureCnt = 0;
                        let showLayers = [];
                        if (this.layers) {
                            showLayers = this.layers.split(',');
                        }  
                        let layers = [...[]];
                        map.layers.forEach((layer) => {
                            if (showLayers.length === 0 || showLayers.includes(layer.title)) {
                                layer.queryFeatures({ geometry: selection.result.feature.geometry, outFields: ['*'] }).then(featureSet => {
                                    layers = [...layers, { title: layer.title, features: featureSet.features, id: layer.id }]
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
                                                return -1
                                            }
                                            if (a.title > b.title) {
                                                return 0;
                                            }
                                        })
                                        maps = [...maps, { title: map.portalItem.title, featureCnt: featureCnt, layers: layers }]
                                    }
                                    if (maps.length === this.webmaps.length) {
                                        maps.sort((a, b) => {
                                            if (a.title < b.title) {
                                                return -1
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
                                        })
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
    loadModules(['esri/widgets/Feature']).then(([Feature]) => {
        setTimeout(() => {
            let widget = new Feature({ container: id });
            widget.graphic = feature;
        },200) ;        
    });
}
disconnectedCallback() {
    document.getElementById('councilDiv').innerHTML = '';   
}
render() {
    return this.council ? (<div><div id='searchDiv'></div>
    <div class="o-layout-sidebar-after o-layout-sidebar-after--tight">
    {this.councilInfo.map((info) => {
        return <div id="councilDiv" class="o-layout-sidebar-after__secondary">
        {this.loadFeatureWidget("councilDiv", info)}
        </div>
    })}
    <ol class="o-layout-grid o-layout-grid--3 o-layout-sidebar-after__primary">{this.maps.map((webmap) => {
        return webmap.featureCnt > 0 ? <li class="o-layout-grid__item"><div><h3>{webmap.title}</h3>
        {webmap.layers.map((layer) => {
            return layer.features.length > 0 ? <div>
            {layer.features.map((feature, i) => {
                return this.council && layer.title.includes('City Council') ?
                <div></div>
                :
                <div id={layer.id + '_' + i}>{this.loadFeatureWidget(layer.id + '_' + i, feature)}<br /></div>})}</div>
                : <div></div>
            })}
            </div></li>
            : <div></div>
        })}</ol></div></div>) :
        (<div><div id='searchDiv'></div>
        <div>
        <ol class="o-layout-grid o-layout-grid--3">{this.maps.map((webmap) => {
            return webmap.featureCnt > 0 ? <li class="o-layout-grid__item"><div><h3>{webmap.title}</h3>
            {webmap.layers.map((layer) => {
                return layer.features.length > 0 ? <div>
                {layer.features.map((feature, i) => {
                    return <div id={layer.id + '_' + i}>{this.loadFeatureWidget(layer.id + '_' + i, feature)}<br /></div>
                })}</div>
                : <div></div>
            })}
            </div></li>
            : <div></div>
        })}</ol></div></div>)
    }
}
