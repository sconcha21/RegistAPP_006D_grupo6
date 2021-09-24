import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

    constructor(public loadingController: LoadingController) {}
  
    async presentLoading() {
      const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        duration: 2000
      });
      await loading.present();
  
      const { role, data } = await loading.onDidDismiss();
      console.log('Loading dismissed!');
    }
  
    async presentLoadingWithOptions() {
      const loading = await this.loadingController.create({
        spinner: null,
        duration: 5000,
        message: 'Click the backdrop to dismiss early...',
        translucent: true,
        cssClass: 'custom-class custom-loading',
        backdropDismiss: true
      });
      await loading.present();
  
      const { role, data } = await loading.onDidDismiss();
      console.log('Loading dismissed with role:', role);
    } 
  }
