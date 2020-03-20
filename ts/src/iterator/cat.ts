import { IAnimal } from './i-animal.js';

export class Cat implements IAnimal {
    name: string;

    children: Cat[];

    constructor(name: string = '', children: Cat[] = []) {
        this.name = name;
        this.children = children;
    }
}
