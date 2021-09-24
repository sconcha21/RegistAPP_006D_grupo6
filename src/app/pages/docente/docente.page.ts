import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {

  constructor() {}

  nombreUsuario: String;
  contrasena: String;

  persona = new FormGroup({
    elnombreUsuario: new FormControl(''),
    laContrasena: new FormControl('')
  });

  grabar() {
    console.log(this.persona.value);
  }

  ngOnInit() {
    
  }
}
