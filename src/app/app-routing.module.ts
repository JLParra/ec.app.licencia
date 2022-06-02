import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoipComponent } from './preguntas-generales/coip/coip.component';
import { SenaleticaComponent } from './preguntas-generales/senaletica/senaletica.component';

const routes: Routes = [
  {
    path: '', component: SenaleticaComponent, 
  },
  {
    path: 'coip', component: CoipComponent
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
