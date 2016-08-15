// import { bootstrap }    from '@angular/platform-browser-dynamic';
// import {HTTP_PROVIDERS} from '@angular/http';

// import { AppComponent } from './app.component';
// import { TodoService } from './services';

import {MyGraph} from './state/myGraph';


// bootstrap(AppComponent,[
//     HTTP_PROVIDERS,
//     TodoService
// ])

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app.module';

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(
        () => {
            let a =  new MyGraph();
            console.log(a.doGraph());
        });
