import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-paginainiciodocente',
  templateUrl: './paginainiciodocente.page.html',
  styleUrls: ['./paginainiciodocente.page.scss'],
})
export class PaginainiciodocentePage implements OnInit {

  constructor(private loadingController: LoadingController , private alertController: AlertController) {}

  ngOnInit() {
    this.animacionCargando();
  }

  async animacionCargando() {
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
