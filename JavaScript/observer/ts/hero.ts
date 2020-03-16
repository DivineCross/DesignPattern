import { IObservable } from './i-observable.js';
import { IObserver } from './i-observer.js';

export class Hero implements IObservable {
    #observers: IObserver[]

    #health: number

    constructor() {
        this.#observers = [];
        this.#health = Hero.MaxHealth;
    }

    static get MinHealth() { return 0; }

    static get MaxHealth() { return 100; }

    get health() { return this.#health; }

    register(observer: IObserver) {
        if (observer)
            this.#observers.push(observer);
    }

    unregister(observer: IObserver) {
        const index = this.#observers.indexOf(observer);
        if (index >= 0)
            this.#observers.splice(index, 1);
    }

    notify() {
        this.#observers.forEach(o => o.update());
    }

    takeDamage(v: number) {
        this.#health = Math.max(Hero.MinHealth, this.#health - v);
    }

    takeHealing(v: number) {
        this.#health = Math.min(Hero.MaxHealth, this.#health + v);
    }
}
