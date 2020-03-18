import { ILionManager } from './i-lion-manager.js';
import { LionManager } from './lion-manager.js';
import { LionManagerProxy } from './lion-manager-proxy.js';

const manager = new LionManagerProxy(new LionManager);

const inspect = (manager: ILionManager) => {
    console.group('Manager');
    manager.getLions().forEach(x => console.log(x.name));
    console.groupEnd();
    console.log();
};

manager.add('King');
manager.add('Leo');
manager.add('Zeus');
inspect(manager);

manager.remove('King');
inspect(manager);

// Leo will not be removed due to the proxy.
manager.remove('Leo');
inspect(manager);

manager.remove('Zeus');
inspect(manager);
