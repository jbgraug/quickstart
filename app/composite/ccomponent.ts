export abstract class CComponent {

    constructor (protected name?: string) {}

    abstract operation (): void;

    equals (c: CComponent) {
        return (c && c.name && (c.name === this.name));
    }
}
