import { IPetMediator } from './i-pet-mediator.js';
import { IPetTrader } from './i-pet-owner.js';
import { Pet } from './pet.js';

export class CutePetTrader implements IPetTrader {
    private readonly mediator: IPetMediator;

    readonly name: string;

    readonly receivedPets: Pet[];

    constructor(mediator: IPetMediator, name: string) {
        this.mediator = mediator;
        this.name = name;
        this.receivedPets = [];
    }

    put(pet: Pet): void {
        this.mediator.put(pet);
    }

    call(): void {
        this.mediator.call(this);
    }

    receive(pet: Pet): void {
        this.receivedPets.push(pet);
    }
}
