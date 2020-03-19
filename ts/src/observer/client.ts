import { Hero } from './hero.js';
import { Healer } from './healer.js';
import { Dragon } from './dragon.js';

const hero = new Hero;
const healer = new Healer(hero);
const dragon = new Dragon(hero);

const notifyAndInspect = () => {
    hero.notify();

    console.log(`Hero's health: ${hero.health}`);
    console.log(`Healer's state: ${healer.state}`);
    console.log(`Dragon's state: ${dragon.state}`);
    console.log();
};

hero.register(healer);
hero.register(dragon);
notifyAndInspect();

hero.takeDamage(20);
notifyAndInspect();

hero.takeDamage(70);
notifyAndInspect();

hero.takeHealing(1000);
notifyAndInspect();
