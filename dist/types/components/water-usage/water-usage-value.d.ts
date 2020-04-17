import { WaterUsageQuestion } from './water-usage-question';
export declare class WaterUsageValue {
    title: string;
    label: string;
    questions: WaterUsageQuestion[];
    constructor(title: string, label: string, questions: WaterUsageQuestion[]);
}
