const excersise4 = require ('./Activity4');

test('Veryfy words', ()=>{

    const lett1: string[] = ['Rosalia', 'Beyonce', 'BTS'];
    const lett2: string[] = ['Kanye', 'Rosalia', 'BTS', 'Rosalia'];
    const listLetters: string[] = ['Rosalia', 'BTS'];


    expect(excersise4(lett1, lett2)).toEqual(listLetters);
});
