import { AddExpression } from './add-expression.js';
import { Context } from './context.js';
import { SubtractExpression } from './subtract-expression.js';
import { VariableExpression } from './variable-expression.js';

const context = (new Context)
    .setValue('x', 55)
    .setValue('y', 66)
    .setValue('z', 100);

const x = new VariableExpression('x');
const y = new VariableExpression('y');
const z = new VariableExpression('z');

// x - y + z + z
// 55 - 66 + 100 + 100
// = 189
const expr =
    new AddExpression(
        new AddExpression(
            new SubtractExpression(
                x,
                y),
            z),
        z);

console.log(expr.interpret(context));
