import {provideRouter,RouterConfig} from "@angular/router";
import {FirstComponent} from "./first-component/first-component";
import {SecondComponent} from "./second-component/second-component";
import {ThirdComponent} from "./third-component/third-component";
import {IndexComponent} from "./index-component/index-component";
import {SignpageComponent} from "./signpage-component/signpage-component";
import {ResetpwComponent} from "./resetpw-component/resetpw-component";
import {CarouselComponent} from "./carousel-component/carousel-component";


export const routes: RouterConfig = [
    {path:'',component:IndexComponent},
    {path:'signpage',component: SignpageComponent},
    {path:'resetpw',component: ResetpwComponent},
    {path:'carousel',component: CarouselComponent},
    {path:'first',component: FirstComponent},
    {path:'second',component:SecondComponent},
    {path:'third',component:ThirdComponent},
    {path:'*',component:IndexComponent},

];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];