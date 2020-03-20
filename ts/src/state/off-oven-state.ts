import { IOvenState } from './i-oven-state.js';
import { OnOvenState } from './on-oven-state.js';
import { Oven } from './oven.js';

export class OffOvenState implements IOvenState {
    private oven: Oven;

    constructor(oven: Oven) {
        this.oven = oven;
    }

    turnOn(): string {
        this.oven.setState(new OnOvenState(this.oven));

        return 'Oven is on now';
    }

    turnOff(): string {
        return 'Oven is already off';
    }

    start(): string {
        return 'Oven can not start before turning on';
    }

    stop(): string {
        return 'Oven can not stop before turning on';
    }

    setTemperature(value: number): string {
        return 'Oven can not set temperature before turning on';
    }
}
