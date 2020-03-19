import { ISword } from './i-sword.js';

export interface ISwordCreator {
    create(): ISword;
}
