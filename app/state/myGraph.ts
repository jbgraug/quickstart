import { Graph } from './graph.model';
import { State } from './state.model';
import { Edge } from './edge.model';

export class MyGraph {
    public doGraph() {

        var s1 = new State('s1');
        var s2 = new State('s2')
        var s3 = new State('s3');
        s1.addEdge(new Edge('e1', s2));
        s1.addEdge(new Edge('e1', s2));
        s2.addEdge(new Edge('e2', s3));
        s3.addEdge(new Edge('e3', s3));
        s3.addEdge(new Edge('e1', s1));
        console.log(s1.getEdge('e1'));
        console.log(s1.getEdge('i don exist'));

        let graph = new Graph([s1, s2, s3]);
        graph.setInitialState(s1);
        console.log(`outcome state: ${graph.gotoNext('e1').getName()}`);
        console.log(`outcome state: ${graph.gotoNext('e1').getName()}`);
        console.log(`outcome state: ${graph.gotoNext('e2').getName()}`);
        console.log(`outcome state: ${graph.gotoNext('e3').getName()}`);
        console.log(`outcome state: ${graph.gotoNext('e2').getName()}`);
        console.log(`outcome state: ${graph.gotoNext('e1').getName()}`);
         console.log(`outcome state: ${graph.gotoNext('e1').getName()}`);
        return graph;
    }
}