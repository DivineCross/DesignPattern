import { Direction } from './direction.js';
import { Robot } from './robot.js';
import { RobotInvoker } from './robot-invoker.js';
import { RobotMoveForwardCommand } from './robot-move-forward-command.js';
import { RobotTurn180Command } from './robot-turn-180-command.js';
import { RobotTurnLeftCommand } from './robot-turn-left-command.js';
import { RobotTurnRightCommand } from './robot-turn-right-command.js';

const robot = new Robot;
const robotInvoker = new RobotInvoker(
    new RobotTurnLeftCommand(robot),
    new RobotTurnRightCommand(robot),
    new RobotTurn180Command(robot),
    new RobotMoveForwardCommand(robot));

const inspect = (r: Robot) => {
    const values = [r.positionX, r.positionY, Direction[r.direction]];
    console.log(values.join(', '));
};

const invoker = new Proxy(robotInvoker, {
    get: (target, propName) => {
        let prop = target[propName];
        let method = prop as Function;
        if (!(prop instanceof Function))
            return;

        return (...args: any[]) => {
            method.call(target, args);

            console.group(`'${method.name}'`);
            inspect(robot);
            console.groupEnd();
            console.log();
        };
    },
});

// 0, 0, North
invoker.undo();

// 0, 1, North
invoker.moveFoward();
// 0, 1, South
invoker.turn180();
// 0, 0, South
invoker.moveFoward();
// 0, 1, South
invoker.undo();
// 0, 1, North
invoker.undo();

// 0, 1, East
invoker.turnRight();
// 1, 1, East
invoker.moveFoward();
// 2, 1, East
invoker.moveFoward();
// 3, 1, East
invoker.moveFoward();
// 2, 1, East
invoker.undo();

// 2, 1, West
invoker.turn180();
// 1, 1, West
invoker.moveFoward();
// 2, 1, West
invoker.undo();
// 2, 1, East
invoker.undo();
