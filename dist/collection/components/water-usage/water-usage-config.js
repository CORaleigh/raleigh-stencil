import { WaterUsageValue } from './water-usage-value';
import { WaterUsageQuestion } from './water-usage-question';
import { WaterUsageSlider } from './water-usage-slider';
export class Config {
    constructor() {
        this.values = [new WaterUsageValue('Showers', 'An average shower user 5 gallons of water per minute', [new WaterUsageQuestion(4.33 * 5, 0, 0, [
                    new WaterUsageSlider('How many minutes does the average shower last in your household?', 0),
                    new WaterUsageSlider('How many showers are taken each week in your household?', 0)
                ])])];
        //     this.values = [
        //         {
        //             title: 'Showers',
        //             label: 'An average shower user 5 gallons of water per minute',
        //             questions: [
        //                 {
        //                     sliders: [
        //                         {
        //                             label: 'How many minutes does the average shower last in your household?',
        //                             value: 50
        //                         },
        //                         {
        //                             label: 'How many showers are taken each week in your household?',
        //                             value: 0
        //                         }                        
        //                     ],
        //                     multiplier: 4.33 * 5,
        //                     gallons: 0,
        //                     ccfUnits:0
        //                 }
        //             ]
        //         },
        //         {
        //             title: 'Baths',
        //             label: 'A full-tub bath uses 36 gallons of water; a half-tub bath uses 18 gallons of water.',
        //             questions: [
        //                 {
        //                     sliders: [
        //                         {
        //                             label: 'How many full-tub baths are taken each week in your household?',
        //                             value: 0
        //                         }                     
        //                     ],
        //                     multiplier: 4.33 * 36,
        //                     gallons: 0,
        //                     ccfUnits:0
        //                 },
        //                 {
        //                     sliders: [
        //                         {
        //                             label: 'How many half-tub baths are taken each week in your household?',
        //                             value: 0
        //                         }                
        //                     ],
        //                     multiplier: 4.33 * 18  ,
        //                     gallons: 0,
        //                     ccfUnits:0
        //                 }                
        //             ]
        //         },
        //         {
        //             title: 'Toilet Flushes',
        //             label: 'The average person flushes 4 times daily, using 3 gallons of water.per flush.',
        //             questions: [
        //                 {
        //                     sliders: [
        //                         {
        //                             label: 'How many people are in your household?',
        //                             value: 0
        //                         }                     
        //                     ],
        //                     multiplier: 30.4*12,
        //                     gallons: 0,
        //                     ccfUnits:0
        //                 }              
        //             ]
        //         },
        //         {
        //             title: 'Brushing Teeth',
        //             label: 'The average person uses 3 gallons of water each time they brush their teeth.',
        //             questions: [
        //                 {
        //                     sliders: [
        //                         {
        //                             label: 'How many times per day does each person brush their teeth?',
        //                             value: 0
        //                         }                     
        //                     ],
        //                     multiplier: 30.4*12,
        //                     gallons: 0,
        //                     ccfUnits:0
        //                 }              
        //             ]
        //         },
        //         {
        //             title: 'Shaving',
        //             label: 'The average shave uses 1 gallon of water.',
        //             questions: [
        //                 {
        //                     sliders: [
        //                         {
        //                             label: 'How many times per week does someone shave in your household?',
        //                             value: 0
        //                         }                     
        //                     ],
        //                     multiplier: 1*4.33,
        //                     gallons: 0,
        //                     ccfUnits:0
        //                 }              
        //             ]
        //         }             
        //     ]
    }
}
