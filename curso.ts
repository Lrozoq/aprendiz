import {Curso} from "./curso.js"
export enum NivelEducativo{
    BACHILLERATO="Bachillerato",
    UNIVERSITARIO="Universitario",
    POSGRADO="Posgrado"
}
export class Curso {
    constructor(public nombre: string, public horas: number, public calificacion: number, public certificado: boolean, public anio:number) {
        
    }
}