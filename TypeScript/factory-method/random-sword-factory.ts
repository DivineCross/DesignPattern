import { Dawnbreaker } from './dawnbreaker.js';
import { Godslayer } from './godslayer.js';
import { ISword } from './i-sword.js';
import { ISwordCreator } from './i-sword-factory.js';
import { Peacekeeper } from './peacekeeper.js';

export class RandomSwordFactory implements ISwordCreator {
    create(): ISword {
        const classes = [Dawnbreaker, Godslayer, Peacekeeper];
        const index = Math.floor(Math.random() * classes.length);

        return new classes[index];
    }
}
