import { ICommand } from './i-command.js';
import { Robot } from './robot.js';

export class RobotTurnRightCommand implements ICommand {
    #robot: Robot;

    constructor(robot: Robot) {
        this.#robot = robot;
    }

    execute(): void {
        this.#robot.turnRight();
    }

    unexecute(): void {
        this.#robot.turnLeft();
    }
}
