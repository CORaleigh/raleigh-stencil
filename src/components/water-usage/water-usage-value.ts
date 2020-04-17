
import {WaterUsageQuestion} from './water-usage-question'
export class WaterUsageValue {
    title: string;
    label: string;
    questions:WaterUsageQuestion[];
    constructor(title:string, label:string, questions:WaterUsageQuestion[]) {
        this.title = title;
        this.label = label;
        this.questions = questions;
    }

}
