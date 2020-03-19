import { Person } from './person.js';
import { Viewer } from './viewer.js';

export class CompactViewer extends Viewer {
    constructor(person: Person) {
        super();

        this.person = person;
    }

    displayName(): string {
        return [
            `"Name": ${this.person.firstName} ${this.person.lastName}`
        ].join('\n');
    }

    displayBodyStat(): string {
        return [
            `"Height": ${this.person.height}`,
            `"Weight": ${this.person.weight}`,
        ].join('\n');
    }
}
