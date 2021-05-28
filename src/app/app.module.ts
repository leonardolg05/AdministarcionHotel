import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelNuevoComponent } from './hotel-nuevo/hotel-nuevo.component';
import { HotelConsultarComponent} from './hotel-consultar/hotel-consultar.component'
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FooterComponent } from './componetes/footer/footer.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ListasSeleccionComponent } from './componetes/listas-seleccion/listas-seleccion.component'
import { ListaSeleccionIdComponent} from './componetes/listas-seleccion-id/listas-seleccion-id.component';
import { HabitacionNuevoComponent } from './habitacion-nuevo/habitacion-nuevo.component';
import { ReservarComponent } from './reservar/reservar.component'

@NgModule({
  declarations: [
    AppComponent,
    HotelNuevoComponent,
    HotelConsultarComponent,
    LoginComponent,
    FooterComponent,
    ListasSeleccionComponent,
    ListaSeleccionIdComponent,
    HabitacionNuevoComponent,
    ReservarComponent
  ],
  imports: [
    RouterModule.forRoot(AdminLayoutRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
