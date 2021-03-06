import { WaterUsageSlider } from './water-usage-slider';
export declare class WaterUsage {
    currentIndex: {
        index: number;
    };
    shower1: WaterUsageSlider;
    shower2: WaterUsageSlider;
    bath1: WaterUsageSlider;
    bath2: WaterUsageSlider;
    toilet: WaterUsageSlider;
    teeth: WaterUsageSlider;
    shaving: WaterUsageSlider;
    washing: WaterUsageSlider;
    dishwasher: WaterUsageSlider;
    dishes: WaterUsageSlider;
    clothes: WaterUsageSlider;
    outdoor: WaterUsageSlider;
    dripping: WaterUsageSlider;
    leaking: WaterUsageSlider;
    indoor: WaterUsageSlider;
    sliders: WaterUsageSlider[];
    shower1Input(event: any): void;
    shower2Input(event: any): void;
    bath1Input(event: any): void;
    bath2Input(event: any): void;
    toiletInput(event: any): void;
    teethInput(event: any): void;
    shavingInput(event: any): void;
    washingInput(event: any): void;
    dishwasherInput(event: any): void;
    dishesInput(event: any): void;
    clothesInput(event: any): void;
    outdoorInput(event: any): void;
    drippingInput(event: any): void;
    leakingInput(event: any): void;
    indoorInput(event: any): void;
    disconnectedCallback(): void;
    render(): any;
}
