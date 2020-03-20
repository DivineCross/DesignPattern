import { Game } from './game.js';
import { IGameBuilder } from './i-game-builder.js';

export class EasyGameBuilder implements IGameBuilder {
    private game: Game;

    constructor() {
        this.game = new Game;
    }

    buildHero(): void {
        this.game.hero = 'Iron Man';
    }

    buildBoss(): void {
        this.game.boss = 'Baron Strucker';
    }

    buildMinions(): void {
        this.game.minionCount = 5;
    }

    getResult(): Game {
        return this.game;
    }
}
