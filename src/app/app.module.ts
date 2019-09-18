import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPlatoComponent } from './components/app-plato/app-plato.component';
import { AppCardComponent } from './components/app-card/app-card.component';


//Viewss
import { HomeComponent } from './pages/home/home.component';
import { CartaComponent } from './pages/carta/carta.component';


@NgModule({
  declarations: [
    AppComponent,
    AppPlatoComponent,
    AppCardComponent,
    HomeComponent,
    CartaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
