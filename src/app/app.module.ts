import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, CalculadoraComponent],
  bootstrap: [AppComponent, CalculadoraComponent]
})
export class AppModule {}
