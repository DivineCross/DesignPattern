import { CoffeeOrder } from './coffee-order.js';

export interface ICoffeeOrderHandler {
    setNext(handler: ICoffeeOrderHandler): ICoffeeOrderHandler;

    handle(order: CoffeeOrder): CoffeeOrder;
}
