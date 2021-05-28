import { Injectable } from '@angular/core';
import { Login } from '../modelos/login';

@Injectable({
    providedIn: 'root'
  })
export class LoginBinding{

    private Login:Login = new Login();

    constructor() { }

    public setLgoin(login:Login){
        this.Login = login;
    }

    public getLogin(){
        return this.Login;
    }

}