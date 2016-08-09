"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var trello_component_1 = require("./trello/trello.component");
var trello_route_1 = require("./routes/trello.route");
platform_browser_dynamic_1.bootstrap(trello_component_1.TrelloComponent, [
    trello_route_1.appRouterProviders
]).catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map