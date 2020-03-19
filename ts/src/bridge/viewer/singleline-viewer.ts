import { IAnimal } from '../animal/i-animal.js';
import { IViewer } from './i-viewer.js';

export class SinglelineViewer implements IViewer {
    #animal: IAnimal;

    constructor(animal: IAnimal) {
        this.#animal = animal;
    }

    display(): string {
        return [
            `"Name": ${this.#animal.getName()}`,
            `"Weight": ${this.#animal.getWeight()}`,
            `"Description": ${this.#animal.getDescription()}`,
        ].join(', ');
    }
}
