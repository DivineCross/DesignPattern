import { HeatingOvenState } from './heating-oven-state.js';
import { IOvenState } from './i-oven-state.js';
import { OffOvenState } from './off-oven-state.js';
import { Oven } from './oven.js';

export class OnOvenState implements IOvenState {
    private oven: Oven;

    constructor(oven: Oven) {
        this.oven = oven;
    }

    turnOn(): string {
        return 'Oven is already on';
    }

    turnOff(): string {
        this.oven.setState(new OffOvenState(this.oven));

        return 'Oven is off now';
    }

    start(): string {
        this.oven.setState(new HeatingOvenState(this.oven));

        return 'Oven is heating now';
    }

    stop(): string {
        return 'Oven can not stop before starting';
    }

    setTemperature(value: number): string {
        return `Oven is now set up with temperature ${value}`;
    }
}
