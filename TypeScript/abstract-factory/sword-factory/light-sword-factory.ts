import { Dawnbreaker } from '../sword/dawnbreaker.js';
import { IScabbard } from '../scabbard/i-scabbard.js';
import { ISword } from '../sword/i-sword.js';
import { ISwordCreator } from './i-sword-factory.js';
import { LightScabbard } from '../scabbard/light-scabbard.js';
import { Peacekeeper } from '../sword/peacekeeper.js';

export class LightSwordFactory implements ISwordCreator {
    createSword(): ISword {
        const classes = [Dawnbreaker, Peacekeeper];

        return classes
            .map(c => new c)
            .reduce(
                (acc, cur) => !acc
                    ? cur
                    : cur.weight < acc.weight
                        ? cur
                        : acc,
                undefined);
    }

    createScabbard(): IScabbard {
        return new LightScabbard;
    }
}
