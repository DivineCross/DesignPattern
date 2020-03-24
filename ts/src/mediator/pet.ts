export class Pet {
    readonly name: string;

    readonly isCute: boolean;

    readonly isStrong: boolean;

    constructor(name: string, isCute: boolean, isStrong: boolean) {
        this.name = name;
        this.isCute = isCute;
        this.isStrong = isStrong;
    }
}
