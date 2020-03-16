import { IBow } from './i-bow.js';

export class Bow implements IBow {
    shoot(): string {

        return 'Arrow is flying toward the target';
    }

    aim(): string {
        return 'Aiming the target';
    }
}
