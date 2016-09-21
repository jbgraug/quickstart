import {CComponent} from './ccomponent';

export class CComponentImpl extends CComponent {
    private childComponents: Array<CComponent> = [];
    private injectedOperation: Function;

    constructor(name?: string, operation?: Function) {
        super(name);
        this.injectedOperation = operation;
    }

    public add(component: CComponent): void  {
        this.childComponents.push(component);
    }

    public operation() :void {
        if (this.injectedOperation) {
             this.injectedOperation();
        } else {
            console.log(` operation ${this.name} not set`)
        }
    }

    public remove(component: CComponent): void {
        for (let i = 0; i < this.childComponents.length; i++) {
            if (this.childComponents[i].equals(component)) {
                this.childComponents = this.childComponents.splice(i, 1);
            }
        }
    }

    public getChilds(): Array<CComponent> {
        return this.childComponents;
    }

    public isLeaf(): boolean {
        return (this.childComponents.length === 0);
    }
}
