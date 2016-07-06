import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services';

@Component({
    moduleId: module.id,
    selector: 'jb-todo-list',
    template: `
<table>
    <tr>
        <th>id</th>
        <th>label</th>
    </tr>
    <tr *ngFor="let t of todos">
        <td>{{t.id}}</td>
        <td>{{t.label}}</td>
    </tr>
</table>
    `
    //templateUrl: 'name.component.html'
    ,providers : [TodoService]
})
export class TodoListComponent implements OnInit {
    private todos:[any];

    constructor(private todoSvc: TodoService) { }

    ngOnInit() {
        this.todos = this.todoSvc.getAll();
    }

}