/**
 * Created by christian on 12/08/16.
 */
import {Component} from '@angular/core';
import {Card} from "../card/card.component";
// import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
    selector: 'list',
    templateUrl: 'app/component/list/list.component.html',
    styleUrls: ['app/component/list/list.component.css'],
    directives: [Card],
})
export class List  {
    boards:Array<List>;
    editingList: boolean;
    
    constructor() {
        this.editingList = false;
    }

    editingList() {
        this.editingList = true;
    }
}