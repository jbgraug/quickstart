import { Component } from '@angular/core';

import { TodoListComponent, TodoComponent } from './components';
import { Todo } from './models/todo';
import { Tab } from './components/tab.component';
import { Tabs } from './components/tabs.component';
import { PageComponent } from './components/page.component';
import { PagerComponent } from './components/pager.component'

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
            <pager [count]="127" [psize]="20">
                <page>page1</page>
                <page>page2</page>
            </pager>
        </tab>
     </tabs>
    `,
    directives: [TodoListComponent, TodoComponent, Tabs, Tab, PageComponent, PagerComponent]
})
export class AppComponent {
    private name: string = 'Juan';
    private selectedTodo: Todo = <Todo>{};

    private count:number= 0;
    private psize:number = 0;

    onSelected(todo: Todo) {
        console.log(todo);
        this.selectedTodo = todo;
    }
 }
