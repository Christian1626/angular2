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
/**
 * Created by christian on 12/08/16.
 */
var core_1 = require('@angular/core');
var card_component_1 = require("../card/card.component");
// import { ROUTER_DIRECTIVES }  from '@angular/router';
var List = (function () {
    function List() {
        this.editingList = false;
    }
    List.prototype.editingList = function () {
        this.editingList = true;
    };
    List = __decorate([
        core_1.Component({
            selector: 'list',
            templateUrl: 'app/component/list/list.component.html',
            styleUrls: ['app/component/list/list.component.css'],
            directives: [card_component_1.Card],
        }), 
        __metadata('design:paramtypes', [])
    ], List);
    return List;
}());
exports.List = List;
//# sourceMappingURL=list.component.js.map