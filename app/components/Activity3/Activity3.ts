/**
 * Ejercicio 3
 * dado un arreglo multidimensional compuesto por varios grupos de 3 letras.
 * ordene su contenido en orden alfabetico.
 *  * las letras de cada grupo están en orden aleatorio.
 *  * cada grupo de letras tambien tiene orden aleatorio en la lista multidimensional.
 */

let array1 = ["x", "y", "z"];
let array2 = ["a", "s", "d"];
let array3 = ["c", "u", "l"];

let group = array1.concat(array2,array3);

function activity3(deck:Array<string>){
    let array = [];
    deck.sort();

    for (let a = 0; a < deck.length; a++) {
     const element = deck[a];
     array.push(element);
     }
return array; 
}

console.log("***********Activity 3***********");
 console.log(activity3(group));
 module.exports = activity3
  