"use strict";
/**
 * Ejercicio 2
 * Dado un arreglo de numeros, devuelva un arreglo con dos listas en su interios,
 * la primera contendrá los números pares del arreglo y la segunda los impares
 */
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function activity2(numbs) {
    let odds = [];
    let peers = [];
    for (let i = 0; i < numbs.length; i++) {
        if (numbs[i] % 2 === 0) {
            peers.push(numbs[i]);
        }
        else {
            odds.push(numbs[i]);
        }
    }
    const returnObject = {
        odds,
        peers,
    };
    return returnObject;
}
console.log("***********Activity 2***********");
console.log(activity2(nums));
module.exports = activity2;
