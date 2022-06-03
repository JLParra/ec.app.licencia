import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { PreguntasyRespuestasResponse } from '../../interfaces/preguntas';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styles: [
  ]
})
export class PreguntasComponent implements OnInit {

  @Input() preguntasSeleccionadas: PreguntasyRespuestasResponse[] = [];
  @Output() onSelect: EventEmitter<Event> = new EventEmitter();

  
  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(e: any){
    /* AGREGAMOS LAS RESPUESTAS A UN LOCAL STORAGE */
    localStorage.setItem(e.target.value.substr(0, 7), e.target.value);
  }
}
