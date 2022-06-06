import { Component, OnInit } from '@angular/core';
import { PreguntasyRespuestasResponse } from '../../interfaces/preguntas';
import { LicenciaService } from '../../services/licencia.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-senaletica',
  templateUrl: './senaletica.component.html',
  styles: [
  ]
})
export class SenaleticaComponent implements OnInit {
  preguntas: PreguntasyRespuestasResponse[] = []
  preguntasSeleccionadas: PreguntasyRespuestasResponse[] = [];
  finish: boolean = false;
  constructor(private _licenciaService: LicenciaService,private modalService: NgbModal) {
    this.finish = false;
    this.preguntas = [];
    this.preguntasSeleccionadas = [];
  }

  ngOnInit(): void {
    this.preguntas = [];
    this.preguntasSeleccionadas = [];
    this.cargarPreguntas();
  }
  ngOnDestroy(): void {
    this.preguntas = [];
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  cargarPreguntas() {
    
    this.preguntas = [];
    this.preguntasSeleccionadas = [];
    this.finish = false;
    this._licenciaService.obtenerPreguntasSeñaleticas().subscribe(data => {
      this.preguntas = data;
      this.preguntasSeleccionadas = this._licenciaService.randonPreguntas(20,this.preguntas);
    });
  }
  finalizar(content: any) {
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
