import { Routes} from '@angular/router';
import {  HotelConsultarComponent } from '../../src/app/hotel-consultar/hotel-consultar.component';
import { HotelNuevoComponent } from './hotel-nuevo/hotel-nuevo.component';
import { HabitacionNuevoComponent} from './habitacion-nuevo/habitacion-nuevo.component';
import { ReservarComponent } from './reservar/reservar.component';
import {LoginComponent} from './login/login.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'consultarHoteles', component: HotelConsultarComponent },
    { path: 'crearHoteles', component: HotelNuevoComponent },
    { path: 'crearHabitacion', component: HabitacionNuevoComponent},
    {path:'reserva', component: ReservarComponent},
    {path:'login', component: LoginComponent}
    
];
