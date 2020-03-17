import { Dawnbreaker } from '../sword/dawnbreaker.js';
import { Godslayer } from '../sword/godslayer.js';
import { HeavyScabbard } from '../scabbard/heavy-scabbard.js';
import { IScabbard } from '../scabbard/i-scabbard.js';
import { ISword } from '../sword/i-sword.js';
import { ISwordCreator } from './i-sword-factory.js';

export class HeavySwordFactory implements ISwordCreator {
    createSword(): ISword {
        const classes = [Dawnbreaker, Godslayer];

        return classes
            .map(c => new c)
            .reduce(
                (acc, cur) => !acc
                    ? cur
                    : cur.weight > acc.weight
                        ? cur
                        : acc,
                undefined);
    }

    createScabbard(): IScabbard {
        return new HeavyScabbard;
    }
}
