import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SenaleticaComponent } from './senaletica/senaletica.component';
import { CoipComponent } from './coip/coip.component';




@NgModule({
  declarations: [
    SenaleticaComponent,
    CoipComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ], exports: [
    SenaleticaComponent
  ],
})
export class PreguntasGeneralesModule { }
