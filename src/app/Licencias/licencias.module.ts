import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { SenaleticaComponent } from './preguntas-generales/senaletica/senaletica.component';
import { CoipComponent } from './preguntas-generales/coip/coip.component';
import { BrowserModule } from '@angular/platform-browser';
import { MensajeComponent } from './components/mensaje/mensaje.component';
import { ReglamentosAplicacionComponent } from './preguntas-generales/reglamentos-aplicacion/reglamentos-aplicacion.component';
import { MecanicasComponent } from './preguntas-generales/mecanicas/mecanicas.component';
import { TipoAComponent } from './preguntas-especificas/tipo-a/tipo-a.component';



import { TipoBYFComponent } from './preguntas-especificas/tipo-byf/tipo-byf.component';
import { TipoCComponent } from './preguntas-especificas/tipo-c/tipo-c.component';





@NgModule({
  declarations: [
    PreguntasComponent,
    MensajeComponent,
    SenaleticaComponent,
    CoipComponent,
    ReglamentosAplicacionComponent,
    MecanicasComponent,
    TipoAComponent,
    TipoBYFComponent,
    TipoCComponent
  
  ],
  imports: [
    CommonModule,
    NgbModule,
    BrowserModule, 
    HttpClientModule,
   
  ], exports: [
    PreguntasComponent,
    MensajeComponent,
    SenaleticaComponent,
    CoipComponent,
    ReglamentosAplicacionComponent,
    MecanicasComponent,
    TipoAComponent,
    TipoBYFComponent,
    TipoCComponent,
    NgbModule
  ]
})
export class LicenciasModule { }
