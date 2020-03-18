import { Enemy } from './enemy.js';

export class GameEnemyGenerator {
    generate(count: number) {
        return [...Array(count).keys()]
            .map(i => new Enemy(`Goblin${i + 1}`));
    }
}
