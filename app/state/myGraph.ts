import { Graph } from './graph.model';
import { State } from './state.model';
import { Edge } from './edge.model';

export class MyGraph {
    public doGraph() {

        var s1 = new State('home',null,()=>console.log('executed on doAction home'));
        var s2 = new State('products')
        var s3 = new State('mortage',null,()=>console.log('executed on doAction motage'));
        s1.addEdge(new Edge('to_products', s2));
        s1.addEdge(new Edge('to_products', s2));
        s2.addEdge(new Edge('to_mortage', s3));
        s3.addEdge(new Edge('to_mortage', s3));
        s3.addEdge(new Edge('to_home', s1));
        console.log(s1.getEdgeByName('to_products'));
        console.log(s1.getEdgeByName('i don exist'));

        let graph = new Graph([s1, s2, s3]);
        graph.setInitialState(s1);
        console.log(`outcome state: ${graph.gotoNext('to_products').getName()}`);
        console.log(`outcome state: ${graph.gotoNext('to_products').getName()}`);
        console.log(`outcome state: ${graph.gotoNext('to_home').getName()}`);
        console.log(`outcome state: ${graph.gotoNext('to_home').getName()}`);
        console.log(`outcome state: ${graph.gotoNext('to_products').getName()}`);
        console.log(`outcome state: ${graph.gotoNext('to_mortage').getName()}`);
         console.log(`outcome state: ${graph.gotoNext('to_home').getName()}`);
        return graph;
    }
}