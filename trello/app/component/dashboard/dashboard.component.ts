/**
 * Created by christian on 09/08/16.
 */

import {Component} from '@angular/core';
import {List} from "../../entity/list";
// import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/component/dashboard/dashboard.component.html',
    styleUrls: ['app/component/dashboard/dashboard.component.css'],
    // directives: [ROUTER_DIRECTIVES],
})
export class DashboardComponent  {
    boards:Array<List>;
    constructor() {
    }
}