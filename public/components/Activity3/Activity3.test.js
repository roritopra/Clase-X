"use strict";
const excersise3 = require("./Activity3");
test("Multiwords", () => {
    let array1 = ["a", "b", "c"];
    let array2 = ["d", "e", "f"];
    let array3 = ["g", "h", "i"];
    let group = array1.concat(array2, array3);
    expect(excersise3(group)).toEqual(group);
});
