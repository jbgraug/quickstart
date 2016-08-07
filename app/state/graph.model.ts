import { State } from './state.model';

export class Graph {
    private current: State;
    private initial: State;
    private previous: State;

    constructor(private states?: Array<State>) {
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
        //this.states.splice()
    }

    public setInitialState(state: State) {
        console.log(`${state.getName()} set to initial`)
        this.initial = state;
    }

    public gotoNext(edgeName: string): State {
        if (this.current) {
            let edge = this.current.getEdge(edgeName)
            if (edge) {
                this.setNext(edge.getDest())
                this.current.doAction();
            } else {
                console.log(`Edge: ${edgeName} not found in State:${this.current.getName()} \n no action taken!`);
            }
        } else if (this.initial) {
            let edge = this.initial.getEdge(edgeName)
            if (edge) {
                this.setNext(edge.getDest())
                this.current.doAction();
            }
        } else {
            console.error('There is no initial or current state!')
        }
        return this.current || new State ('nowhere state');
    }

    private setNext(next: State){
        if (next) {
        this.previous = this.current;
        this.current = next;
        } else {
            console.error('There is no Next state to go!')
        }
    }

}
