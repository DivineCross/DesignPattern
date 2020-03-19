import { ICustomer } from './i-customer.js';
import { LegacyCustomer } from './legacy-customer.js';

export class CustomerAdapter implements ICustomer {
    #legacyCustomer: LegacyCustomer;

    constructor(customer: LegacyCustomer) {
        this.#legacyCustomer = customer;
    }

    getFirstName(): string {
        return this.getNameParts()[0] || '';
    }

    getLastName(): string {
        return this.getNameParts()[1] || '';
    }

    getNationality(): string {
        return this.#legacyCustomer.nationality;
    }

    private getNameParts(): string[] {
        return (this.#legacyCustomer.name || '').trim().split(/ +/);
    }
}
