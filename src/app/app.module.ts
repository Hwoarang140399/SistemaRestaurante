import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts'
import { FormsModule } from '@angular/forms';

//services
import { PedidoService } from './services/pedido.service'
import { ProductoService } from './services/producto.service';
import { AppointmentService } from './services/appointment.service';

//firebase
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { environment } from '../environments/environment'

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPlatoComponent } from './components/app-plato/app-plato.component';
import { AppCardComponent } from './components/app-card/app-card.component';
import { AppChartComponent } from './components/statistics/app-chart/app-chart.component';
import { AppPedidosComponent } from './components/app-pedidos/app-pedidos.component';
import { PedidoListComponent } from './components/app-pedidos/pedido-list/pedido-list.component';
import { PedidoComponent } from './components/app-pedidos/pedido/pedido.component';
import { AppPdfComponent } from './components/app-pdf/app-pdf.component';
import { AppProductosComponent } from './components/app-productos/app-productos.component';
import { ProductoComponent } from './components/app-productos/producto/producto.component';
import { ProductoListComponent } from './components/app-productos/producto-list/producto-list.component';
import { AppointmentComponent } from './components/app-appointments/appointment/appointment.component';
import { AppointmentListComponent } from './components/app-appointments/appointment-list/appointment-list.component';
import { AppAppointmentsComponent } from './components/app-appointments/app-appointments.component';
import { AppEmpleadomesComponent } from './components/statistics/app-empleadomes/app-empleadomes.component';
import { AppTrendComponent } from './components/statistics/app-trend/app-trend.component';
import { AppTimeComponent } from './components/statistics/app-time/app-time.component';


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
import { ReporteComponent } from './pages/reporte/reporte.component';
import { StockComponent } from './pages/stock/stock.component';
import { FacturaComponent } from './pages/factura/factura.component';
import { BalanceComponent } from './pages/balance/balance.component';




@NgModule({
  declarations: [
    AppComponent,
    AppPlatoComponent,
    AppCardComponent,
    HomeComponent,
    CartaComponent,
    LoginComponent,
    NotfoundComponent,
    ReservaComponent,
    ReporteComponent,
    StockComponent,
    FacturaComponent,
    AppChartComponent,
    TheNavbarComponent,
    TheEggsComponent,
    TheButtonComponent,
    TheFooterComponent,
    AppPedidosComponent,
    PedidoListComponent,
    PedidoComponent,
    AppPdfComponent,
    BalanceComponent,
    AppProductosComponent,
    ProductoComponent,
    ProductoListComponent,
    AppAppointmentsComponent,
    AppointmentComponent,
    AppointmentListComponent,
    AppEmpleadomesComponent,
    AppTrendComponent,
    AppTimeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [PedidoService, ProductoService, AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
