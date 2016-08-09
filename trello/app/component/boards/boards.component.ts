/**
 * Created by christian on 08/08/16.
 */

import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import {Dashboard} from "../../entity/dashboard";

@Component({
    selector: 'boards',
    templateUrl: 'app/component/boards/boards.component.html',
    styleUrls: ['app/component/boards/boards.component.css'],
    directives: [ROUTER_DIRECTIVES],
})
export class BoardsComponent  {
    boards:Array<Dashboard>;
    constructor() {
    }
}