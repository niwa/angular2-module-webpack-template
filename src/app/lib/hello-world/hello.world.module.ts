import { NgModule } from '@angular/core';
import {HelloWorldComponent} from "./hello.world.component";

@NgModule({
    imports: [

    ],
    declarations: [
        HelloWorldComponent
    ],
    exports: [
        HelloWorldComponent
    ],
    bootstrap: [ HelloWorldComponent ]
})
export class HelloWorldModule { }