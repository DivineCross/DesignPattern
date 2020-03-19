import { Person } from './person.js';
import { Viewer } from './viewer.js';

export class NormalViewer extends Viewer {
    constructor(person: Person) {
        super();

        this.person = person;
    }

    displayName(): string {
        return [
            `"FirstName": ${this.person.firstName}`,
            `"LastName": ${this.person.lastName}`,
        ].join('\n');
    }

    displayBodyStat(): string {
        return [
            `"Height": ${this.person.height}`,
            `"Weight": ${this.person.weight}`,
            `"BMI": ${this.person.bmi.toFixed(1)}`
        ].join('\n');
    }
}
