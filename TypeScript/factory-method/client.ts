import { RandomSwordFactory } from './random-sword-factory.js';
import { StrongSwordFactory } from './strong-sword-factory.js';

const randomFactory = new RandomSwordFactory;
const strongFactory = new StrongSwordFactory();

[randomFactory, strongFactory].forEach(f => {
    console.group(f.constructor.name);
    console.log(f);
    console.log(f.create());
    console.log(f.create());
    console.log();
    console.groupEnd();
});
