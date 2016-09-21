import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { TodoService } from '../services';
import { Todo } from '../models/todo';


@Component({
    selector: 'jb-todo-list',
    template: `
<table>
    <tr>
        <th>id</th>
        <th>label</th>
    </tr>
    <tr *ngFor="let t of todos" 
        (click)="select(t)" 
        [ngClass]="{'row-selected':(t.id===selectedElement)}">
        
        <td>{{t.id}}</td>
        <td>{{t.label}}</td>
    </tr>
</table>
    `
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
