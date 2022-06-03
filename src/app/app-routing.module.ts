import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoAComponent } from './Licencias/preguntas-especificas/tipo-a/tipo-a.component';
import { TipoBYFComponent } from './Licencias/preguntas-especificas/tipo-byf/tipo-byf.component';
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
    path: 'preguntas/licencia/a', component: TipoAComponent
  },
  {
    path: 'preguntas/licencia/byf', component: TipoBYFComponent
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
