/**
 * Created by christian on 08/08/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var BattlefieldComponent = (function () {
    function BattlefieldComponent() {
        this.currentPlayer = true; //true = x | false = o 
    }
    BattlefieldComponent.prototype.startGame = function () {
        this.currentPlayer = true;
        this.currentPlayerLabel = this.setCurrentPlayerLabel();
        this.win = this.draw = false;
        this.battlefield = ["", "", "", "", "", "", "", "", ""];
    };
    BattlefieldComponent.prototype.setCurrentPlayerLabel = function () {
        if (this.currentPlayer) {
            return 'x';
        }
        return 'o';
    };
    BattlefieldComponent.prototype.clicked = function (id) {
        if (this.battlefield[id] == "") {
            if (!this.win && !this.draw) {
                this.battlefield[id] = this.currentPlayerLabel;
                this.checkGame();
            }
            if (!this.win && !this.draw) {
                this.currentPlayer = !this.currentPlayer;
                this.currentPlayerLabel = this.setCurrentPlayerLabel();
            }
        }
    };
    BattlefieldComponent.prototype.checkGame = function () {
        this.win = false;
        this.draw = false;
        this.win = this.checkWin();
        if (this.win) {
            return;
        }
        if (this.battlefield.indexOf("") < 0) {
            this.draw = true;
        }
    };
    BattlefieldComponent.prototype.checkWin = function () {
        var winR, winC, winD1, winD2;
        for (var i = 0; i <= 6; i = i + 3) {
            if (this.battlefield[i] != "") {
                winR = (this.battlefield[i] == this.battlefield[1 + i] && this.battlefield[1 + i] == this.battlefield[2 + i]);
            }
            if (winR)
                return true;
        }
        for (var i = 0; i < 3; i++) {
            if (this.battlefield[i] != "") {
                winC = this.battlefield[i] == this.battlefield[3 + i] && this.battlefield[6 + i] == this.battlefield[3 + i];
            }
            if (winC)
                return true;
        }
        if (this.battlefield[4] != "") {
            winD1 = this.battlefield[0] == this.battlefield[4] && this.battlefield[8] == this.battlefield[0];
            winD2 = this.battlefield[2] == this.battlefield[4] && this.battlefield[6] == this.battlefield[2];
        }
        return winD1 || winD2;
    };
    BattlefieldComponent.prototype.ngOnInit = function () {
        this.startGame();
    };
    BattlefieldComponent = __decorate([
        core_1.Component({
            selector: 'battlefield',
            templateUrl: 'app/battlefield/battlefield.component.html',
            styleUrls: ['app/battlefield/battlefield.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], BattlefieldComponent);
    return BattlefieldComponent;
}());
exports.BattlefieldComponent = BattlefieldComponent;
//# sourceMappingURL=battlefield.component.js.map