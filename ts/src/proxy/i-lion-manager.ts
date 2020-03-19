import { Lion } from './lion.js';

export interface ILionManager {
    getLions(): Lion[];

    add(name: string): void;

    remove(name: string): void;
}
