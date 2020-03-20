import { Cat } from './cat.js';
import { CatIterator } from './cat-iterator.js';
import { IIterable } from './i-iterable.js';
import { IIterator } from './i-iterator.js';

export class CatFamily implements IIterable<Cat> {
    #cats: Cat[];

    constructor(cats: Cat[] = []) {
        this.#cats = cats;
    }

    getIterator(): IIterator<Cat> {
        return new CatIterator(this);
    }

    getCats(): Cat[] {
        return this.#cats;
    }
}
