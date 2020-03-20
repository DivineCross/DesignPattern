import { IFileSystemEntry } from './i-file-system-entry.js';

export class File implements IFileSystemEntry {
    name: string;

    constructor(name: string = '') {
        this.name = name;
    }

    display(): string[] {
        return [`- ${this.name}`];
    }
}
