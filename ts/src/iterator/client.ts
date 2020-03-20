import { Cat } from './cat.js';
import { CatFamily } from './cat-family.js';
import { IAnimal } from './i-animal.js';
import { IIterator } from './i-iterator.js';
import { Lion } from './lion.js';
import { LionHerd } from './lion-herd.js';

const lionHerd = new LionHerd([
    new Lion('Leo'),
    new Lion('King'),
    new Lion('Ari'),
    new Lion('Zeus'),
]);

const catFamily = new CatFamily([
    new Cat('1-Oscar', [
        new Cat('2-Oscar-Max', [
            new Cat('3-Oscar-Max-Tiger'),
            new Cat('3-Oscar-Max-Sam'),
        ]),
        new Cat('2-Oscar-Misty'),
        new Cat('2-Oscar-Simba', [
            new Cat('3-Oscar-Simba-Tiger'),
        ]),
    ]),
    new Cat('1-Coco', [
        new Cat('2-Coco-Max', [
            new Cat('3-Coco-Max-Tiger', [
                new Cat('4-Coco-Max-Tiger-Milo'),
            ]),
        ]),
    ]),
    new Cat('1-Lucy'),
]);

const inspect = <T extends IAnimal>(iterator: IIterator<T>) => {
    console.group(iterator.constructor.name);

    while (iterator.moveNext())
        console.log((iterator.getCurrent() || {}).name);

    console.groupEnd();
    console.log();
};

inspect(lionHerd.getIterator());
inspect(catFamily.getIterator());
