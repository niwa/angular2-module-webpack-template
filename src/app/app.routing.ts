import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {HelloWorldComponent} from "./lib/hello-world/hello.world.component";


const routes: Routes = [
    {path: '', component: HomeComponent},
    // do not change the national path - components depend on it
    {path: 'home', component: HomeComponent},
    {path: 'hello', component: HelloWorldComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'},
];

export const routing = RouterModule.forRoot(routes);
