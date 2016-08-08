/**
 * Created by christian on 01/08/16.
 */


import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'search',
    templateUrl: './app/component/search/search.component.html'
})
export class SearchComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
    
    searchingJob(formValue:any) {
        console.log(formValue);
    }

    
}