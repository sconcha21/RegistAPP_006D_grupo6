import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {
  valor: String;

  constructor() { }

  nombreUsuario: String;
  contrasena: String;

  persona = new FormGroup({
    elnombreUsuario: new FormControl(''),
    laContrasena: new FormControl('')
  });

  // arreglo
  lista_personas = new Array();

  //metodo
  grabar() {
    console.log(this.persona.value);
    this.lista_personas.push(this.persona.value);

  }

  ngOnInit() {
  }

}
