import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginainicioalumnoPageRoutingModule } from './paginainicioalumno-routing.module';

import { PaginainicioalumnoPage } from './paginainicioalumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginainicioalumnoPageRoutingModule
  ],
  declarations: [PaginainicioalumnoPage]
})
export class PaginainicioalumnoPageModule {}
