import { IVisitor } from './i-visitor.js';

export interface IVisitable {
    accept(visitor: IVisitor): void;
}
