"use strict";
var router_1 = require("@angular/router");
var first_component_1 = require("./first-component/first-component");
var second_component_1 = require("./second-component/second-component");
var third_component_1 = require("./third-component/third-component");
var index_component_1 = require("./index-component/index-component");
var signpage_component_1 = require("./signpage-component/signpage-component");
var resetpw_component_1 = require("./resetpw-component/resetpw-component");
var carousel_component_1 = require("./carousel-component/carousel-component");
exports.routes = [
    { path: '', component: index_component_1.IndexComponent },
    { path: 'signpage', component: signpage_component_1.SignpageComponent },
    { path: 'resetpw', component: resetpw_component_1.ResetpwComponent },
    { path: 'carousel', component: carousel_component_1.CarouselComponent },
    { path: 'first', component: first_component_1.FirstComponent },
    { path: 'second', component: second_component_1.SecondComponent },
    { path: 'third', component: third_component_1.ThirdComponent },
    { path: '*', component: index_component_1.IndexComponent },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.router.js.map