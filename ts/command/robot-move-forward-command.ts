import { ICommand } from './i-command.js';
import { Robot } from './robot.js';

export class RobotMoveForwardCommand implements ICommand {
    #robot: Robot;

    constructor(robot: Robot) {
        this.#robot = robot;
    }

    execute(): void {
        this.#robot.moveForward();
    }

    unexecute(): void {
        this.#robot.moveBackward();
    }
}
