import { IIterator } from './i-iterator.js';
import { Lion } from './lion.js';
import { LionHerd } from './lion-herd.js';

export class LionIterator implements IIterator<Lion> {
    #lionHerd: LionHerd;

    #index: number;

    constructor(lionHerd: LionHerd) {
        this.#lionHerd = lionHerd;
        this.#index = -1;
    }

    private get lions() { return this.#lionHerd.getLions(); }

    getCurrent(): Lion {
        let hasCurrent = 0 <= this.#index && this.#index < this.lions.length;
        if (!hasCurrent)
            throw new Error('No lion is available.');

        return this.lions[this.#index];
    }

    hasNext(): boolean {
        return this.#index < this.lions.length - 1;
    }

    moveNext(): boolean {
        ++this.#index;

        return this.#index < this.lions.length;
    }
}
