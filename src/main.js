"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var app_component_1 = require('./app/app.component');
var app_router_1 = require('./app/app.router');
if (process.env.ENV === 'production') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [app_router_1.APP_ROUTER_PROVIDERS]);
//# sourceMappingURL=main.js.map