import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { hotel } from '../modelos/hotel';
import datosSeleccion from '../../assets/datos/lista.json'
import {HotelService} from'../hotel.service'
import Swal from 'sweetalert2';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hotel-consultar',
  templateUrl: './hotel-consultar.component.html',
  styleUrls: ['./hotel-consultar.component.css']
})
export class HotelConsultarComponent implements OnInit {

  hoteles:any;
  jsonData: any;
  formHotel: FormGroup;
  constructor(private formBuilder: FormBuilder, private dataService: HotelService) {
    this.formHotel = new FormBuilder().group(hotel);
    
   }

  ngOnInit(){
    this.formHotel = this.formBuilder.group({id: ['',Validators.required],
    nombre: ['',Validators.required],
    direccion: ['',Validators.required],
    telefono: ['',Validators.required],
    estado: ['',Validators.required],
    habitacion: ['',Validators.required]
    });
    this.jsonData = datosSeleccion;
    this.consultarHoteles();
  }

  consultarHoteles(){
    this.dataService.consultarHoteles().subscribe(
      data =>{
        this.hoteles = data;
      });
  }

  asociarHabitacion(id:any)
  {
    localStorage.setItem("hotelId",id);
    

  }
}
