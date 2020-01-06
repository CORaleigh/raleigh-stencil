export declare class FindMyService {
    categories: string;
    layers: string;
    council: boolean;
    webmaps: any[];
    maps: any[];
    councilInfo: any[];
    features: any[];
    search: any;
    initializeMap(): void;
    componentDidLoad(): void;
    componentWillLoad(): void;
    loadFeatureWidget(id: any, feature: any): void;
    disconnectedCallback(): void;
    render(): any;
}
