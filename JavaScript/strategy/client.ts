import { Hero } from './hero.js';
import { IceSkill } from './ice-skill.js';
import { FireSkill } from './fire-skill.js';

const hero = new Hero;

[undefined, IceSkill, FireSkill]
    .map(s => s ? new s : undefined)
    .flatMap(s => [
        `Equip '${hero.equipSkill(s)}'`,
        `Cast '${hero.attack()}'`,
        '',
    ])
    .forEach(log => console.log(log));
