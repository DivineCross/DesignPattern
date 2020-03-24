import { IVisitable } from './i-visitable.js';
import { IVisitor } from './i-visitor.js';
import { Lion } from './lion.js';

export class LionGroup implements IVisitable {
    readonly lions: Lion[];

    constructor(lions: Lion[]) {
        this.lions = lions;
    }

    accept(visitor: IVisitor): void {
        return visitor.visitLion(this);
    }
}
