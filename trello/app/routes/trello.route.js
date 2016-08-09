/**
 * Created by christian on 09/08/16.
 */
"use strict";
var router_1 = require('@angular/router');
var boards_component_1 = require("../component/boards/boards.component");
var dashboard_component_1 = require("../component/dashboard/dashboard.component");
var routes = [
    {
        path: '',
        redirectTo: '/boards',
        pathMatch: 'full'
    },
    {
        path: 'boards',
        component: boards_component_1.BoardsComponent
    },
    {
        path: 'dashboard/:id',
        component: dashboard_component_1.DashboardComponent
    },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=trello.route.js.map