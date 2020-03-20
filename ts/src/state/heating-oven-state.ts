import { IOvenState } from './i-oven-state.js';
import { OnOvenState } from './on-oven-state.js';
import { Oven } from './oven.js';

export class HeatingOvenState implements IOvenState {
    private oven: Oven;

    constructor(oven: Oven) {
        this.oven = oven;
    }

    turnOn(): string {
        return 'Oven is already on and heating';
    }

    turnOff(): string {
        return 'Oven can not be turned off while heating';
    }

    start(): string {
        return 'Oven is already heating';
    }

    stop(): string {
        this.oven.setState(new OnOvenState(this.oven));

        return 'Oven stops heating';
    }

    setTemperature(value: number): string {
        return `Oven is now set up with temperature ${value}`;
    }
}
