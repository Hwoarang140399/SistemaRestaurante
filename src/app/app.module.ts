import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPlatoComponent } from './components/app-plato/app-plato.component';
import { AppCardComponent } from './components/app-card/app-card.component';
import { AppStatisticsComponent } from './components/app-statistics/app-statistics.component';


//Viewss
import { HomeComponent } from './pages/home/home.component';
import { CartaComponent } from './pages/carta/carta.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AppPlatoComponent,
    AppCardComponent,
    HomeComponent,
    CartaComponent,
    AppStatisticsComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
