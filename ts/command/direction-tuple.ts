import { Direction } from './direction.js';

export class DirectionTuple {
    readonly x: number;

    readonly y: number;

    private static directionMap = {
        [Direction.North]: new DirectionTuple(0, 1),
        [Direction.East]: new DirectionTuple(1, 0),
        [Direction.South]: new DirectionTuple(0, -1),
        [Direction.West]: new DirectionTuple(-1, 0),
    };

    constructor(x: number, y: number) {
        this.x = Math.sign(x);
        this.y = Math.sign(y);
    }

    static fromDirection(direction: Direction): DirectionTuple {
        return this.directionMap[direction] || new DirectionTuple(0, 0);
    }
}
