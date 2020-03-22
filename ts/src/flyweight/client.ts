import { LionInfoFactory } from './lion-info-factory.js';

const factory = new LionInfoFactory;

const infos = [
    factory.create('Leo', 'Leo'),
    factory.create('Leo', 'Cross'),
    factory.create('Zeus', 'Leo'),
    factory.create('Zeus', 'Cross'),
    factory.create('Leo', 'Cross'),
    factory.create('Zeus', 'Cross'),
];

infos.forEach(x => console.log(x.display()));
console.log();
console.log(`Info Count: ${factory.cachedCount}`);
