import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Login} from './modelos/login'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loguearUsuario(obj:Login){   
    
    let datosLogueo = {
      "userName":obj.usuario,
      "Password":obj.password
    };
    
    return this.http.post("http://localhost:60605/api/Account/Login",datosLogueo);
    
  }
}
