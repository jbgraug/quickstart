import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import {MyGraph} from './myGraph';

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(() => {
    let a =  new MyGraph();
    console.log(a.doGraph());
  });
