/**
 * Ejercicio 4
 * dadas dos listas de palabras, retorne una unica lista en la cual se encuentren las palabras
 * que existan en las dos listas iniciales, además ordene esta última lista de manera que las
 * palabras repetidas más veces en ambos arreglos se encuentren al inicio de la lista.
 *
 * ejem:
 * ["rat", "dog", "cat", "parrot", "cat"] y ["cat", "lizard", "rat", "cat"] devolverán ["cat", "rat"]
 */

 function activity4(lett1:string[], lett2:string[]) {
  
    const list = lett1.filter(element => lett2.includes(element));
    return list;
  }
  
  console.log("***********Activity 4***********");
  module.exports = activity4;
  