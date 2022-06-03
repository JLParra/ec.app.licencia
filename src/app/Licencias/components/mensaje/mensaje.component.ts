import { Component, Input, OnInit } from '@angular/core';
import { PreguntasyRespuestasResponse } from '../../interfaces/preguntas';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styles: [
  ]
})
export class MensajeComponent implements OnInit {

  @Input() Incorrectas: PreguntasyRespuestasResponse[] = [];
  @Input() preguntasSeleccionadas: PreguntasyRespuestasResponse[] = [];
  @Input() contador: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
