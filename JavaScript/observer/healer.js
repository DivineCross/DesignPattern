import { IObserver } from './i-observer.js';
import { Hero } from './hero.js';

export class Healer extends IObserver {
    /** @type { Hero } */
    #hero

    /** @type { string } */
    #state

    get state() { return this.#state; }

    constructor(hero) {
        super();

        this.#hero = hero;
    }

    update() {
        const isDanger = this.#hero.health <= Hero.MaxHealth * 0.5;

        this.#state = isDanger
            ? 'Healing'
            : 'Attacking';
    }
}
