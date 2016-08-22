import {Component} from "@angular/core";
import {FormBuilder, Validators} from '@angular/common';


@Component({
    selector:'header-login',
    template:require("./header-login.html"),
})

export class HeaderLogin{

    loggedIn = false;
    loginForm:Object;

    constructor(fb: FormBuilder) {
        this.loginForm = fb.group({
            email:["", Validators.required],
            password:["", Validators.required]
        });
    }

    doLogin(event:any, form:any) {
        if (form.valid) {
            console.log(form.value);
            event.preventDefault();
            this.loggedIn = true;
        }
    }

}