import { Person } from './person.js';

export abstract class Viewer {
    protected person: Person;

    abstract displayName(): string;

    abstract displayBodyStat(): string;

    display(): string {
        const name = this.displayName();
        const stat = this.displayBodyStat();

        return [name, stat].join('\n');
    }
}
