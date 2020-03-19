import { ILionManager } from './i-lion-manager.js';
import { LionManager } from './lion-manager.js';

export class LionManagerProxy implements ILionManager {
    private static readonly favoriteName = 'Leo';

    #lionManager: LionManager;

    constructor(lionManager: LionManager) {
        this.#lionManager = lionManager;
    }

    getLions() {
        return this.#lionManager.getLions();
    }

    add(name: string): void {
        this.#lionManager.add(name);
    }

    remove(name: string): void {
        if (name === LionManagerProxy.favoriteName)
            return;

        this.#lionManager.remove(name);
    }
}
