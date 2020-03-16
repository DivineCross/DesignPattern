import { IObserver } from './i-observer.js';
import { Hero } from './hero.js';

export class Dragon implements IObserver {
    #hero: Hero

    #state: string

    get state() { return this.#state; }

    constructor(hero: Hero) {
        this.#hero = hero;
    }

    update() {
        const canExecute = this.#hero.health <= Hero.MaxHealth * 0.2;

        this.#state = canExecute
            ? 'Executing'
            : 'Attacking';
    }
}
