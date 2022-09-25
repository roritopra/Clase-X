"use strict";
const excersise4 = require('./Activity4');
test('Veryfy words', () => {
    const lett1 = ['Rosalia', 'Beyonce', 'BTS'];
    const lett2 = ['Kanye', 'Rosalia', 'BTS', 'Rosalia'];
    const listLetters = ['Rosalia', 'BTS'];
    expect(excersise4(lett1, lett2)).toEqual(listLetters);
});
