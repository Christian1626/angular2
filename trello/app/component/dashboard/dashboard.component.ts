/**
 * Created by christian on 09/08/16.
 */

import {Component} from '@angular/core';
import {List} from "../list/list.component";
// import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/component/dashboard/dashboard.component.html',
    styleUrls: ['app/component/dashboard/dashboard.component.css'],
    directives: [List],
})
export class DashboardComponent  {
    boards:Array<any>;
    editingBoard: boolean;
    
    constructor() {
        this.editingBoard = false;
    }
    
    editingCard() {
        this.editingBoard = true;
    }
}