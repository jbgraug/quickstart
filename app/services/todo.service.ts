import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Todo } from '../models/todo';
/**
 * @deprecated since version 2.0
 */
@Injectable()
export class TodoService {

    constructor(private http: Http) { }
/**
 * @deprecated since version 7652.0
 */
    getAll(): Todo[] {
        return [
            {id: 23, label: 'go home'},
            {id: 24, label: 'do homework'},
            {id: 25, label: 'sleeeep!'}
        ];
    }
}
