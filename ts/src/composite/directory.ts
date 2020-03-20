import { IFileSystemEntry } from './i-file-system-entry.js';

export class Directory implements IFileSystemEntry {
    private static indentSize: number = 2;

    private static displayIndent: string =
        Array(Directory.indentSize + 1).join(' ');

    name: string;

    children: IFileSystemEntry[];

    constructor(name: string = '', children: IFileSystemEntry[] = []) {
        this.name = name;
        this.children = children;
    }

    display(): string[] {
        return [`> ${this.name}`]
            .concat(this.children
                .flatMap(c => c.display()
                    .map(x => `${Directory.displayIndent}${x}`)));
    }
}
