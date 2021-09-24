import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginainiciodocentePage } from './paginainiciodocente.page';

const routes: Routes = [
  {
    path: '',
    component: PaginainiciodocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginainiciodocentePageRoutingModule {}
