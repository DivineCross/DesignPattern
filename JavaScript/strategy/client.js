import { Hero } from './hero.js';
import { ISkill } from './i-skill.js';
import { IceSkill } from './ice-skill.js';
import { FireSkill } from './fire-skill.js';

const hero = new Hero;

[ISkill, IceSkill, FireSkill]
    .map(s => new s)
    .flatMap(s => [
        `Equip '${hero.equipSkill(s)}'`,
        `Cast '${hero.attack()}'`,
        '',
    ])
    .forEach(log => console.log(log));
