import {Edge} from './edge.model';

export class State {
    constructor(
        private name: string,
        private edges?: Array<Edge>,
        private action?: Function
    ) {
        if (!edges) {
            this.edges = [];
        }
    }

    public doAction(): void {
        if (this.action) {
            this.action();
        } else {
            console.log(`${this.name}: no action set`);
        }
    }

    public getName(): string {
        return this.name;
    }

    public addEdge(edge: Edge) {
        console.log(`${edge.getName()} add?`)
        let exists = this.edges.some(e => e.equals(edge));
        if (!exists) {
            console.log(`${edge.getName()} added`)
            this.edges.push(edge);
        } else {
            console.error(`${edge.getName()} not added`)
        }
    }

    public getEdges(): Array<Edge> {
        return this.edges;
    }

    public getEdgeByName(name: string) {
        let edge: Edge;
        this.edges.some(
            (e) => {
                if (e.getName() === name) {
                    edge = e;
                    return true;
                }})
        return edge;
    }

    public equals(a: State) {
        if (this.name === a.name) {
            return true;
        }
        return false;
    }
}
