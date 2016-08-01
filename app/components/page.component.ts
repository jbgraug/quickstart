import { Component, OnInit } from '@angular/core';

import { PagerComponent } from './pager.component';

@Component({
    moduleId: module.id,
    selector: 'page',
    template: `
     <div [ngStyle]="{background:'red'}">
        <ng-content></ng-content>
     </div>   
    `
})
export class PageComponent implements OnInit {
    constructor(private pager: PagerComponent) {
    }

    ngOnInit() {
        this.pager.addPage(this)
    }

}
