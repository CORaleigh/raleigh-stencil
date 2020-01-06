/// <reference types="arcgis-js-api" />
import { HTMLStencilElement } from '../../stencil.core';
import esri = __esri;
export declare class WebMap {
    element: HTMLStencilElement;
    mapId: string;
    sceneId: string;
    zoom: number;
    search: boolean;
    layerlist: boolean;
    legend: boolean;
    address: string;
    navigate: boolean;
    popup: boolean;
    querywhere: string;
    querylayer: string;
    filter: boolean;
    popupdocked: boolean;
    dockposition: string;
    highlight: boolean;
    scene: boolean;
    basemap: string;
    basemapselect: boolean;
    collapsewidgets: boolean;
    expandedwidget: string;
    center: string;
    darkMode: boolean;
    list: boolean;
    divId: string;
    features: any[];
    mapView: esri.MapView;
    initializeMap(): Promise<any>;
    initializeScene(): Promise<any>;
    initializeSearch(mapView: any): Promise<any>;
    initializeLayerList(mapView: any): Promise<void>;
    initializeBaseMapGallery(mapView: any): Promise<void>;
    initializeLegend(mapView: any): Promise<void>;
    getRandomString: () => string;
    searchLoaded: (search: any, mapView: esri.MapView) => void;
    setPopupConfig: () => {
        highlightEnabled: boolean;
        dockEnabled: boolean;
        dockOptions: {
            position: string;
            buttonEnabled: boolean;
            breakpoint: boolean;
        };
    };
    disableNavigation: (mapView: any) => void;
    query(mapView: any): void;
    componentDidLoad(): void;
    loadFeatureWidget(id: any, feature: any): void;
    featureClicked: (feature: any) => void;
    render(): any;
}
