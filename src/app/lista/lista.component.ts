import { Component, OnInit } from '@angular/core';
import { Tarea } from '../models/tarea';

import {AltasService} from '../servicios/altas.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  registro : Tarea[] = [];

  constructor( public altas: AltasService ) { }

  ngOnInit(): void {

    this.registro = this.altas.getTareas();
  }




}
