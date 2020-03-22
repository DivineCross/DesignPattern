import { Context } from './context.js';
import { IExpression } from './i-expression.js';

export class AddExpression implements IExpression {
    private left: IExpression;

    private right: IExpression;

    constructor(left: IExpression, right: IExpression) {
        this.left = left;
        this.right = right;
    }

    interpret(context: Context): number {
        return this.left.interpret(context) + this.right.interpret(context);
    }
}
