import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-paginainicioalumno',
  templateUrl: './paginainicioalumno.page.html',
  styleUrls: ['./paginainicioalumno.page.scss'],
})
export class PaginainicioalumnoPage implements OnInit {

  constructor(private loadingController: LoadingController) {}

  ngOnInit() {
    this.presentLoading();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Iniciando Sesión...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}
