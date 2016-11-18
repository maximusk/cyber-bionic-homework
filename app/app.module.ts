import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppComponent}   from './app.component';
import {routes} from "./app.routes";

import {ComponentsModule} from "./components/components.module";


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        ComponentsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
