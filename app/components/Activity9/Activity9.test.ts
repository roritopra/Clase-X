const factorial = require('./Activity9');


    var number = 20
    var i
	var total = 1; 
	for (i=1; i<=number; i++) {
		total = total * i; 
	}

test('Result', () => {
    expect(total).toEqual(2432902008176640000);
    console.log(total)
})