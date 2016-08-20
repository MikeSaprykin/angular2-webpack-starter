import {provideRouter,RouterConfig} from "@angular/router";
import {FirstComponent} from "./first-component/first-component";
import {SecondComponent} from "./second-component/second-component";
import {ThirdComponent} from "./third-component/third-component";
import {IndexComponent} from "./index-component/index-component";
/**
 * Created by Mike on 20.08.16.
 */


export const routes: RouterConfig = [
    {path:'',component:IndexComponent},
    {path:'first',component: FirstComponent},
    {path:'second',component:SecondComponent},
    {path:'third',component:ThirdComponent},
    {path:'*',component:IndexComponent},
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];