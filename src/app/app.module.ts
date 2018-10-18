import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Pruebas1Component } from './pruebas1/pruebas1.component';

@NgModule({
  declarations: [
    AppComponent,
    Pruebas1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
