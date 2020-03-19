export class Person {
    firstName: string;

    lastName: string;

    height: number;

    weight: number;

    get bmi() { return this.weight / (this.height * this.height); }
}
