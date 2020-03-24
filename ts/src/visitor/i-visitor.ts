import { CatGroup } from './cat-group.js';
import { LionGroup } from './lion-group.js';

export interface IVisitor {
    visitCat(catGroup: CatGroup): void;

    visitLion(lionGroup: LionGroup): void;

    getResult(): string;
}
