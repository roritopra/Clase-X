/**
 * Ejercicio 9
 * calcular el factorial de un número
 */

 function activity9() {
    var number = 20
    var i
    var total = 1; 
    for (i=1; i<=number; i++) {
        total = total * i; 
    }

    return total; 
}

module.exports = activity9;