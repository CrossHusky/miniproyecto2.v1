import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class AltasService {
  tareas : Tarea[] = [];
  constructor() { 
    this.tareas= [];

  }

  getTareas() {
    if(localStorage.getItem('datos')===null){

    
    return this.tareas;
    }else{
      this.tareas = JSON.parse(localStorage.getItem('datos') || '{}');
      return this.tareas;
    }
  }

  addTareas(tarea: Tarea){
    let tareas: Tarea[] = [];
    if(localStorage.getItem('datos') === null){    
      tareas.push(tarea);
      localStorage.setItem('datos', JSON.stringify(tareas))
    }else{
      tareas = JSON.parse(localStorage.getItem('datos') || '{}');
      tareas.push(tarea);
      localStorage.setItem('datos', JSON.stringify(tareas));

    }
  }
}
