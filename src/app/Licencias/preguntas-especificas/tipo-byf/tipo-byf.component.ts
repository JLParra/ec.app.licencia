import { Component, OnInit } from '@angular/core';
import { PreguntasyRespuestasResponse } from '../../interfaces/preguntas';
import { LicenciaService } from '../../services/licencia.service';

@Component({
  selector: 'app-tipo-byf',
  templateUrl: './tipo-byf.component.html',
  styles: [
  ]
})
export class TipoBYFComponent implements OnInit {
  preguntas: PreguntasyRespuestasResponse[] = [];
  preguntasSeleccionadas: PreguntasyRespuestasResponse[] = [];
  finish: boolean = false;

  constructor(private _licenciaService: LicenciaService) {
    this.finish = false;
    this.preguntas = [];
    this.preguntasSeleccionadas = [];

  }

  ngOnInit(): void {
    console.log("Se inicio la clase");
    this.preguntas = [];
    this.preguntasSeleccionadas = [];
    this.cargarPreguntas();
  }
  ngOnDestroy(): void {
    this.preguntas = [];
  }

  cargarPreguntas() {
    this.preguntas = [];
    this.preguntasSeleccionadas = [];
    this._licenciaService.obtenerPreguntasLicenciaByF().subscribe(data => {
      this.preguntas = data;
      this.preguntasSeleccionadas = this._licenciaService.randonPreguntas(20, this.preguntas);
    });
    this.finish = false;


  }
  finalizar(content : any) {
    this.finish = true;
    this._licenciaService.finalizar(this.preguntasSeleccionadas, content);
  }
  get Incorrectas() {
    return this._licenciaService.respuestasIncorrectas;
  }
  get Correctas() {
    return this._licenciaService.contador;
  }

}
