import { Enemy } from './enemy.js';
import { GameEnemyGenerator } from './game-enemy-generator.js';
import { GameMapLoader } from './game-map-loader.js';
import { GameVideoLoader } from './game-video-loader.js';

export class GameFacade {
    static readonly DefaultEnemyCount = 5;

    #mapLoader: GameMapLoader = new GameMapLoader;

    #videoLoader: GameVideoLoader = new GameVideoLoader;

    #enemyGenerator: GameEnemyGenerator = new GameEnemyGenerator;

    #enemies: Enemy[] = [];

    #logs: string[] = [];

    start() {
        this.#logs.push(this.#mapLoader.load());
        this.#logs.push(this.#videoLoader.load());

        this.#enemies = this.#enemyGenerator.generate(GameFacade.DefaultEnemyCount);
        this.#logs.push(`Generate ${this.#enemies.length} enemies`);
    }

    getState() {
        return this.#logs
            .concat('The following enemies are alive:')
            .concat(this.#enemies.map(e => e.name))
            .join('\n');
    }
}
