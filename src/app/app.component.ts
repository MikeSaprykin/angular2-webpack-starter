import { Component } from '@angular/core';
import '../public/css/style.css';
import './app.component.css';
import {Button} from 'primeng/primeng';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {HeaderLogin} from "./header-login/header-login"

@Component({
  selector: 'my-app',
  template:require('./app.component.html'),
  directives:[ROUTER_DIRECTIVES, Button, HeaderLogin]
})
export class AppComponent {

}