import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PreguntasyRespuestasResponse } from '../interfaces/preguntas';


@Injectable({
  providedIn: 'root'
})
export class PreguntasGeneralesService {
  private index: number[] = [];
  preguntasSeleccionadas: PreguntasyRespuestasResponse[] = [];
  respuestasIncorrectas: PreguntasyRespuestasResponse[] = [];
  contador: number = 0;

  constructor(private http: HttpClient) {

  }

  obtenerPreguntasSeñaleticas() {
    this.preguntasSeleccionadas = [];
    this.respuestasIncorrectas = [];
    this.index = [];
    return this.http.get<PreguntasyRespuestasResponse[]>("assets/json/preguntas.señaletica.json");
  }
  
  obtenerPreguntasCoip() {
    this.preguntasSeleccionadas = [];
    this.respuestasIncorrectas = [];
    return this.http.get<PreguntasyRespuestasResponse[]>("assets/json/preguntas.coip.json");
  }



  randonPreguntas(numero: number, preguntas: PreguntasyRespuestasResponse[]) {
    console.log(preguntas);
    localStorage.clear();
    this.preguntasSeleccionadas = [];
    this.index = [];

    while (this.index.length < numero) {
      var random = Math.floor(Math.random() * preguntas.length);
      var norepe = true;//inicialmente suponemos que no está repetido  
      while (norepe) {
        this.index.forEach(function (item) {
          if (random == item) {
            norepe = false; //detectado nº repetido  
          };
        });
        if (norepe) {
          this.index.push(random); //append al array 
        };

      };
    };
    for (let i = 0; i < this.index.length; i++) {
      this.preguntasSeleccionadas.push(preguntas[this.index[i]]);
    }
    return this.preguntasSeleccionadas;
  }

  finalizar(preguntasSeleccionadas: PreguntasyRespuestasResponse[]) {
    this.contador = 0;
    this.respuestasIncorrectas = [];

    for (let i = 0; i < preguntasSeleccionadas.length; i++) {
      const rsp = localStorage.getItem(this.preguntasSeleccionadas[i].identificador);

      // SI LA RESPUESTA NO ES VACIA SE CUENTAN LAS PREGUNTAS
      if (rsp != null) {
        for (let r = 0; r < preguntasSeleccionadas[i].respuestas.length; r++) {
          if (rsp === this.preguntasSeleccionadas[i].respuestas[r].id) {

            //VALIDAMOS LA RESPUESTA CORRECTA
            if (this.preguntasSeleccionadas[i].respuestas[r].correcta === true) {
              console.log("Identificador Respuesta:", this.preguntasSeleccionadas[i].identificador);
              console.log("Respuesta correcta:", this.preguntasSeleccionadas[i].respuestas[r].id);
              //TODO: RESPUESTA CORRECTA
              this.contador++;

            } else {
              // TODO: RESPUESTA INCORRECTA, SE TIENE QUE LLENAR UN NUEVO ARREGLO PARA GUARDAR LAS RESPUESTAS INCORRECTAS
              this.respuestasIncorrectas.push(this.preguntasSeleccionadas[i]);
            }
          }
        }

      } //TODO: EL USUARIO NO RESPONDIO LA RESPUESTA
      else {
        console.log("La pregunta", preguntasSeleccionadas[i].identificador, "no fue contestada");
        this.respuestasIncorrectas.push(this.preguntasSeleccionadas[i]);
      }
    }
    console.log("Correctas:", this.contador);
    console.log("Incorrectas:", this.respuestasIncorrectas.length);



  }






}



