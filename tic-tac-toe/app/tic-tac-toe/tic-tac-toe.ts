import { Component }          from '@angular/core';
import {BattlefieldComponent} from "../battlefield/battlefield.component";
@Component({
    selector: 'my-app',
    template: '<battlefield></battlefield>',
    directives: [BattlefieldComponent]
})
export class TicTacToeComponent {
    title = 'Tour of Heroes';
}