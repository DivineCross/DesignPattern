import { IIterator } from './i-iterator.js';

export interface IIterable<T> {
    getIterator(): IIterator<T>;
}
