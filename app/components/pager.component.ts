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
        <!-- <ng-content select="here"></ng-content> -->
        `
})
export class PagerComponent implements OnInit {
    @Input() count: number = 100;
    @Input() psize: number = 10 ;
    pages: Array<PageComponent> = [];

    constructor() { }

    ngOnInit() { }

    addPage(page: PageComponent){
        this.pages.push(page);
    }

}