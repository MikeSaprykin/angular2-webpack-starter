/**
 * Created by Mike on 20.08.16.
 */
import {Component} from "@angular/core";
import {CarouselComponent} from "../carousel-component/carousel-component";
@Component({
    selector:'index-component',
    template:require('./index-component.html'),
    directives: [CarouselComponent]
})

export class IndexComponent {

}