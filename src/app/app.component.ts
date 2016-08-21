import { Component } from '@angular/core';
import '../public/css/style.css';
import './app.component.css';
import {Button} from 'primeng/primeng';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {HeaderLogin} from "./header-login/header-login"
import {SignpageComponent} from "./signpage-component/signpage-component";
import {ResetpwComponent} from "./resetpw-component/resetpw-component";
import {CarouselComponent} from "./carousel-component/carousel-component";


@Component({
  selector: 'my-app',
  template:require('./app.component.html'),
  directives:[ROUTER_DIRECTIVES, Button, HeaderLogin, SignpageComponent, ResetpwComponent,CarouselComponent]
})
export class AppComponent {

}