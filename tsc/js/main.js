"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var app_component_1 = require('./app/app.component');
var app_router_1 = require('./app/app.router');
var router_1 = require("@angular/router");
if (process.env.ENV === 'production') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [app_router_1.APP_ROUTER_PROVIDERS,
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: [router_1.ROUTER_DIRECTIVES], multi: true })]);
//# sourceMappingURL=main.js.map