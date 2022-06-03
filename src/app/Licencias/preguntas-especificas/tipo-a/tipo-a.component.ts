import { Component, OnInit } from '@angular/core';
import { PreguntasyRespuestasResponse } from '../../interfaces/preguntas';
import { LicenciaService } from '../../services/licencia.service';

@Component({
  selector: 'app-tipo-a',
  templateUrl: './tipo-a.component.html',
  styles: [
  ]
})
export class TipoAComponent implements OnInit {
  preguntas: PreguntasyRespuestasResponse[] = [];
  preguntasSeleccionadas: PreguntasyRespuestasResponse[] = [];
  finish: boolean = false;

  constructor(private _licenciaService: LicenciaService) {
    this.finish = false;
    this.preguntas = [];
    this.preguntasSeleccionadas = [];
    console.log("Se construyo la clase");
  }

  ngOnInit(): void {
    console.log("Se inicio la clase");
    this.preguntas = [];
    this.preguntasSeleccionadas = [];
    this.cargarPreguntas();
  }
  ngOnDestroy(): void {
    console.log("se destruyo la clase");
    this.preguntas = [];
  }

  cargarPreguntas() {
    this.preguntas = [];
    this.preguntasSeleccionadas = [];
    console.log(this.preguntas);
    this._licenciaService.obtenerPreguntasLicenciaA().subscribe(data => {
      this.preguntas = data;
      console.log(this.preguntas);
      this.preguntasSeleccionadas = this._licenciaService.randonPreguntas(20, this.preguntas);
    });
    this.finish = false;


  }
  finalizar() {
    this.finish = true;
    console.log(this.preguntasSeleccionadas.length);
    this._licenciaService.finalizar(this.preguntasSeleccionadas);
  }
  get Incorrectas() {
    return this._licenciaService.respuestasIncorrectas;
  }
  get Correctas() {
    return this._licenciaService.contador;
  }
}
