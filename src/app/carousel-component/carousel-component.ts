import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {FORM_DIRECTIVES} from '@angular/forms';
import {CAROUSEL_DIRECTIVES} from 'ng2-bootstrap/components/carousel';

// webpack html imports
let template = require('./carousel-component.html');

@Component({
    selector: 'carousel-component',
    directives: [CAROUSEL_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES],
    template: template
})
export class CarouselComponent {
    public myInterval:number = 1000;
    public noWrapSlides:boolean = true;
    public slides:Array<any> = [];

    public constructor() {
        for (let i = 0; i < 4; i++) {
            this.addSlide();
        }
    }

    public addSlide():void {
        let newWidth = 600 + this.slides.length + 1;
        this.slides.push({
            image: `//placekitten.com/${newWidth}/300`,
            text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
      ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
        });
    }

    public removeSlide(index:number):void {
        this.slides.splice(index, 1);
    }
}
