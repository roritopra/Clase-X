"use strict";
/*
* ejercicio 1
* cree una función que recibe 2 arreglos como parametros.
* luego combina estos arreglos en uno solo, alternando sus valores.
*
* ejem: dados los arreglos ["h", "a", "c"] y [7, 4, 17, 10, 48],
* la respuesta deber ser: ["h", 7, "a", 4, "c", 17, 10, 48]
*
* note que los arreglos pueden ser de diferente tamaños y el contenido puede ser cualquier tipo de dato
*/
var letts = ["h", "a", "c"];
var numbs = ["7", "4", "17", "10", "48"];
function activity1(lets, numbs) {
    let result = lets.concat(numbs);
    return result;
}
console.log("***********Activity 1***********");
console.log(activity1(letts, numbs));
module.exports = activity1;
