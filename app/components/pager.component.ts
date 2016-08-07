import { Component, OnInit, Input } from '@angular/core';

import { PageComponent } from './page.component';

@Component({
    moduleId: module.id,
    selector: 'pager',
    template: `
        <div>
            total {{count}}
            pagesize {{psize}}
        </div>
        <ng-content></ng-content>
        <hr>
        <div>
            <span>Pages</span>
            <div class="sel-page" 
                [class.active]="page.active" *ngFor="let page of pages; let i = index; let f=first; let l=last; let e=even; let o=odd;" 
                (click)="selectPage(page)"> 
                {{i+1}}
            </div>
        </div>
        <!-- <ng-content select="here"></ng-content> -->
        `,
        styles: [`
        .active {
            background: lightblue;
            display:inline-block;
            color:white;      
        }
        .sel-page {
            display: inline-block;
            border: 1px solid lightblue;
            border-radius: 50%;
            width: 1.6em;
            height: 1.6em;
            text-align: center;
            padding: 0;
            margin: 5px;
            cursor: pointer;
        }
        `]
})
export class PagerComponent implements OnInit {

    @Input() psize: number;
    @Input() elements: Array<any>;

    count: number;

    pages: Array<PageComponent> = [];

    constructor() { }

    ngOnInit() {
        this.count = (this.elements && this.elements.length) || 1;
    }

    selectPage(page: PageComponent) {
        // deactivate all tabs
        this.pages.forEach(p => p.active = false);

        // activate the tab the user has clicked on.
        page.active = true;
    }

    addPage(page: PageComponent) {
        if (this.pages.length === 0) {
            page.active = true;
        }
        this.pages.push(page);
    }

}
