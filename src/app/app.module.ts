import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { DadosPessComponent } from './dados-pess/dados.component'

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule
    // BrowserModule, DadosPessComponent
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }