import { IAnimal } from './i-animal.js';

export class Lion implements IAnimal {
    name: string;

    constructor(name: string = '') {
        this.name = name;
    }
}
