import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts'
import { FormsModule } from '@angular/forms';

//services
import { PedidoService } from './services/pedido.service'

//firebase
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { environment } from '../environments/environment'

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPlatoComponent } from './components/app-plato/app-plato.component';
import { AppCardComponent } from './components/app-card/app-card.component';
import { AppStatisticsComponent } from './components/app-statistics/app-statistics.component';
import { AppTableComponent } from './components/app-table/app-table.component';
import { AppChartComponent } from './components/app-chart/app-chart.component';
import { AppPedidosComponent } from './components/app-pedidos/app-pedidos.component';
import { PedidoListComponent } from './components/app-pedidos/pedido-list/pedido-list.component';
import { PedidoComponent } from './components/app-pedidos/pedido/pedido.component';

//Shared
import { TheNavbarComponent } from './shared/the-navbar/the-navbar.component';
import { TheEggsComponent } from './shared/the-eggs/the-eggs.component';
import { TheButtonComponent } from './shared/the-button/the-button.component';
import { TheFooterComponent } from './shared/the-footer/the-footer.component';

//Views
import { HomeComponent } from './pages/home/home.component';
import { CartaComponent } from './pages/carta/carta.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ReservaComponent } from './pages/reserva/reserva.component';
import { MesasComponent } from './pages/mesas/mesas.component';
import { ReporteComponent } from './pages/reporte/reporte.component';
import { StockComponent } from './pages/stock/stock.component';
import { FacturaComponent } from './pages/factura/factura.component';


@NgModule({
  declarations: [
    AppComponent,
    AppPlatoComponent,
    AppCardComponent,
    HomeComponent,
    CartaComponent,
    AppStatisticsComponent,
    LoginComponent,
    NotfoundComponent,
    ReservaComponent,
    MesasComponent,
    ReporteComponent,
    StockComponent,
    FacturaComponent,
    AppTableComponent,
    AppChartComponent,
    TheNavbarComponent,
    TheEggsComponent,
    TheButtonComponent,
    TheFooterComponent,
    AppPedidosComponent,
    PedidoListComponent,
    PedidoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [PedidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
