import { Player } from './player.js';
import { Sword } from './sword.js';

const player = new Player(new Sword(111, 10), 123);

player.enhanceSword();

console.log(player);
