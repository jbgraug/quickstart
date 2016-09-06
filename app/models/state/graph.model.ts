import { State } from './state.model';
import { Edge } from './edge.model';

export class Graph {
    private current: State;
    private initial: State;
    private previous: State;
    private history: Array<State>;

    constructor(private states?: Array<State>) {
        this.history = [];
        if (!states) {
            this.states = [];
        }
    }

    public getStates(): Array<State> {
        return this.states;
    }

    public add(state: State, isInitial: boolean = false) {
        this.states.push(state);
        if (isInitial) {
            this.setInitialState(state);
        }
    }

    public remove(state: State) {

    }

    public setInitialState(state: State) {
        console.log(`${state.getName()} set to initial`);
        this.initial = state;
    }

    public start() {
        this.setNext(this.initial);
        this.history.push(this.current);
    }

    public gotoNext(edgeName: string): State {
        if (this.current) {
            let edge = this.current.getEdgeByName(edgeName);
            if (edge) {
                this.setNext(edge.getDest());
                this.current.doAction();
                this.history.push(this.current);
            } else {
                console.log(`Edge: ${edgeName} not found in State:${this.current.getName()} \n no action taken!`);
            }
        } else {
            this.start();
        }
        return this.current || new State('nowhere state');
    }

    getCurrent(): State {
        return this.current;
    }

    getNextEdges(): Array<Edge> {
        return this.current.getEdges();
    }

    private setNext(next: State) {
        if (next) {
            this.previous = this.current;
            this.current = next;
            // next.setPrevious(this.previous);
        } else {
            console.error('There is no Next state to go!');
        }
    }

    printHistory() {
        let i = 0;
        for (let s of this.history) {
            console.log(`history ${i} => ${s.getName()}`)
            i++;
        }
    }

}
