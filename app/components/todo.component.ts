import { Component, OnInit , Input} from '@angular/core';
import { Todo } from '../models/todo';

@Component({
    moduleId: module.id,
    selector: 'jb-todo',
    template: `
    <hr/>
    <div class="todo">
        <button (click)="toggle()" style="float: right;">
            <span *ngIf="edit">Edit: On</span>
            <span *ngIf="!edit">Edit: Off</span>
        </button>
        <h3>{{todo.id}} - {{todo.label}}</h3>
        <input [disabled]="!edit" type="text" [(ngModel)]="todo.id"/> 
        <input [disabled]="!edit" type="text" [(ngModel)]="todo.label"/>
    </div>
    `
})
export class TodoComponent implements OnInit {
    @Input() todo: Todo;
    private edit: boolean = false;

    constructor() { }

    ngOnInit() { }

    toggle(){
        this.edit=!this.edit;
    }
}
