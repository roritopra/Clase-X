/**
 * Ejercicio 6
 * cree una función que a partir de una arreglo de número y letras, ordene el arreglo con todas las
 * letras en las primeras posiciones (ordenadas alfabeticamente) y luego ponga todos los número
 * ordenados ascendentemente.
 *
 * ejem:
 * el arreglo ["b", 6, "a", "q", 7, 2] retornará ["a", "b", "q", 2, 6, 7]
 */

 let words = ["b", "6", "a", "q", "7", "2"];


 function activity6(result:any) {
    result.sort()
    return result
 } 

 console.log("***********Activity 6***********");
console.log(activity6(words));
module.exports = activity6;
