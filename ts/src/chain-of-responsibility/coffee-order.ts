export class CoffeeOrder {
    iceLevel: number;

    milkLevel: number;

    isIceAdded: boolean;

    isMilkAdded: boolean;

    isCompleted: boolean;

    constructor(iceLevel: number = 0, milkLevel: number = 0) {
        this.iceLevel = iceLevel;
        this.milkLevel = milkLevel;
    }
}
