import { Injectable } from '@angular/core';
import { hotel } from './hotel';

@Injectable({
    providedIn: 'root'
  })

  export class habitacion{
      id:string;
      numero:number;
      piso:number;
      tipoHabitacion:number;
      vista:number;
      localizacion:number;
      numeroCamas:number;
      capacidadPersonas:number;
      estado:number;
      alojamientoId:number
      constructor(){
        this.id="";
        this.numero=0;
        this.piso=0;
        this.tipoHabitacion=0;
        this.vista=0;
        this.localizacion=0;
        this.numeroCamas=0;
        this.capacidadPersonas=0;
        this.estado=0;
        this.alojamientoId=0;
      }
  }