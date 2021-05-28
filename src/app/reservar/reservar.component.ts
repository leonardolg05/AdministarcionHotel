import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {HotelService} from'../hotel.service'

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent implements OnInit {
  habitaciones:any;

  constructor(private dataService: HotelService) { }

  ngOnInit(): void {
  }

  reservar(){

  }

  TableFilter() {
    let valor = (<HTMLInputElement>document.getElementById("buscar")).value;
    var rows = document.querySelectorAll("table tbody tr");
    let contadorClientes = 0;

    for (var i = 0; i < rows.length; i++) {
      var showRow = false;
      var row = rows[i];
      row.setAttribute("style", "display:none;")
      for (var x = 0; x < row.childElementCount; x++) {
        if (row.children[x].textContent!.toLowerCase().indexOf(valor.toLowerCase().trim()) > -1) {
          showRow = true;
          break;
        }
      }
      if (showRow) {
        contadorClientes++;
        row.setAttribute("style", "display:null;");
      }
    }
    if (contadorClientes == 0) {
      Swal.fire('', 'No existe el cliente', 'info');
    }
  }

  buscarHabitaciones(){
    debugger;
    let fechaInicial= (<HTMLInputElement>document.getElementById("fechaInicial")).valueAsDate;
    let fechaFinal= (<HTMLInputElement>document.getElementById("fechaFinal")).valueAsDate;
    debugger;

    this.dataService.consultarHabitacionDisponibles(fechaInicial,fechaFinal)

    
  }
  
}
