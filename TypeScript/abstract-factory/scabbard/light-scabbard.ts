import { Calculator } from '../calculator.js';
import { IScabbard } from './i-scabbard.js';

export class LightScabbard implements IScabbard {
    weight: number;

    constructor() {
        this.weight = Calculator.vibrate(5, 1);
    }
}
