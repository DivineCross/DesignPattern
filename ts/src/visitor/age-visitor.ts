import { CatGroup } from './cat-group.js';
import { IVisitor } from './i-visitor.js';
import { LionGroup } from './lion-group.js';

export class AgeVisitor implements IVisitor {
    private result: string;

    visitCat(catGroup: CatGroup): void {
        this.result = catGroup.cats.map(x => x.age).join(', ');
    }

    visitLion(lionGroup: LionGroup): void {
        this.result = lionGroup.lions.map(x => x.age).join(', ');
    }

    getResult(): string {
        return this.result;
    }
}
