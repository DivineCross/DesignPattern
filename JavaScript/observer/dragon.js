import { IObserver } from './i-observer.js';
import { Hero } from './hero.js';

export class Dragon extends IObserver {
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
        const canExecute = this.#hero.health <= Hero.MaxHealth * 0.2;

        this.#state = canExecute
            ? 'Executing'
            : 'Attacking';
    }
}
