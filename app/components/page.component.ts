import { Component, OnInit } from '@angular/core';

import { PagerComponent } from './pager.component';

@Component({
    selector: 'page',
    template: `
     <div class="page" [hidden]="!active">
        <ng-content></ng-content>
     </div>   
    `,
    styles: [`
        .page {
            border: 1px solid lightblue;
            
        }
    `]
})
export class PageComponent implements OnInit {

    public active = false;
    constructor(private pager: PagerComponent) {
    }

    ngOnInit() {
        this.pager.addPage(this);
    }

}
