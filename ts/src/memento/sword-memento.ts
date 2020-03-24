import { ISwordMemento } from './i-sword-memento.js';

export class SwordMemento implements ISwordMemento {
    atk: number;

    constructor(atk: number) {
        this.atk = atk;
    }
}
