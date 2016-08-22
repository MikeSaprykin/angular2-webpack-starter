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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var carousel_1 = require('ng2-bootstrap/components/carousel');
// webpack html imports
var template = require('./carousel-component.html');
var CarouselComponent = (function () {
    function CarouselComponent() {
        this.myInterval = 1000;
        this.noWrapSlides = true;
        this.slides = [];
        for (var i = 0; i < 4; i++) {
            this.addSlide();
        }
    }
    CarouselComponent.prototype.addSlide = function () {
        var newWidth = 600 + this.slides.length + 1;
        this.slides.push({
            image: "//placekitten.com/" + newWidth + "/300",
            text: ['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4] + "\n      " + ['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]
        });
    };
    CarouselComponent.prototype.removeSlide = function (index) {
        this.slides.splice(index, 1);
    };
    CarouselComponent = __decorate([
        core_1.Component({
            selector: 'carousel-component',
            directives: [carousel_1.CAROUSEL_DIRECTIVES, common_1.CORE_DIRECTIVES, forms_1.FORM_DIRECTIVES],
            template: template
        }), 
        __metadata('design:paramtypes', [])
    ], CarouselComponent);
    return CarouselComponent;
}());
exports.CarouselComponent = CarouselComponent;
//# sourceMappingURL=carousel-component.js.map