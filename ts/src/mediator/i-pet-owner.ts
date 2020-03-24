import { Pet } from './pet.js';

export interface IPetTrader {
    name: string;

    put(pet: Pet): void;

    call(): void;

    receive(pet: Pet): void;
}
