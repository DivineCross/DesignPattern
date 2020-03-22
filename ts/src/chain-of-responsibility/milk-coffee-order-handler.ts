import { CoffeeOrder } from './coffee-order.js';
import { ICoffeeOrderHandler } from './i-coffee-order-handler.js';

export class MilkCoffeeOrderHandler implements ICoffeeOrderHandler {
    private nextHandler: ICoffeeOrderHandler;

    setNext(handler: ICoffeeOrderHandler): ICoffeeOrderHandler {
        return this.nextHandler = handler;
    }

    handle(order: CoffeeOrder): CoffeeOrder {
        if (order.milkLevel > 0)
            order.isMilkAdded = true;

        return this.nextHandler
            ? this.nextHandler.handle(order)
            : order;
    }
}
