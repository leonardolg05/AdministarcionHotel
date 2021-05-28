import { Component, OnInit } from '@angular/core';
import {Login} from '../modelos/login'
import {AuthService} from '../auth.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  loginAdministracionHoteles() {
    var posts:any=[];
    let usuario = (<HTMLInputElement>document.getElementById("tbxUsuario")).value;
    let contrasena = (<HTMLInputElement>document.getElementById("tbxContraseña")).value;
    localStorage.setItem("mailUsuario", usuario);
    localStorage.setItem("nombreFormulario", '');
    localStorage.setItem("permisoFormulario", '');
    let login = new Login();
    login.password = contrasena;
    login.usuario = usuario

    this.authService.loguearUsuario(login).subscribe(data => {
      posts.push(data)
      debugger;
      for (let post of posts) {
        
        if (post.token) {
          localStorage.setItem("logueado","true");
          //this.router.navigate(['mainPage']);
        }
        else {
          Swal.fire('Error', 'Usario o contraseña no valida', 'error');
          localStorage.clear();
        }

      }

    }, error => {
      Swal.fire('Error', 'En este momento tenemos dificultades técnicas, intente mas tarde', 'error');
    })
  }

}
