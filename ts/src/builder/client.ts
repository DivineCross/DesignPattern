import { EasyGameBuilder } from './easy-game-builder.js';
import { GameDirector } from './game-director.js';
import { HardGameBuilder } from './hard-game-builder.js';

const builders = [
    new EasyGameBuilder,
    new HardGameBuilder,
];

builders.forEach(b => {
    const director = new GameDirector(b);

    console.group(b.constructor.name);
    console.log(director.construct());
    console.groupEnd();
    console.log();
});
