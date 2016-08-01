import { Component } from '@angular/core';

import { TodoListComponent, TodoComponent } from './components';
import { Todo } from './models/todo';
import { Tab } from './components/tab.component';
import { Tabs } from './components/tabs.component';

@Component({
    selector: 'my-app',
    template: `
     <h1> Todo List <small>(by {{name}})</small></h1>
     <tabs>
        <tab [title]="'List'">
            <jb-todo-list (selectedTodo)="onSelected($event)"></jb-todo-list>
            <jb-todo *ngIf="selectedTodo.id" [todo]="selectedTodo"></jb-todo>
            <jb-todo *ngIf="selectedTodo.id" [todo]="selectedTodo"></jb-todo>
        </tab>
        <tab title="Pager">
            More stuf
        </tab>
     </tabs>
    `,
    directives: [TodoListComponent, TodoComponent, Tabs, Tab]
})
export class AppComponent {
    private name: string = 'Juan';
    private selectedTodo: Todo = <Todo>{};

    onSelected(todo: Todo) {
        console.log(todo);
        this.selectedTodo = todo;
    }
 }
