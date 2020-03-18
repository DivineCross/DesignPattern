import { GameFacade } from './game-facade.js';

const game = new GameFacade;

game.start();
console.log(game.getState());
