

export class WaterUsageSlider {
    label:string;
    value:number;
    max:number;
    gallons:number;
    ccfunits:number;

    constructor(label:string, value:number, max:number, gallons:number, ccfunits:number) {
        this.label = label;
        this.value = value;
        this.max = max;
        this.gallons = gallons;
        this.ccfunits = ccfunits;
        
    }
 
    

}
