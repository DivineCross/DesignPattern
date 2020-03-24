import { Sword } from './sword.js';

export class Player {
    private logs: string[] = [];

    private sword: Sword;

    private money: number;

    constructor(sword: Sword, money: number) {
        this.sword = sword;
        this.money = money;
    }

    enhanceSword(): void {
        const cost = this.sword.storeCost;

        while (this.money > cost) {
            this.money -= cost;
            const memento = this.sword.store();
            const oldAtk = this.sword.atk;

            this.sword.enhance();
            const newAtk = this.sword.atk;
            const shouldRestore = newAtk < oldAtk;

            if (shouldRestore)
                this.sword.restore(memento);

            this.logs.push(
                `Before: ${oldAtk}, After: ${newAtk}`
                    + (shouldRestore ? ', Restored' : ''));
        }
    }
}
