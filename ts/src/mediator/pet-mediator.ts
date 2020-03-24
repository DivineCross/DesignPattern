import { CutePetTrader } from './cute-pet-trader.js';
import { IPetMediator } from './i-pet-mediator.js';
import { IPetTrader } from './i-pet-owner.js';
import { Pet } from './pet.js';
import { StrongPetTrader } from './strong-pet-trader.js';

export class PetMediator implements IPetMediator {
    private pets: Pet[] = [];

    private traders: IPetTrader[] = [];

    private logs: string[] = [];

    put(pet: Pet): void {
        if (this.pets.includes(pet))
            return;

        this.pets.push(pet);
        this.logs.push(`'${pet.name}' is put`);

        this.match();
    }

    call(trader: IPetTrader): void {
        if (this.traders.includes(trader))
            return;

        this.traders.push(trader);
        this.logs.push(`'${trader.name}' calls`);

        this.match();
    }

    getPets(): Pet[] {
        return this.pets;
    }

    getLogs(): string[] {
        return this.logs;
    }

    private match(): void {
        this.pets = this.pets.filter(p => {
            let hasMatch = false;

            this.traders = this.traders.filter(t => {
                if (hasMatch)
                    return true;

                hasMatch = this.isMatch(p, t);
                if (hasMatch) {
                    t.receive(p);
                    this.logs.push(`'${t.name}' receives '${p.name}'`);
                }

                return !hasMatch;
            });

            return !hasMatch;
        });
    }

    private isMatch(pet: Pet, trader: IPetTrader): boolean {
        return (pet.isCute && trader instanceof CutePetTrader)
            || (pet.isStrong && trader instanceof StrongPetTrader);
    }
}
