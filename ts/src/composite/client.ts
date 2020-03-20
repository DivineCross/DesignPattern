import { Directory } from './directory.js';
import { File } from './file.js';

const entry =
    new Directory('node_modules', [
        new Directory('eslint', [
            new Directory('bin', [
                new File('eslint.js'),
            ]),
            new File('LICENSE'),
            new File('package.json'),
        ]),
        new Directory('typescript', [
            new Directory('bin', [
                new File('tsc'),
            ]),
            new Directory('lib', [
                new File('lib.d.ts'),
                new File('lib.es6.d.ts'),
            ]),
            new File('LICENSE.txt'),
            new File('package.json'),
        ]),
    ]);

console.log(entry.display().join('\n'));
