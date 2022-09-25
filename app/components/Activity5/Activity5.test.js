const excersise5 = require('./Activity5');

test('Verificate words', () => {
   
    let words1 = ["arms", "guns", "lol", "damnboy", "niced*ck"];
    let words2 = ["Ohly", "arms", "guns", "hello", "damnboy", "niced*ck"];
    expect (excersise5(words1, words2)).toEqual(['arms', 'guns', 'damnboy', 'niced*ck']);
});