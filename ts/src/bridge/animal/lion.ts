import { IAnimal } from './i-animal.js';

export class Lion implements IAnimal {
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
        return `${this.#name} is large, strong, and cute`;
    }
}
