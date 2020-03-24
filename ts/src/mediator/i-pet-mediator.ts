import { IPetTrader } from './i-pet-owner.js';
import { Pet } from './pet.js';

export interface IPetMediator {
    put(pet: Pet): void;

    call(trader: IPetTrader): void;
}
