import { BowDecorator } from './bow-decorator.js';
import { IBow } from './i-bow.js';

export class DoubleArrowDecorator extends BowDecorator {
    constructor(bow: IBow) {
        super(bow);
    }

    shoot(): string {
        return [
            this.bow.shoot(),
            'The number of arrows is doubled',
        ].join('\n');
    }
}
