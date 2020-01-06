export declare class TransitMap {
    route: string;
    map: string;
    name: any[];
    view: any;
    stopsLayer: any;
    routesLayer: any;
    vehiclesLayer: any;
    stopView: any;
    vehiclesLoaded: boolean;
    vehicles: any[];
    initializeMap(): void;
    addVehiclesToMap(vehicles: any): void;
    addStopsToMap(stops: any): void;
    addRouteToMap(paths: any): void;
    getRoutes(): Promise<void>;
    getStops(id: any): Promise<void>;
    getVehicles(id: any, stops: any): Promise<void>;
    getSegments(id: any): Promise<void>;
    decodeSegment(encoded: any): any[];
    zoomToBus(event: any): void;
    zoomToStop(event: any): void;
    highlight: any;
    highlightStop(event: any): void;
    componentDidLoad(): void;
    render(): any;
}
