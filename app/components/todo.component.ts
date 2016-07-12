import { Component, OnInit , Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'jb-todo',
    template: `
    <hr/>
    <h3>{{todo.id}} - {{todo.label}}</h3>
    <input type="text" [(ngModel)]="todo.id"/> <input type="text" [(ngModel)]="todo.label"/>
    <code>{{todo |json}}</code>
    `
})
export class TodoComponent implements OnInit {
    @Input() todo: any = {};

    constructor() { }

    ngOnInit() { }

}
