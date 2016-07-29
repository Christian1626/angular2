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
/* ===== app/ping.component.ts ===== */
var core_1 = require('@angular/core');
var auth_service_1 = require('./auth.service');
var angular2_jwt_1 = require('angular2-jwt');
require('rxjs/add/operator/map');
var Ping = (function () {
    function Ping(auth, authHttp) {
        this.auth = auth;
        this.authHttp = authHttp;
        this.API_URL = 'http://localhost:3001';
    }
    Ping.prototype.securedPing = function () {
        var _this = this;
        console.log("PING ICI");
        new angular2_jwt_1.AuthConfig().getConfig().globalHeaders.push([{ "Access-Control-Allow-Origin": "*" }]);
        // var myHeader = new Header();
        // myHeader.append('Content-Type', 'application/json');
        // let headers = new Headers({
        // "Access-Control-Allow-Origin":"*",
        // 'Content-Type': 'application/json',
        // "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization",
        // "Authorization": "OAuth oauth_consumer_key='3xzgKo3MCYVpJe9S3Q6tZuUCY',oauth_nonce='da69ff711c28596b160e8e4cbb6a3faf', oauth_signature='iWDHG3J%2BiFRXPBmLVJJbbR3%2BPTw%3D',oauth_signature_method='HMAC-SHA1', oauth_timestamp='1469798847', oauth_version='1.0'"});
        this.authHttp.get("https://api.twitter.com/1.1/search/tweets.json?q=from%3ACmdr_Hadfield%20%23nasa&result_type=popular", { headers: myHeader })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.message = data.text; }, function (error) { return _this.message = error._body || error; });
    };
    Ping.prototype.ngOnInit = function () {
        this.securedPing();
    };
    Ping = __decorate([
        core_1.Component({
            selector: 'ping',
            template: '<h3>herlloo</h3>'
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, angular2_jwt_1.AuthHttp])
    ], Ping);
    return Ping;
}());
exports.Ping = Ping;
//# sourceMappingURL=ping.component.js.map