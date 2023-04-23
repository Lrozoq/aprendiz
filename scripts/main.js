import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";
var cursos = [new Curso("Prácticas esenciales para el agilismo", 20, 90, true, 2019),
    new Curso("Ingeniería de software para la web", 25, 90, true, 2019),
    new Curso("Principios de diseño para la web", 45, 70, false, 2022)];
export var ap = new Aprendiz("Juan Pablo", "Reyes Gomez", "avatar.png", 30, NivelEducativo.POSGRADO, cursos);
console.log(ap.cursos);
var aprendizTable = document.getElementById("aprendiz");
mostrarDatosAprendiz(ap);
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "\n    <tr><td colspan=2><img src=\"./" + aprendiz.avatar + "\" height=\"100\"></td></tr>    \n    <tr><td>Nombre</td><td>" + aprendiz.nombres + "</td></tr>\n    <tr><td>Apellidos</td><td>" + aprendiz.apellidos + "</td></tr>\n    <tr><td>Nivel educativo</td><td>" + aprendiz.nivelEducativo + "</td></tr>\n    <tr><td>Edad</td><td>" + aprendiz.edad + "</td></tr>";
    aprendizTable.appendChild(tbodyAprendiz);
}
