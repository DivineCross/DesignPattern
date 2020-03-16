import { BowDecorator } from './bow-decorator.js';
import { IBow } from './i-bow.js';

export class FireArrowDecorator extends BowDecorator {
    constructor(bow: IBow) {
        super(bow);
    }

    shoot(): string {
        return [
            this.bow.shoot(),
            'The arrow is on fire',
        ].join('\n');
    }
}
