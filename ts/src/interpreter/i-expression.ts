import { Context } from './context.js';

export interface IExpression {
    interpret(context: Context): number;
}
