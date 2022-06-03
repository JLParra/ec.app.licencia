import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { HttpClientModule } from '@angular/common/http';
import { SenaleticaComponent } from './preguntas-generales/senaletica/senaletica.component';
import { CoipComponent } from './preguntas-generales/coip/coip.component';
import { BrowserModule } from '@angular/platform-browser';
import { MensajeComponent } from './components/mensaje/mensaje.component';
import { ReglamentosAplicacionComponent } from './preguntas-generales/reglamentos-aplicacion/reglamentos-aplicacion.component';




@NgModule({
  declarations: [
    PreguntasComponent,
    MensajeComponent,
    SenaleticaComponent,
    CoipComponent,
    ReglamentosAplicacionComponent
  ],
  imports: [
    CommonModule,
    BrowserModule, 
    HttpClientModule,
   
  ], exports: [
    PreguntasComponent,
    MensajeComponent,
    SenaleticaComponent,
    CoipComponent,
    ReglamentosAplicacionComponent
  ]
})
export class LicenciasModule { }
