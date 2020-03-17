import { Calculator } from './calculator.js';
import { ISword } from './i-sword.js';

export class Godslayer implements ISword {
    name: string;

    element: string;

    damage: number;

    weight: number;

    constructor() {
        this.name = this.constructor.name;
        this.element = 'dark';
        this.damage = Calculator.vibrate(1000, 50);
        this.weight = Calculator.vibrate(100, 10);
    }
}
