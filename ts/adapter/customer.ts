import { ICustomer } from './i-customer.js';

export class Customer implements ICustomer {
    #firstName: string;

    #lastName: string;

    #nationality: string;

    constructor(
        firstName: string,
        lastName: string,
        nationality: string) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#nationality = nationality;
    }

    getFirstName(): string {
        return this.#firstName;
    }

    getLastName(): string {
        return this.#lastName;
    }

    getNationality(): string {
        return this.#nationality;
    }
}
