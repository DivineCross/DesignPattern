import { Context } from './context.js';
import { IExpression } from './i-expression.js';

export class VariableExpression implements IExpression {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    interpret(context: Context): number {
        return context.getValue(this.name);
    }
}
