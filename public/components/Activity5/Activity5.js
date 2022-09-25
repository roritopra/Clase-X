"use strict";
/**
  * Ejercicio 5
  * cree una función que reciba dos arreglos y verifique
  * que el primero contenga todos los elementos del segundo
  */
let words1 = ["arms", "guns", "lol", "damnboy", "niced*ck", "ohlysh*t"];
let words2 = ["lol", "niced*ck", "damnboy", "guns", "ohlysh*t", "arms"];
function activity5(w1, w2) {
    let result = [];
    for (let i = 0; i < w1.length; i++) {
        for (let e = 0; e < w2.length; e++) {
            if (w1[i] === w2[e])
                result.push(w1[i]);
        }
    }
    return result;
}
console.log("***********Activity 5***********");
console.log(activity5(words1, words2));
module.exports = activity5;
