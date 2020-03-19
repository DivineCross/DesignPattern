export class Lion {
    #name: string;

    constructor(name: string) {
        this.#name = name;
    }

    get name() { return this.#name; }
}
