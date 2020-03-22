import { Dragon } from './dragon.js';
import { Goblin } from './goblin.js';
import { IEnemy } from './i-enemy.js';

const dragonPrototype = (() => {
    const enemy = new Dragon;
    enemy.name = 'Default Dragon';
    enemy.atk = 999;
    enemy.def = 777;

    return enemy;
})();

const goblinPrototype = (() => {
    const enemy = new Goblin;
    enemy.name = 'Default Goblin';
    enemy.atk = 9;
    enemy.def = 7;

    return enemy;
})();

const enemies = [
    dragonPrototype,
    cloneWithNewName(dragonPrototype, 'Drogon'),
    cloneWithNewName(dragonPrototype, 'Rhaegal'),
    cloneWithNewName(dragonPrototype, 'Viserion'),
    goblinPrototype,
    cloneWithNewName(goblinPrototype, 'Goblin1'),
    cloneWithNewName(goblinPrototype, 'Goblin2'),
    cloneWithNewName(goblinPrototype, 'Goblin3'),
];

enemies.forEach(e => console.log(e));

function cloneWithNewName(prototype: IEnemy, name: string): IEnemy {
    const clone = prototype.clone();
    clone.name = name;

    return clone;
}
