import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { HttpClientModule } from '@angular/common/http';
import { SenaleticaComponent } from './preguntas-generales/senaletica/senaletica.component';
import { CoipComponent } from './preguntas-generales/coip/coip.component';
import { BrowserModule } from '@angular/platform-browser';
import { MensajeComponent } from './components/mensaje/mensaje.component';




@NgModule({
  declarations: [
    SenaleticaComponent,
    CoipComponent,
    PreguntasComponent,
    MensajeComponent

  ],
  imports: [
    CommonModule,
    BrowserModule, 
    HttpClientModule,
   
  ], exports: [
    PreguntasComponent,
    SenaleticaComponent,
    CoipComponent,
    MensajeComponent
  ]
})
export class LicenciasModule { }
