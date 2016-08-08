/**
 * Created by christian on 08/08/16.
 */

import {Component} from '@angular/core';

@Component({
    selector: 'battlefield',
    templateUrl: 'app/battlefield/battlefield.component.html',
    styleUrls: ['app/battlefield/battlefield.component.css'],
})
export class BattlefieldComponent  {
    currentPlayer:boolean = true; //true = x | false = o 
    currentPlayerLabel: any;
    battlefield:Array<any>;
    win:any;
    draw:any;
    
    startGame() {
        this.currentPlayer = true;
        this.currentPlayerLabel = this.setCurrentPlayerLabel();
        this.win = this.draw = false;
        this.battlefield = ["","","","","","","","",""];
    }
    
    setCurrentPlayerLabel() {
        if(this.currentPlayer) {
            return 'x';
        }
        return 'o';
    }
    
    clicked(id:number) {
        if(this.battlefield[id] == "") {
            if (!this.win && !this.draw) {
                this.battlefield[id] = this.currentPlayerLabel;
                this.checkGame();
            }
            if (!this.win && !this.draw) {
                this.currentPlayer = !this.currentPlayer;
                this.currentPlayerLabel = this.setCurrentPlayerLabel();
            }
        }
    }
    
    checkGame() {
        this.win = false;
        this.draw = false;
        this.win = this.checkWin();
        if(this.win) {
            return;
        }
        if(this.battlefield.indexOf("") < 0) {
            this.draw = true;
        }
    }
    
    checkWin() {
        let winR:boolean , winC:boolean , winD1:boolean, winD2:boolean;
        for (var i = 0; i <= 6 ; i=i+3) {
            if(this.battlefield[i] != "") {
                winR = (this.battlefield[i] == this.battlefield[1+i] && this.battlefield[1+i]==this.battlefield[2+i]);
            }
            if(winR) return true;
        }
        for (var i = 0; i < 3; i++) {
            if(this.battlefield[i] != "") {
                winC = this.battlefield[i] == this.battlefield[3 + i] && this.battlefield[6 + i] == this.battlefield[3 + i];
            }
            if(winC) return true;
        }
        
        if(this.battlefield[4] != "") {
            winD1 = this.battlefield[0] == this.battlefield[4] && this.battlefield[8] == this.battlefield[0];
            winD2 = this.battlefield[2] == this.battlefield[4] && this.battlefield[6] == this.battlefield[2];
        }
        
        return winD1 || winD2;
    }
    
    constructor() {
    }
    
    ngOnInit() {
        this.startGame();
    }


}