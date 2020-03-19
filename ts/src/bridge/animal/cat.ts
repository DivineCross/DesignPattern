import { IAnimal } from './i-animal.js';

export class Cat implements IAnimal {
    #name: string;

    #weight: number;

    constructor(name: string, weight: number) {
        this.#name = name;
        this.#weight = weight;
    }

    getName(): string {
        return this.#name;
    }

    getWeight(): number {
        return this.#weight;
    }

    getDescription(): string {
        return `${this.#name} is small and cute`;
    }
}
