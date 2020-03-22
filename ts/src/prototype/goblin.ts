import { IEnemy } from './i-enemy.js';

export class Goblin implements IEnemy {
    name: string;

    atk: number;

    def: number;

    clone(): IEnemy {
        return Object.assign(new Goblin, this);
    }
}
