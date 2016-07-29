/**
 * Created by christian on 29/07/16.
 */
/* ===== app/auth.service.ts ===== */
import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {
    // Configure Auth0
    lock = new Auth0Lock('f1OXRYjQN4fbSJSoDvZOi9p7G6sKG3Or', 'christian16.eu.auth0.com', {});

    constructor() {
        // Add callback for lock `authenticated` event
        this.lock.on("authenticated", (authResult:any) => {
            localStorage.setItem('id_token', authResult.idToken);
        });
    }

    public login() {
        // Call the show method to display the widget.
        this.lock.show();
    };

    public authenticated() {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired();
    };

    public logout() {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
    };
}