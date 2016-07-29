/* ===== app/ping.component.ts ===== */
import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import {AuthHttp, AuthConfig} from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Component({
    selector: 'ping',
    template: '<h3>herlloo</h3>'
})
export class Ping {
    API_URL: string = 'http://localhost:3001';
    message: string;

    constructor(private auth: AuthService, private authHttp: AuthHttp) {}
    public securedPing() {
        console.log("PING ICI");
        new AuthConfig().getConfig().globalHeaders.push([{"Access-Control-Allow-Origin":"*"}]);
        // var myHeader = new Header();
        // myHeader.append('Content-Type', 'application/json');
        // let headers = new Headers({
            // "Access-Control-Allow-Origin":"*",
            // 'Content-Type': 'application/json',
            // "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization",
            // "Authorization": "OAuth oauth_consumer_key='3xzgKo3MCYVpJe9S3Q6tZuUCY',oauth_nonce='da69ff711c28596b160e8e4cbb6a3faf', oauth_signature='iWDHG3J%2BiFRXPBmLVJJbbR3%2BPTw%3D',oauth_signature_method='HMAC-SHA1', oauth_timestamp='1469798847', oauth_version='1.0'"});
        this.authHttp.get(`https://api.twitter.com/1.1/search/tweets.json?q=from%3ACmdr_Hadfield%20%23nasa&result_type=popular`,{headers:myHeader})
            .map(res => res.json())
            .subscribe(
                data => this.message= data.text,
                error => this.message = error._body || error
            );
    }
    
    ngOnInit() {
        this.securedPing();
    }
}