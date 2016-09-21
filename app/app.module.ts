import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms' ;
import {HttpModule} from '@angular/http';
import { TodoService } from './services/todo.service';
import {TodoComponent} from "./components/todo.component";
import {TodoListComponent} from "./components/todo-list.component";
import {PagerComponent} from "./components/pager.component";
import {Tabs} from "./components/tabs.component";
import {Tab} from "./components/tab.component";
import {PageComponent} from "./components/page.component";

@NgModule({
    declarations: [AppComponent,TodoListComponent, TodoComponent, Tab, Tabs, PagerComponent, PageComponent],
    imports:      [BrowserModule,  FormsModule, HttpModule, CommonModule],
    providers: [TodoService],
    bootstrap:    [AppComponent]
})
export class AppModule {}
