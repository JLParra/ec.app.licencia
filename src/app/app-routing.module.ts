import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoAComponent } from './Licencias/preguntas-especificas/tipo-a/tipo-a.component';
import { TipoBYFComponent } from './Licencias/preguntas-especificas/tipo-byf/tipo-byf.component';
import { TipoCComponent } from './Licencias/preguntas-especificas/tipo-c/tipo-c.component';
import { CoipComponent } from './Licencias/preguntas-generales/coip/coip.component';
import { MecanicasComponent } from './Licencias/preguntas-generales/mecanicas/mecanicas.component';
import { ReglamentosAplicacionComponent } from './Licencias/preguntas-generales/reglamentos-aplicacion/reglamentos-aplicacion.component';

import { SenaleticaComponent } from './Licencias/preguntas-generales/senaletica/senaletica.component';


const routes: Routes = [
  {
    path: '', component: SenaleticaComponent, 
  },
  {
    path: 'coip', component: CoipComponent
  },
  {
    path: 'reglamentodeaplicacion', component: ReglamentosAplicacionComponent
  },
  {
    path: 'mecanicas', component: MecanicasComponent
  },
  {
    path: 'licencia_a', component: TipoAComponent
  },
  {
    path: 'licencia_byf', component: TipoBYFComponent
  },{
    path: 'licencia_c', component: TipoCComponent
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
