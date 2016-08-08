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
var boards_component_1 = require("../boards/boards.component");
var TrelloComponent = (function () {
    function TrelloComponent() {
        this.title = 'Cricri Trello Clone';
    }
    TrelloComponent = __decorate([
        core_1.Component({
            selector: 'trello',
            templateUrl: 'app/trello/trello.component.html',
            styleUrls: ['app/trello/trello.component.css'],
            directives: [boards_component_1.BoardsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TrelloComponent);
    return TrelloComponent;
}());
exports.TrelloComponent = TrelloComponent;
//# sourceMappingURL=trello.component.js.map