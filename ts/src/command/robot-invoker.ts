import { ICommand } from './i-command.js';
import { RobotMoveForwardCommand } from './robot-move-forward-command.js';
import { RobotTurn180Command } from './robot-turn-180-command.js';
import { RobotTurnLeftCommand } from './robot-turn-left-command.js';
import { RobotTurnRightCommand } from './robot-turn-right-command.js';

export class RobotInvoker {
    #executedCommands: ICommand[];

    #turnLeftCommand: ICommand;

    #turnRightCommand: ICommand;

    #turn180Command: ICommand;

    #moveForwardCommand: ICommand;

    constructor(
        turnLeft: RobotTurnLeftCommand,
        turnRight: RobotTurnRightCommand,
        turn180: RobotTurn180Command,
        moveForward: RobotMoveForwardCommand) {
        this.#turnLeftCommand = turnLeft;
        this.#turnRightCommand = turnRight;
        this.#turn180Command = turn180;
        this.#moveForwardCommand = moveForward;

        this.#executedCommands = [];
    }

    turnLeft() {
        this.executeSingle(this.#turnLeftCommand);
    }

    turnRight() {
        this.executeSingle(this.#turnRightCommand);
    }

    turn180() {
        this.executeSingle(this.#turn180Command);
    }

    moveFoward() {
        this.executeSingle(this.#moveForwardCommand);
    }

    undo() {
        const lastCommand = this.#executedCommands.pop();
        if (lastCommand)
            lastCommand.unexecute();
    }

    private executeSingle(command: ICommand) {
        command.execute();
        this.#executedCommands.push(command);
    }
}
