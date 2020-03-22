import { LionInfo } from './lion-info.js';

export class LionInfoFactory {
    private cache: Map<string, LionInfo> = new Map;

    create(name: string = '', ownerName: string = ''): LionInfo {
        const key = JSON.stringify([name, ownerName]);

        if (this.cache.has(key))
            return this.cache.get(key);

        const info = new LionInfo;
        info.name = name;
        info.ownerName = ownerName;

        this.cache.set(key, info);

        return info;
    }

    get cachedCount() { return this.cache.size; }
}
