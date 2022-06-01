
export interface PreguntasyRespuestasResponse {
    identificador:string;
    pregunta: String;
    respuestas :respuestas[];
    imagen?:String;

}

export interface respuestas {
    id:String;
    contestacion: String;
    correcta :boolean;
}