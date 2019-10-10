import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartaComponent } from './pages/carta/carta.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ReservaComponent } from './pages/reserva/reserva.component';
import { MesasComponent } from './pages/mesas/mesas.component';
import { ReporteComponent } from './pages/reporte/reporte.component';
import { StockComponent } from './pages/stock/stock.component';
import { FacturaComponent } from './pages/factura/factura.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'carta',
    component: CartaComponent
  },
  {
    path: 'reserva',
    component: ReservaComponent
  },
  {
    path: 'mesas',
    component: MesasComponent
  },
  {
    path: 'reporte',
    component: ReporteComponent
  },
  {
    path: 'stock',
    component: StockComponent
  },
  {
    path: 'factura',
    component: FacturaComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
