import { Component, OnInit } from '@angular/core';
import {HotelService} from'../hotel.service'
import { habitacion } from '../modelos/habitacion';

@Component({
  selector: 'app-habitacion-nuevo',
  templateUrl: './habitacion-nuevo.component.html',
  styleUrls: ['./habitacion-nuevo.component.css']
})
export class HabitacionNuevoComponent implements OnInit {
  habitacionNuevo:any;
  guardoHabitacion:any;

  constructor(private dataService: HotelService) { }

  ngOnInit() {
  }

  crearHabitacion()
  { 
   let persona= ((<HTMLSelectElement>(document.getElementById("selecionarPersonas"))).options[((<HTMLSelectElement>document.getElementById("selecionarPersonas")).selectedIndex)].id);

    
    this.habitacionNuevo=[];
    this.guardoHabitacion=[];

    
    this.habitacionNuevo.push((<HTMLSelectElement>(document.getElementById("selecionarPersonas"))).options[(<HTMLSelectElement>document.getElementById("selecionarPersonas")).selectedIndex].id);
    this.habitacionNuevo.push((<HTMLSelectElement>(document.getElementById("numeroHabitacion"))).value);
    this.habitacionNuevo.push((<HTMLInputElement>(document.getElementById("extencionHabitacion"))).value);
    this.habitacionNuevo.push((<HTMLSelectElement>(document.getElementById("selecionTipoHabitacion"))).options[((<HTMLSelectElement>document.getElementById("selecionTipoHabitacion")).selectedIndex)].id);
    this.habitacionNuevo.push((<HTMLSelectElement>(document.getElementById("selecionarPiso"))).options[((<HTMLSelectElement>document.getElementById("selecionTipoHabitacion")).selectedIndex)].id);
    this.habitacionNuevo.push((<HTMLSelectElement>(document.getElementById("selecionarEstado"))).options[((<HTMLSelectElement>document.getElementById("selecionarEstado")).selectedIndex)].id); 
    this.habitacionNuevo.push(localStorage.getItem("hotelId"));
    this.dataService.crearHabitacion(this.habitacionNuevo).subscribe((data)=>{this.guardoHabitacion.push(data);
    });
  }
}
