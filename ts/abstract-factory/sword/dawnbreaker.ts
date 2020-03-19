import { Calculator } from '../calculator.js';
import { ISword } from './i-sword.js';

export class Dawnbreaker implements ISword {
    name: string;

    element: string;

    damage: number;

    weight: number;

    constructor() {
        this.name = this.constructor.name;
        this.element = 'fire';
        this.damage = Calculator.vibrate(700, 100);
        this.weight = Calculator.vibrate(70, 0);
    }
}
