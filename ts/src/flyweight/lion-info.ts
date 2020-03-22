export class LionInfo {
    name: string;

    ownerName: string;

    display(): string {
        return `Lion Name: ${this.name}, Owner Name: ${this.ownerName}`;
    }
}
