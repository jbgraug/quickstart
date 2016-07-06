import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class TodoService {

    constructor(private http:Http) { }

    getAll():any{
        return [
            {id:23,label:'go home'},
            {id:24,label:'do homework'},
             {id:25,label:'sleeeep!'}
        ]
    }
}