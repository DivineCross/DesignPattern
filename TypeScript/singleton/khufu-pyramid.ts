export class KhufuPyramid {
    private static _instance: KhufuPyramid;

    height: number;

    volume: number;

    private constructor() {
        this.height = 146.7;
        this.volume = 2583283;
    }

    static get instance(): KhufuPyramid {
        if (!this._instance)
            return this._instance = new KhufuPyramid;

        return this._instance;
    }
}
