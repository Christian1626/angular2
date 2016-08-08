import { Component }          from '@angular/core';
import {BoardsComponent} from "../boards/boards.component";
@Component({
    selector: 'trello',
    templateUrl: 'app/trello/trello.component.html',
    styleUrls:['app/trello/trello.component.css'],
    directives: [BoardsComponent]
})
export class TrelloComponent {
    title = 'Cricri Trello Clone';
}