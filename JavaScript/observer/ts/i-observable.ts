import { IObserver } from './i-observer.js'

export interface IObservable {
    register(_observer: IObserver): void;

    unregister(_observer: IObserver): void;

    notify(): void;
}
