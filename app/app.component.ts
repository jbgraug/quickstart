import { Component, OnInit } from '@angular/core';


import { TodoListComponent, TodoComponent } from './components';
import { Todo } from './models/todo';
import { Tab } from './components/tab.component';
import { Tabs } from './components/tabs.component';
import { PageComponent } from './components/page.component';
import { PagerComponent } from './components/pager.component';
import { TodoService } from './services/todo.service';

@Component({
    selector: 'my-app',
    template: `
     <h1> Todo List <small>(by {{name}})</small></h1>
     <tabs>
        <tab [title]="'List'">
            <jb-todo-list (selectedTodo)="onSelected($event)"></jb-todo-list>
            <jb-todo *ngIf="selectedTodo.id" [todo]="selectedTodo"></jb-todo>
        </tab>
        <tab title="Pager">
            <pager [psize]="20" [elements]="todos">
                <page>page1</page>
                <page>page2</page>
                <page>page3</page>
            </pager>
        </tab>
        <tab title="Pager2">
            pages {{pages}}
            <pager [psize]="pageSize" [elements]="todos">
                <page *ngFor="let todos of pagedTodos">
                    <jb-todo *ngFor="let todo of todos" [todo]="todo"></jb-todo>
                </page>
            </pager>
        </tab>
     </tabs>
    `,
    directives: [TodoListComponent, TodoComponent, Tabs, Tab, PageComponent, PagerComponent]
})
export class AppComponent implements OnInit {
    private name: string = 'Juan';
    private selectedTodo: Todo = <Todo>{};
    private todos: Array<Todo>;
    private pageSize = 3;
    private pages: number;
    private pagedTodos: Array<Array<any>>;

    constructor(private todoService: TodoService) { }

    ngOnInit() {
        this.getTodos();
        this.pages = Math.floor(this.todos.length / this.pageSize);
        this.pagedTodos = [[]];
        let actualPage = 0;
        this.todos.forEach(t => {
            if (this.pagedTodos[actualPage].length < this.pageSize) {
                this.pagedTodos[actualPage].push(t)
            } else {
                actualPage += 1;
                this.pagedTodos[actualPage] = []
                this.pagedTodos[actualPage].push(t);
            }
        })
        console.log(this.pagedTodos);
    }

    getTodos() {
        this.todos = this.todoService.getAll();
    }

    onSelected(todo: Todo) {
        console.log(todo);
        this.selectedTodo = todo;
    }
}
