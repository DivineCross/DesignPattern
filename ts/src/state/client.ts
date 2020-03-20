import { Oven } from './oven.js';

const oven = new Proxy(new Oven, {
    get: (target, propName) => {
        let names = [
            'turnOn',
            'turnOff',
            'start',
            'stop',
            'setTemporature',
        ];
        let isTargetName = typeof propName === typeof ''
            && names.includes(propName as string);

        let prop = target[propName];
        let method = prop as Function;
        if (!(prop instanceof Function) || !isTargetName)
            return prop;

        return (...args: any[]) => {
            const message = method.call(target, args);
            const stateName = target.getState().constructor.name;

            console.group(`'${method.name}'`);
            console.log(`>> ${message}`);
            console.log(`>  ${stateName}`);
            console.groupEnd();
            console.log();
        };
    },
});

oven.start();
oven.turnOn();
oven.turnOff();

oven.turnOn();
oven.setTemperature(180);
oven.start();

oven.turnOff();
oven.stop();
oven.turnOff();
