
import { WaterUsageSlider } from './water-usage-slider';
export class WaterUsageQuestion {
    sliders:WaterUsageSlider[];
    multiplier:number;
    gallons:number;
    ccfUnits:number;
    constructor(multiplier:number, gallons:number, ccfUnits:number,sliders:WaterUsageSlider[],) {
       this.sliders = sliders;
       this.multiplier = multiplier;
       this.gallons = gallons;
       this.ccfUnits = ccfUnits;
    }
 
    

}
