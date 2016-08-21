"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
require('../public/css/style.css');
require('./app.component.css');
var primeng_1 = require('primeng/primeng');
var router_1 = require("@angular/router");
var header_login_1 = require("./header-login/header-login");
var signpage_component_1 = require("./signpage-component/signpage-component");
var resetpw_component_1 = require("./resetpw-component/resetpw-component");
var carousel_component_1 = require("./carousel-component/carousel-component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: require('./app.component.html'),
            directives: [router_1.ROUTER_DIRECTIVES, primeng_1.Button, header_login_1.HeaderLogin, signpage_component_1.SignpageComponent, resetpw_component_1.ResetpwComponent, carousel_component_1.CarouselComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map