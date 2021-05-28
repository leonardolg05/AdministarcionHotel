import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-listas-seleccion-id',
    templateUrl: './listas-seleccion-id.component.html',
    styleUrls: ['./listas-seleccion-id.component.css']
  })
export class ListaSeleccionIdComponent implements OnInit{

    @Input() seleccionObjeto:any;
    @Input() seleccionID:any;
    @Output() valorSeleccion = new EventEmitter<any>();
    seleccion:any="";

    ngOnInit(): void {
    
    }

    seleccionCambio(event:any){
        this.valorSeleccion.emit(event);
    }

}