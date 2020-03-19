import { Dawnbreaker } from './dawnbreaker.js';
import { Godslayer } from './godslayer.js';
import { ISword } from './i-sword.js';
import { ISwordCreator } from './i-sword-factory.js';
import { Peacekeeper } from './peacekeeper.js';

export class StrongSwordFactory implements ISwordCreator {
    create(): ISword {
        const classes = [Dawnbreaker, Godslayer, Peacekeeper];

        return classes
            .map(c => new c)
            .reduce(
                (acc, cur) => !acc
                    ? cur
                    : cur.damage > acc.damage
                        ? cur
                        : acc,
                undefined);
    }
}
