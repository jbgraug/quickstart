import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent, TodoComponent }  from './components';

const appRoutes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'todos/:id', component: TodoComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
