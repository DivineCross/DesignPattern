import { Game } from './game.js';
import { IGameBuilder } from './i-game-builder.js';

export class HardGameBuilder implements IGameBuilder {
    private game: Game;

    constructor() {
        this.game = new Game;
    }

    buildHero(): void {
        this.game.hero = 'Hawkeye';
    }

    buildBoss(): void {
        this.game.boss = 'Thanos';
    }

    buildMinions(): void {
        this.game.minionCount = 500;
    }

    getResult(): Game {
        return this.game;
    }
}
