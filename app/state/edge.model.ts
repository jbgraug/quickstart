import {State} from './state.model';

export class Edge {
    constructor(
        private name: string,
        private dest: State
    ) {
    }

    public getName(): string {
        return this.name;
    }

    public getDest(): State {
        return this.dest;
    }

    equals(a: Edge) {
        if (this.name === a.name) {
            return true;
        }
        return false;
    }
}