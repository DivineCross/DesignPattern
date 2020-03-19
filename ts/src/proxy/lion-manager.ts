import { ILionManager } from './i-lion-manager.js';
import { Lion } from './lion.js';

export class LionManager implements ILionManager {
    #lionMap: Map<string, Lion> = new Map;

    getLions(): Lion[] {
        return [...this.#lionMap.values()];
    }

    add(name: string): void {
        if (!this.#lionMap.has(name))
            this.#lionMap.set(name, new Lion(name));
    }

    remove(name: string): void {
        this.#lionMap.delete(name);
    }
}
