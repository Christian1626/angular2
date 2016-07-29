// The usual bootstrapping imports
import { bootstrap }      from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent }         from './app.component';
import { AUTH_PROVIDERS } from 'angular2-jwt';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    AUTH_PROVIDERS
]);