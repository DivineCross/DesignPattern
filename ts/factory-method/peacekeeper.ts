import { Calculator } from './calculator.js';
import { ISword } from './i-sword.js';

export class Peacekeeper implements ISword {
    name: string;

    element: string;

    damage: number;

    weight: number;

    constructor() {
        this.name = this.constructor.name;
        this.element = 'fire';
        this.damage = Calculator.vibrate(600, 50);
        this.weight = Calculator.vibrate(10, 1);
    }
}
