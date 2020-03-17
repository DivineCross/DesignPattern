import { Calculator } from '../calculator.js';
import { IScabbard } from './i-scabbard.js';

export class HeavyScabbard implements IScabbard {
    weight: number;

    constructor() {
        this.weight = Calculator.vibrate(50, 10);
    }
}
