import { Pet } from './pet.js';

export class Cat extends Pet {
    constructor(name: string, age: number) {
        super(name, age);
    }
}
