import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartaComponent } from './pages/carta/carta.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ReservaComponent } from './pages/reserva/reserva.component';
import { ReporteComponent } from './pages/reporte/reporte.component';
import { StockComponent } from './pages/stock/stock.component';
import { FacturaComponent } from './pages/factura/factura.component';
import { BalanceComponent } from './pages/balance/balance.component';

// import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pedidos',
    component: CartaComponent
  },
  {
    path: 'reserva',
    component: ReservaComponent
  },
  {
    path: 'reporte',
    component: ReporteComponent
  },
  {
    path: 'balance',
    component: BalanceComponent
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
