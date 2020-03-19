import { Customer } from './customer.js';
import { CustomerAdapter } from './customer-adapter.js';
import { ICustomer } from './i-customer.js';
import { LegacyCustomer } from './legacy-customer.js';

const customer1 = new Customer('Sherlock', 'Holmes', 'UK');
const customer2 = new CustomerAdapter(new LegacyCustomer('Tony Stark', 'US'));

const customers = [customer1, customer2] as ICustomer[];
customers.forEach((c, i) => {
    console.group(`Customer ${i + 1}`);
    console.log(`FirstName: ${c.getFirstName()}`);
    console.log(`LastName: ${c.getLastName()}`);
    console.log(`Nationality: ${c.getNationality()}`);
    console.groupEnd();
    console.log();
});
