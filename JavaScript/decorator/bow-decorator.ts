import { IBow } from './i-bow.js';

export abstract class BowDecorator implements IBow {
    protected bow: IBow;

    constructor(bow: IBow) {
        this.bow = bow;
    }

    abstract shoot(): string;

    aim(): string {
        return this.bow.aim();
    }
}
