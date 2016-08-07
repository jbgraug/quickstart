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
            { id: 23, label: 'go home' },
            { id: 24, label: 'do homework' },
            { id: 25, label: 'sleeeep!' },
            { id: 33, label: 'go running' },
            { id: 34, label: 'go to work' },
            { id: 35, label: 'sleeeep more!' },
            { id: 43, label: 'go home again' },
            { id: 44, label: 'do homework before having lunch' },
            { id: 45, label: 'sleeeep again!' },
            { id: 53, label: 'go to my parents' },
            { id: 54, label: 'do sport' },
            { id: 55, label: 'eat something!' },
            { id: 63, label: 'go to the movies' },
            { id: 64, label: 'do nothing' },
            { id: 65, label: 'be quiet!' },
            { id: 66, label: 'keep coding...' }
        ];
    }
}
