import { Component } from '@angular/core';
import { TodoListComponent, TodoComponent } from './components';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [TodoListComponent, TodoComponent]
})
export class AppComponent {
    private name: string = 'Juan';
    private selectedTodo: any = {};

    onSelected(event:Event) {
        console.log(event);
        this.selectedTodo = event;
    }
 }
