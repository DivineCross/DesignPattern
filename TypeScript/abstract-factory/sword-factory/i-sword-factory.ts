import { IScabbard } from '../scabbard/i-scabbard.js';
import { ISword } from '../sword/i-sword.js';

export interface ISwordCreator {
    createSword(): ISword;

    createScabbard(): IScabbard;
}
