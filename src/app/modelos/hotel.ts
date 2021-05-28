import { Injectable } from '@angular/core';
import {habitacion} from './habitacion'

@Injectable({
    providedIn: 'root'
  })

  export class hotel{
      //id:string;
      nombre:string;
      direccion:string;
      telefono:string;
      //habitacion:habitacion;
      constructor(){
        //this.id="";
        this.nombre="";
        this.direccion="";
        this.telefono="";
        //this.habitacion= new habitacion;

      }
  }