import { CutePetTrader } from './cute-pet-trader.js';
import { Pet } from './pet.js';
import { PetMediator } from './pet-mediator.js';
import { StrongPetTrader } from './strong-pet-trader.js';

const petMediator = new PetMediator;
const cuteLucas = new CutePetTrader(petMediator, 'CuteLucas');
const cuteEhtan = new CutePetTrader(petMediator, 'CuteEthan');
const strongOwen = new StrongPetTrader(petMediator, 'StrongOwen');
const strongEzra = new StrongPetTrader(petMediator, 'StrongEzra');
const traders = [
    cuteLucas,
    cuteEhtan,
    strongOwen,
    strongEzra,
];

const cuteTiger = new Pet('CuteTiger', true, false);
const cuteLucky = new Pet('CuteLucky', true, false);
const strongAri = new Pet('StrongAri', false, true);
const strongLev = new Pet('StrongLev', false, true);
const cuteStrongLeo = new Pet('CuteStrongLeo', true, true);

// Pet: [Tiger]
cuteLucas.put(cuteTiger);

// Pet: [], Trader: [], Ethan gets Tiger
cuteEhtan.call();

// Pet: [], Trader: [Lucas]
cuteLucas.call();

// Pet: [Ari], Trader: [Lucas]
strongOwen.put(strongAri);

// Pet: [Ari], Trader: [], Lucas gets Leo
strongEzra.put(cuteStrongLeo);

// Pet: [Ari, Lucky], Trader: []
cuteLucas.put(cuteLucky);

// Pet: [Ari, Lucky, Lev], Trader: []
strongEzra.put(strongLev);

// Pet: [Ari, Lev], Trader: [], Lucas gets Lucky
cuteLucas.call();

// Pet: [Lev], Trader: [], Ezra gets Ari
strongEzra.call();

console.group(petMediator.constructor.name);
console.log(petMediator);
console.groupEnd();
console.log();

traders.forEach(t => {
    console.group(t.name);
    console.log(t.receivedPets);
    console.groupEnd();
    console.log();
});
