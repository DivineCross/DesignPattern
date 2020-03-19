import { IObserver } from './i-observer.js';

export interface IObservable {
    register(observer: IObserver): void;

    unregister(observer: IObserver): void;

    notify(): void;
}
