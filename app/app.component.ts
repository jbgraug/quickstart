import { Component } from '@angular/core';
import { TodoListComponent } from './components';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives:[TodoListComponent]
})
export class AppComponent {
    private name:string='Juan';

 }
