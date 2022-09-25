 /*
  * Ejercicio 10
  * cree una funcion que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para
  * obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el
  * resultado de lanzar dos dados y anotar en un objeto el número de apariciones de dicha suma.
  * ejemplo del resultado:
  * const result = { "7": 3, "2": 1 }
  */
 interface result {
    cube1: number;
    cube2: number;
    addition:number;
}

  function activity10(){
    const cubeA = Math.floor(Math.random()*6);
    const cubeB = Math.floor(Math.random()*6);
    let result: result;
    
    return result = {
        cube1: cubeA,
        cube2: cubeB,
        addition: cubeA + cubeB
    };
 }

 console.log("***********Activity 10***********");
 console.log(activity10);