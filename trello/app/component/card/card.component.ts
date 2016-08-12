/**
 * Created by christian on 12/08/16.
 */
import {Component} from '@angular/core';
import {List} from "../../entity/list";
// import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
    selector: 'card',
    templateUrl: 'app/component/card/card.component.html',
    styleUrls: ['app/component/card/card.component.css'],
    // directives: [ROUTER_DIRECTIVES],
})
export class Card  {
    boards:Array<List>;
    editingCard: boolean;
    
    constructor() {
        this.editingCard = false;
    }

    editingCard() {
        this.editingCard = true;
    }
}