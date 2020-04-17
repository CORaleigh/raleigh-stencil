import { WaterUsageSlider } from './water-usage-slider';
export declare class WaterUsageQuestion {
    sliders: WaterUsageSlider[];
    multiplier: number;
    gallons: number;
    ccfUnits: number;
    constructor(multiplier: number, gallons: number, ccfUnits: number, sliders: WaterUsageSlider[]);
}
