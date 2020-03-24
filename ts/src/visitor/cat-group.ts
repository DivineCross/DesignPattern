import { Cat } from './cat.js';
import { IVisitable } from './i-visitable.js';
import { IVisitor } from './i-visitor.js';

export class CatGroup implements IVisitable {
    readonly cats: Cat[];

    constructor(cats: Cat[]) {
        this.cats = cats;
    }

    accept(visitor: IVisitor): void {
        return visitor.visitCat(this);
    }
}
