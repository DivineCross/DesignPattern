import { Game } from './game.js';

export interface IGameBuilder {
    buildHero(): void;

    buildBoss(): void;

    buildMinions(): void;

    getResult(): Game;
}
