import { IEnemy } from './i-enemy.js';

export class Dragon implements IEnemy {
    name: string;

    atk: number;

    def: number;

    clone(): IEnemy {
        return Object.assign(new Dragon, this);
    }
}
