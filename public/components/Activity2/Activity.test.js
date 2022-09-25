"use strict";
const excersise2 = require('./Funcion2');
test("Separate Numbers", () => {
    let numbsDeck = [];
    numbsDeck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let result;
    result = [[2, 10], [1, 5]];
    expect(excersise2(numbsDeck)).not.toEqual(result);
});
