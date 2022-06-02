import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PreguntasyRespuestasResponse } from 'src/app/interfaces/preguntas';
import { PreguntasGeneralesService } from '../services/preguntas-generales.service';

@Component({
  selector: 'app-senaletica',
  templateUrl: './senaletica.component.html',
  styles: [
  ]
})
export class SenaleticaComponent implements OnInit {
  preguntas: PreguntasyRespuestasResponse[] = [];
  preguntasSeleccionadas: PreguntasyRespuestasResponse[] = [];
  incorrectas: PreguntasyRespuestasResponse[] = [];
  index: number[] = [];
  contador: number = 0;
  acumulador: number = 0;
  finish: boolean = false;
  constructor(private _preguntasService: PreguntasGeneralesService) {
    this.finish = false;
  }

  ngOnInit(): void {
    this.preguntasSeleccionadas = [];
    this.cargarPreguntas();
  }

  cargarPreguntas() {
    this.preguntasSeleccionadas = [];
    this.finish = false;
    this._preguntasService.obtenerPreguntasSeñaleticas().subscribe(data => {
      this.preguntas = data
      this.preguntasSeleccionadas = this._preguntasService.randonPreguntas(20, this.preguntas);
    });
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

  seleccionar(e: any) {
    this._preguntasService.cambioValor(e);
  }

}
