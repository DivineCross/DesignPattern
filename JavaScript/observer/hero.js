import { IObservable } from './i-observable.js';

export class Hero extends IObservable {
    /** @type { IObserver[] } */
    #observers

    /** @type { number } */
    #health

    constructor() {
        super();

        this.#observers = [];
        this.#health = Hero.MaxHealth;
    }

    static get MinHealth() { return 0; }

    static get MaxHealth() { return 100; }

    get health() { return this.#health; }

    register(observer) {
        if (observer)
            this.#observers.push(observer);
    }

    unregister(observer) {
        const index = this.#observers.indexOf(observer);
        if (index >= 0)
            this.#observers.splice(index, 1);
    }

    notify() {
        this.#observers.forEach(o => o.update());
    }

    takeDamage(v) {
        this.#health = Math.max(Hero.MinHealth, this.#health - v);
    }

    takeHealing(v) {
        this.#health = Math.min(Hero.MaxHealth, this.#health + v);
    }
}
