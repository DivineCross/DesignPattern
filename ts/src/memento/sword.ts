import { ISwordMemento } from './i-sword-memento.js';
import { SwordMemento } from './sword-memento.js';

export class Sword {
    atk: number;

    storeCost: number;

    constructor(atk: number, storeCost: number) {
        this.atk = atk;
        this.storeCost = storeCost;
    }

    store(): ISwordMemento {
        return new SwordMemento(this.atk);
    }

    restore(memento: ISwordMemento): void {
        this.atk = (memento as SwordMemento).atk;
    }

    enhance(): void {
        const ratio = 0.1;
        const diff = this.atk * (-1 + 2 * Math.random()) * ratio;
        this.atk = Math.round(this.atk + diff);
    }
}
