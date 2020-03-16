import { IObserver } from './i-observer.js';
import { Hero } from './hero.js';

export class Healer implements IObserver {
    #hero: Hero

    #state: string

    get state() { return this.#state; }

    constructor(hero: Hero) {
        this.#hero = hero;
    }

    update() {
        const isDanger = this.#hero.health <= Hero.MaxHealth * 0.5;

        this.#state = isDanger
            ? 'Healing'
            : 'Attacking';
    }
}
