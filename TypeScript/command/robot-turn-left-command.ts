import { ICommand } from './i-command.js';
import { Robot } from './robot.js';

export class RobotTurnLeftCommand implements ICommand {
    #robot: Robot;

    constructor(robot: Robot) {
        this.#robot = robot;
    }

    execute(): void {
        this.#robot.turnLeft();
    }

    unexecute(): void {
        this.#robot.turnRight();
    }
}
