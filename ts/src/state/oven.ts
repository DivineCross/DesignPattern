import { IOvenState } from './i-oven-state.js';
import { OffOvenState } from './off-oven-state.js';

export class Oven {
    private state: IOvenState;

    constructor() {
        this.state = new OffOvenState(this);
    }

    getState() {
        return this.state;
    }

    setState(state: IOvenState) {
        this.state = state;
    }

    turnOn(): string {
        return this.state.turnOn();
    }

    turnOff(): string {
        return this.state.turnOff();
    }

    start(): string {
        return this.state.start();
    }

    stop(): string {
        return this.state.stop();
    }

    setTemperature(value: number): string {
        return this.state.setTemperature(value);
    }
}
