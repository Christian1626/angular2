/**
 * Created by christian on 09/08/16.
 */

import { provideRouter, RouterConfig }  from '@angular/router';
import {BoardsComponent} from "../component/boards/boards.component";
import {DashboardComponent} from "../component/dashboard/dashboard.component";

const routes: RouterConfig = [
    {
        path : '',
        redirectTo: '/boards',
        pathMatch: 'full'
    },
    {
        path: 'boards',
        component: BoardsComponent
    },
    {
        path: 'dashboard/:id',
        component: DashboardComponent
    },
];

export const appRouterProviders = [
    provideRouter(routes)
];