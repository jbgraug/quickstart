import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms' ;
import {HttpModule} from '@angular/http';
import { TodoService } from './services/todo.service';

@NgModule({
    declarations: [AppComponent],
    imports:      [BrowserModule,  FormsModule, HttpModule],
    providers: [TodoService],
    bootstrap:    [AppComponent]
})
export class AppModule {}
