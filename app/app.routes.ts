import { provideRouter, RouterConfig } from '@angular/router';

import { TodoListComponent, TodoComponent }  from './components';

const routes: RouterConfig = [
  { path: '', component: TodoListComponent },
  { path: 'todos/:id', component: TodoComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];