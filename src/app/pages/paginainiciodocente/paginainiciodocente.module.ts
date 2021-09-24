import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginainiciodocentePageRoutingModule } from './paginainiciodocente-routing.module';

import { PaginainiciodocentePage } from './paginainiciodocente.page';

import { Routes,RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: PaginainiciodocentePage,
  children: [
   
    {
      path: 'codigo-qr',
      loadChildren: () => import('../codigo-qr/codigo-qr.module').then( m => m.CodigoQRPageModule)
    },
    {
      path: 'home',
      loadChildren: () => import('../docente/docente.module').then( m => m.DocentePageModule)
    }
    
  ],
}];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginainiciodocentePageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PaginainiciodocentePage]
})
export class PaginainiciodocentePageModule {}
