export class Calculator {
    static vibrate(base: number, amplitude: number): number {
        return Math.round(
            base - amplitude + (Math.random() * amplitude * 2));
    }
}
