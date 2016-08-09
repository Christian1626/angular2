import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
    selector: 'trello',
    templateUrl: 'app/trello/trello.component.html',
    styleUrls:['app/trello/trello.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class TrelloComponent {
    title = 'Cricri Trello Clone';
}