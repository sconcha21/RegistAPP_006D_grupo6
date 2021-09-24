import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';


@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})
export class CodigoQRPage implements OnInit {
    // indicar la direccion o elemento a generar como codigo QR
    qrData="http://www.google.cl";
    // establecer el tipo de elemento que sera utilizado
    elementType: 'url' | 'img' | 'canvas' = 'canvas';
 
  constructor(private barcodeScanner : BarcodeScanner,
    private base64ToGallery: Base64ToGallery) { }

ngOnInit() {
}

scannerCode(){

}
}
