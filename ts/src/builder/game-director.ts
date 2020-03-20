import { Game } from './game.js';
import { IGameBuilder } from './i-game-builder.js';

export class GameDirector {
    private builder: IGameBuilder;

    constructor(builder: IGameBuilder) {
        this.builder = builder;
    }

    construct(): Game {
        this.builder.buildBoss();
        this.builder.buildHero();
        this.builder.buildMinions();

        return this.builder.getResult();
    }
}
