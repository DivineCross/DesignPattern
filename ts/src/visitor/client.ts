import { AgeVisitor } from './age-visitor.js';
import { Cat } from './cat.js';
import { CatGroup } from './cat-group.js';
import { Lion } from './lion.js';
import { LionGroup } from './lion-group.js';
import { NameVisitor } from './name-visitor.js';

const catGroup = new CatGroup([
    new Cat('Sam', 5),
    new Cat('Tiger', 6),
    new Cat('Max', 7),
    new Cat('Kitty', 8),
]);
const lionGroup = new LionGroup([
    new Lion('Leo', 10),
    new Lion('King', 11),
    new Lion('Zeus', 12),
    new Lion('Ari', 13),
]);

const ageVisitor = new AgeVisitor;
const nameVisitor = new NameVisitor;

const groups = [catGroup, lionGroup];
const visitors = [ageVisitor, nameVisitor];

groups.forEach(g => {
    console.group(g.constructor.name);

    visitors.forEach(v => {
        g.accept(v);

        console.group(v.constructor.name);
        console.log(v.getResult());
        console.groupEnd();
    });

    console.groupEnd();
    console.log();
});
