import { Direction } from './direction.js';
import { DirectionTuple } from './direction-tuple.js';

export class Robot {
    private static directionCount = Object.keys(Direction)
        .filter(k => !isNaN(+k))
        .length;

    #positionX: number;

    #positionY: number;

    #direction: Direction;

    constructor() {
        this.#positionX = 0;
        this.#positionY = 0;
        this.#direction = Direction.North;
    }

    get positionX() { return this.#positionX; }

    get positionY() { return this.#positionY; }

    get direction() { return this.#direction; }

    private get _direction() { return this.#direction; }

    private set _direction(v: number) { this.#direction = v % Robot.directionCount; }

    turnLeft() {
        this._direction -= 1;
    }

    turnRight() {
        this._direction += 1;
    }

    moveForward() {
        const tuple = DirectionTuple.fromDirection(this.#direction);
        this.#positionX += tuple.x;
        this.#positionY += tuple.y;
    }

    moveBackward() {
        const tuple = DirectionTuple.fromDirection(this.#direction);
        this.#positionX -= tuple.x;
        this.#positionY -= tuple.y;
    }
}
