import { CoffeeOrder } from './coffee-order.js';
import { IceCoffeeOrderHandler } from './ice-coffee-order-handler.js';
import { MilkCoffeeOrderHandler } from './milk-coffee-order-handler.js';
import { WrapperCoffeeOrderHandler } from './wrapper-coffee-order-handler.js';

const chain = new IceCoffeeOrderHandler;
chain
    .setNext(new MilkCoffeeOrderHandler)
    .setNext(new WrapperCoffeeOrderHandler);

const coffeeOrders = [
    new CoffeeOrder(0, 0),
    new CoffeeOrder(0, 3),
    new CoffeeOrder(6, 0),
    new CoffeeOrder(2, 7),
    new CoffeeOrder(4, 9),
];

coffeeOrders.forEach(x => {
    console.group(`Order (${x.iceLevel}, ${x.milkLevel})`);
    console.log(x);
    chain.handle(x);
    console.log(x);
    console.groupEnd();
    console.log();
});
