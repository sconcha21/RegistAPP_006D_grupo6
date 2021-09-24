import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginainicioalumnoPage } from './paginainicioalumno.page';

const routes: Routes = [
  {
    path: '',
    component: PaginainicioalumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginainicioalumnoPageRoutingModule {}
