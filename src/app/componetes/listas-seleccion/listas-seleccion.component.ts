import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-listas-seleccion',
  templateUrl: './listas-seleccion.component.html',
  styleUrls: ['./listas-seleccion.component.css']
})
export class ListasSeleccionComponent implements OnInit {

  @Input() seleccionObjeto:any;
  @Output() valorSeleccion = new EventEmitter<any>();
  seleccion:any="";

  constructor() { }

  ngOnInit(): void {
    
  }

  seleccionCambio(event:any){
    this.valorSeleccion.emit(event);
  }

}
