import { ICommand } from './i-command.js';
import { Robot } from './robot.js';

export class RobotTurn180Command implements ICommand {
    #robot: Robot;

    constructor(robot: Robot) {
        this.#robot = robot;
    }

    execute(): void {
        this.#robot.turnRight();
        this.#robot.turnRight();
    }

    unexecute(): void {
        this.#robot.turnLeft();
        this.#robot.turnLeft();
    }
}
