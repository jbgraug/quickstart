import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { TodoService } from '../services';
import { Todo } from '../models/todo';

  
@Component({
    moduleId: module.id,
    selector: 'jb-todo-list',
    template: `
<table>
    <tr>
        <th>id</th>
        <th>label</th>
    </tr>
    <tr *ngFor="let t of todos" 
        (mouseover)="select(t)" 
        [ngClass]="{'row-selected':(t.id===selectedElement)}">
        
        <td>{{t.id}}</td>
        <td>{{t.label}}</td>
    </tr>
</table>
    `
    , directives: []

})
export class TodoListComponent implements OnInit {

    private todos: Todo[];

    @Output() selectedTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
    selectedElement: number;

    constructor(private todoSvc: TodoService) { }

    ngOnInit() {
        this.todos = this.todoSvc.getAll();
    }

    select(todo: Todo) {
        this.selectedElement = todo.id;
        this.selectedTodo.emit(todo);
    }

}
