import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

import { Routes,RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: TabsPage,
  children: [
   
    {
      path: 'generar-qr',
      loadChildren: () => import('../codigo-qr/codigo-qr.module').then( m => m.CodigoQRPageModule)
    },
    {
      path: 'home',
      loadChildren: () => import('../alumno/alumno.module').then( m => m.AlumnoPageModule)
    }
    
  ],
}];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}