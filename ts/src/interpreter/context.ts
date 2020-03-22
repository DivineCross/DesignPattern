export class Context {
    private valueMap: Map<string, number> = new Map;

    setValue(name: string = '', value: number): Context {
        this.valueMap.set(name, value);

        return this;
    }

    getValue(name: string = ''): number {
        const value = this.valueMap.get(name);
        if (value === undefined)
            throw new Error(`Variable '${name}' is not in current context.`);

        return value;
    }
}
