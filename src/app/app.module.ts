import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPlatoComponent } from './app-plato/app-plato.component';
import { AppCardComponent } from './app-card/app-card.component';


@NgModule({
  declarations: [
    AppComponent,
    AppPlatoComponent,
    AppCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
