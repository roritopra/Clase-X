const excersise1 = require('./Activity1');

test('Return words', () => {
    var letts = ["h", "a", "c"]; 
    var numbs = ["7", "4", "17", "10", "48"];
    
    
    expect (excersise1(letts, numbs)).toEqual(["h", "a", "c","7", "4", "17", "10", "48"]);
});