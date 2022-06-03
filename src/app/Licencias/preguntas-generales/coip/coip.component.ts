import { Component, OnInit } from '@angular/core';
import { PreguntasyRespuestasResponse } from '../../interfaces/preguntas';
import { PreguntasGeneralesService } from '../../services/preguntas-generales.service';

@Component({
  selector: 'app-coip',
  templateUrl: './coip.component.html',
  styles: [
  ]
})
export class CoipComponent implements OnInit {
  preguntas: PreguntasyRespuestasResponse[] = [];
  preguntasSeleccionadas: PreguntasyRespuestasResponse[] = [];
  finish: boolean = false;

  constructor(private _preguntasService: PreguntasGeneralesService) {
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
    this._preguntasService.obtenerPreguntasCoip().subscribe(data => {
      this.preguntas = data;
      console.log(this.preguntas);
      this.preguntasSeleccionadas = this._preguntasService.randonPreguntas(20, this.preguntas);
    });
    this.finish = false;


  }
  finalizar() {
    this.finish = true;
    console.log(this.preguntasSeleccionadas.length);
    this._preguntasService.finalizar(this.preguntasSeleccionadas);
  }
  get Incorrectas() {
    return this._preguntasService.respuestasIncorrectas;
  }
  get Correctas() {
    return this._preguntasService.contador;
  }


}
