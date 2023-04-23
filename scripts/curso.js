export var NivelEducativo;
(function (NivelEducativo) {
    NivelEducativo["BACHILLERATO"] = "Bachillerato";
    NivelEducativo["UNIVERSITARIO"] = "Universitario";
    NivelEducativo["POSGRADO"] = "Posgrado";
})(NivelEducativo || (NivelEducativo = {}));
var Curso = /** @class */ (function () {
    function Curso(nombre, horas, calificacion, certificado, anio) {
        this.nombre = nombre;
        this.horas = horas;
        this.calificacion = calificacion;
        this.certificado = certificado;
        this.anio = anio;
    }
    return Curso;
}());
export { Curso };
