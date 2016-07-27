import { Component } from '@angular/core';
import { TodoListComponent, TodoComponent } from './components';
import { Todo } from './models/todo';

@Component({
    selector: 'my-app',
    template: `
    <h1> Todo List <small>(by {{name}})</small></h1>
    <jb-todo-list (selectedTodo)="onSelected($event)"></jb-todo-list>
    <jb-todo *ngIf="selectedTodo.id" [todo]="selectedTodo"></jb-todo>
    
    <jb-todo *ngIf="selectedTodo.id" [todo]="selectedTodo"></jb-todo>
    `,
    directives: [TodoListComponent, TodoComponent]
})
export class AppComponent {
    private name: string = 'Juan';
    private selectedTodo: Todo = <Todo>{};

    onSelected(todo: Todo) {
        console.log(todo);
        this.selectedTodo = todo;
    }
 }
