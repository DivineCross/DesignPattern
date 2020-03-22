import { CoffeeOrder } from './coffee-order.js';
import { ICoffeeOrderHandler } from './i-coffee-order-handler.js';

export class IceCoffeeOrderHandler implements ICoffeeOrderHandler {
    private nextHandler: ICoffeeOrderHandler;

    setNext(handler: ICoffeeOrderHandler): ICoffeeOrderHandler {
        return this.nextHandler = handler;
    }

    handle(order: CoffeeOrder): CoffeeOrder {
        if (order.iceLevel > 0)
            order.isIceAdded = true;

        return this.nextHandler
            ? this.nextHandler.handle(order)
            : order;
    }
}
