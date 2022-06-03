import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoipComponent } from './Licencias/preguntas-generales/coip/coip.component';
import { MecanicasComponent } from './Licencias/preguntas-generales/mecanicas/mecanicas.component';
import { ReglamentosAplicacionComponent } from './Licencias/preguntas-generales/reglamentos-aplicacion/reglamentos-aplicacion.component';

import { SenaleticaComponent } from './Licencias/preguntas-generales/senaletica/senaletica.component';


const routes: Routes = [
  {
    path: '', component: SenaleticaComponent, 
  },
  {
    path: 'preguntas_generales/coip', component: CoipComponent
  },
  {
    path: 'preguntas_generales/reglamentodeaplicacion', component: ReglamentosAplicacionComponent
  },
  {
    path: 'preguntas_generales/mecanicas', component: MecanicasComponent
  },
    
  {
    path: '**', redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
