import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'pager',
    template: `
        <div>
            total {{totalElements}}
            pagesize {{pageSize}}
        </div>
        <ng-content></ng-content>
        <ng-content select="here"></ng-content>
        <ng-content select="p23"></ng-content>
        `
})
export class PagerComponent implements OnInit {
    @Input() private totalElements: number ;
    @Input() private pageSize: number ;


    constructor() { }

    ngOnInit() { }

}