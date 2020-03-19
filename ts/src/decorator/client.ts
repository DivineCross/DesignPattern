import { Bow } from './bow.js';
import { DoubleArrowDecorator } from './double-arrow-decorator.js';
import { FireArrowDecorator } from './fire-arrow-decorator.js';
import { IBow } from './i-bow.js';

const bow1 =
    new FireArrowDecorator(
        new Bow);
const bow2 =
    new DoubleArrowDecorator(
        new DoubleArrowDecorator(
            new Bow));

const inspect = (bow: IBow) => {
    console.log(bow.shoot());
    console.log();
};

[bow1, bow2].forEach(inspect);
