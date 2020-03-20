import { Cat } from './cat.js';
import { CatFamily } from './cat-family.js';
import { IIterator } from './i-iterator.js';

export class CatIterator implements IIterator<Cat> {
    #catFamily: CatFamily;

    #catQueue: Cat[];

    constructor(catFamily: CatFamily) {
        this.#catFamily = catFamily;
        this.#catQueue = undefined;
    }

    getCurrent(): Cat {
        const hasCurrent = this.#catQueue && this.#catQueue.length > 0;
        if (!hasCurrent)
            throw new Error('No cat is available.');

        return this.#catQueue[0];
    }

    hasNext(): boolean {
        if (!this.#catFamily)
            return this.#catFamily.getCats().length > 0;

        return this.#catQueue.length > 1 || this.#catQueue[0].children.length > 0;
    }

    moveNext(): boolean {
        if (!this.#catQueue) {
            this.#catQueue = this.#catFamily.getCats();
        } else {
            const first = this.#catQueue.shift();
            if (first && first.children)
                this.#catQueue.push(...first.children);
        }

        return this.#catQueue.length > 0;
    }
}
