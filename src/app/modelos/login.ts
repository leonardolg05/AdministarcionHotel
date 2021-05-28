import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

  export class Login{
    
    usuario:string;
    password:string;
    token:string;
    expiration:Date;
    identificacion:number;   
    constructor(){
        this.usuario ="";
        this.password = "";
        this.token ="";
        this.expiration = new Date();
        this.identificacion=0;
    } 
  }