import { bootstrap }      from '@angular/platform-browser-dynamic';
import {TrelloComponent} from "./trello/trello.component";
import {appRouterProviders} from "./routes/trello.route";

bootstrap(TrelloComponent, [
    appRouterProviders
    ]).catch(err => console.error(err));

