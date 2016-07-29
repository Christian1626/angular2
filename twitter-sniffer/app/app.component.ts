/**
 * Created by christian on 29/07/16.
 */


import {Component, OnInit} from '@angular/core';
import {TweetsComponent} from "./tweets.component";
import {AuthService} from "./auth.service";
import {Ping} from "./ping.component";

@Component({
    selector: 'twitter-sniffer',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [TweetsComponent,Ping],
    providers: [AuthService]
})
export class AppComponent implements OnInit {
    title = "Twitter Sniffer";
    
    constructor(private auth: AuthService) {
    }

    ngOnInit() {
    }

    
}