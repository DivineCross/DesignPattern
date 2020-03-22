import { IPrototype } from './i-prototype.js';

export interface IEnemy extends IPrototype<IEnemy> {
    name: string;

    atk: number;

    def: number;

    clone(): IEnemy;
}
