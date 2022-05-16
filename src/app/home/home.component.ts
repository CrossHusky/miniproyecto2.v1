import { Component, OnInit } from '@angular/core';
import {AltasService} from '../servicios/altas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor( public altas: AltasService) { }

  ngOnInit(): void {
  }

  alta(nombre:HTMLInputElement, sexo:HTMLInputElement, correo:HTMLInputElement, cumpleanios:HTMLInputElement){
    console.log("cargando", nombre.value, sexo.value, correo.value, cumpleanios.value);
    this.altas.addTareas({
      nombre: nombre.value, 
      sexo: sexo.value, 
      correo: correo.value,
      cumpleanios: cumpleanios.value
    });
    nombre.value = '';
    sexo.value = '';
    correo.value = '';
    cumpleanios.value = "2022-01-01";
    nombre.focus();
    console.log(this.altas.getTareas());
    return false;
  }
  

}
