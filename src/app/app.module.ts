import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {routing} from './app.routing';
import {HomeModule} from "./home/home.module";
import {HelloWorldModule} from "./lib/hello-world/hello.world.module";

@NgModule({
    imports: [
        BrowserModule,
        HomeModule,
        HelloWorldModule,
        routing,
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }