import { bootstrap }    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';

import { AppComponent } from './app.component';
import { TodoService } from './services';

bootstrap(AppComponent,[
    HTTP_PROVIDERS,
    TodoService
]);
