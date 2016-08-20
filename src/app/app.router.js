"use strict";
var router_1 = require("@angular/router");
var first_component_1 = require("./first-component/first-component");
var second_component_1 = require("./second-component/second-component");
var third_component_1 = require("./third-component/third-component");
var index_component_1 = require("./index-component/index-component");
/**
 * Created by Mike on 20.08.16.
 */
exports.routes = [
    { path: '', component: index_component_1.IndexComponent },
    { path: 'first', component: first_component_1.FirstComponent },
    { path: 'second', component: second_component_1.SecondComponent },
    { path: 'third', component: third_component_1.ThirdComponent },
    { path: '*', component: index_component_1.IndexComponent },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.router.js.map