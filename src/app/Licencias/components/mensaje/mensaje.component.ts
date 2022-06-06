import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PreguntasyRespuestasResponse } from '../../interfaces/preguntas';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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


  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

  }



}
