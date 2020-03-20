export interface IOvenState {
    turnOn(): string;

    turnOff(): string;

    start(): string;

    stop(): string;

    setTemperature(value: number): string;
}
