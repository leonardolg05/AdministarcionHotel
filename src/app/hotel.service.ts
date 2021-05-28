import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { hotel } from './modelos/hotel';
import {habitacion} from './modelos/habitacion';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }

  crearHotel(hotel:hotel, estado:number){   
    
    let datosHotel = ({
      "nombre":hotel.nombre,
      "direccion":hotel.direccion,
      "telefono":hotel.telefono,
      "estado":estado
    });
    
    return this.http.post("http://localhost:60605/api/Hotel/CrearAlojamiento",datosHotel);
    
  }

  consultarHoteles(){   
    return this.http.post("http://localhost:60605/api/Hotel/ObtenerAlojamientos","");    
  }


  crearHabitacion(habitacion:any){
    debugger;
    let habitacionGuardar= ({
      "localizacion":1,
      "numero":habitacion[1],
      "numeroCamas":habitacion[0],
      "piso":habitacion[4],
      "estado":habitacion[5],
      "vista":1,
      "alojamientoId":'87AE33EF-97B5-45B8-745F-08D921AD7A33'
    });
    return this.http.post("http://localhost:60605/api/Habitacion/CrearHabitacion",habitacionGuardar);

  }

  consultarHabitaciones(habitacion:habitacion)
  {
    let habitaciones = (
      {
        "idHotel":habitacion.alojamientoId
      }
    );
    return this.http.post("http://localhost:60605/api/Hotel/CrearAlojamiento",habitaciones);

  }

  consultarHabitacionDisponibles(fechaInicial:any, fechaFinal:any)
  {
    let fechas = ({
      "fechaIngreso": new Date(fechaInicial),
      "fechaSalida": new Date(fechaFinal)
    });
    return this.http.post("http://localhost:60605/api/Reserva/ObtenerHabitaciones",fechas);
  }
}
