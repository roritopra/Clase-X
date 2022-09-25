"use strict";
const Activity1 = require('./Activity1');
test('la suma de letters y numbers es igual a h,a,c,7,4,17,10,48', () => {
    var letts = ["h", "a", "c"];
    var numbs = ["7", "4", "17", "10", "48"];
    expect(activity1(letts, numbs)).toEqual(["h", "a", "c", "7", "4", "17", "10", "48"]);
});
