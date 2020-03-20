import { IIterable } from './i-iterable.js';
import { IIterator } from './i-iterator.js';
import { Lion } from './lion.js';
import { LionIterator } from './lion-iterator.js';

export class LionHerd implements IIterable<Lion> {
    #lions: Lion[];

    constructor(lions: Lion[] = []) {
        this.#lions = lions;
    }

    getIterator(): IIterator<Lion> {
        return new LionIterator(this);
    }

    getLions(): Lion[] {
        return this.#lions;
    }
}
