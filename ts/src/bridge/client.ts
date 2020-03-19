import { Cat } from './animal/cat.js';
import { Lion } from './animal/lion.js';
import { MultilineViewer } from './viewer/multiline-viewer.js';
import { SinglelineViewer } from './viewer/singleline-viewer.js';

const cat = new Cat('Tiger', 6);
const lion = new Lion('Leo', 60);

const viewers = [
    new SinglelineViewer(cat),
    new SinglelineViewer(lion),
    new MultilineViewer(cat),
    new MultilineViewer(lion)
];

viewers.forEach(v => {
    console.group(v.constructor.name);
    console.log(v.display());
    console.groupEnd();
    console.log();
});
