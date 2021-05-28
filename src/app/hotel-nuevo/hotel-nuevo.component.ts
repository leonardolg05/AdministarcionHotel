import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { hotel } from '../modelos/hotel';
import datosSeleccion from '../../assets/datos/lista.json'
import {HotelService} from'../hotel.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hotel-nuevo',
  templateUrl: './hotel-nuevo.component.html',
  styleUrls: ['./hotel-nuevo.component.css']
})
export class HotelNuevoComponent implements OnInit {

  jsonData: any;
  formHotel: FormGroup;
  hotelCreado: any;
  constructor(private formBuilder: FormBuilder,private dataService: HotelService) {
    this.formHotel = new FormBuilder().group(hotel);
   }

  ngOnInit(){
    this.formHotel = this.formBuilder.group({
    nombre: ['',Validators.required],
    direccion: ['',Validators.required],
    telefono: ['',Validators.required],
    });
    this.jsonData = datosSeleccion;
  }

  crearHotel(campos:hotel){
debugger;
let estado = (<HTMLSelectElement>document.getElementById("estado")).selectedIndex;
    this.dataService.crearHotel(campos, estado).subscribe(
      data =>{
        this.hotelCreado = data;
        if (this.hotelCreado.id == null){
          Swal.fire('Error', 'El vehiculo ya se encuentra registrado', 'error'); 
        }
      }, error => 
      {
          Swal.fire('Error', 'En este momento tenemos dificultades técnicas, intente mas tarde', 'error');
      }
    );

  }
  onSubmit(){
    debugger;
 if(this.formHotel.valid){
        var valueForm = this.formHotel.value;
      //  var listaObject= {"marca":this.marca,"color":this.color,"tipoServicio":this.tipoServicio,
       // "tipoVehiculo":this.tipoVehiculo,"tipoCombustible":this.tipoCombustible,
       // "organismoTransito":this.organismoTransito,"tarifa":this.tarifa};
        //if (this.validarDocumentos(valueForm.concesionario)){
         this.crearHotel(valueForm);
    }
    else{
      Swal.fire('Error', 'Las listas de creac&iacute;on del veh&iacute;culo deben de estar seleccionadas', 'error');
    }
    
  }
}
