import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppCardComponent } from './components/app-card/app-card.component';
import { AppPlatoComponent } from './components/app-plato/app-plato.component';
import {HomeComponent} from './pages/home/home.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'platos',
    component: AppPlatoComponent
  }

  // {
  //   path: 'not-found',
  //   component: NotFoundComponent
  // },
  // {
  //   path: '**',
  //   redirectTo: 'not-found'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
