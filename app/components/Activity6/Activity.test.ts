const excersise6 = require('./Activity');

test('Organize Arrays', () => {
    
    let words = ["b", "6", "a", "q", "7", "2"];
    expect (excersise6(words)).toEqual(["7", "6", "2", "a", "q", "b"]);
});