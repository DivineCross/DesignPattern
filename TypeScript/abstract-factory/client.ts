import { LightSwordFactory } from './sword-factory/light-sword-factory.js';
import { HeavySwordFactory } from './sword-factory/heavy-sword-factory.js';

const lightFactory = new LightSwordFactory;
const heavyFactory = new HeavySwordFactory;

[lightFactory, heavyFactory].forEach(f => {
    console.group(f.constructor.name);

    [...Array(2).keys()].forEach(i => {
        console.group(`Product Set ${i + 1}`);
        console.log(f.createSword());
        console.log(f.createScabbard());
        console.groupEnd();
    });

    console.groupEnd();
});
