import { CompactViewer } from './compact-viewer.js';
import { NormalViewer } from './normal-viewer.js';
import { Person } from './person.js';

const person = new Person;
person.firstName = 'Tony';
person.lastName = 'Stark';
person.weight = 61.4;
person.height = 1.75;

const viewers = [
    new CompactViewer(person),
    new NormalViewer(person),
];

viewers.forEach(v => {
    console.group(v.constructor.name);
    console.log(v.display());
    console.groupEnd();
    console.log();
});
