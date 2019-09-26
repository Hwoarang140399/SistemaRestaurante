import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Compoments
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPlatoComponent } from './components/app-plato/app-plato.component';
import { AppCardComponent } from './components/app-card/app-card.component';
import { AppStatisticsComponent } from './components/app-statistics/app-statistics.component';

//Shared
import { InputComponent } from './shared/input/input.component';

//Viewss
import { HomeComponent } from './pages/home/home.component';
import { CartaComponent } from './pages/carta/carta.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AppPlatoComponent,
    AppCardComponent,
    HomeComponent,
    CartaComponent,
    AppStatisticsComponent,
    DashboardComponent,
    LoginComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
