export interface IIterator<T> {
    getCurrent(): T;

    hasNext(): boolean;

    moveNext(): boolean;
}
