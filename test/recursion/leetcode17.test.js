const recursion = require('../../code/recursion/leetcode17');

let testIn = "23";
let trueOut = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
let calOut = recursion(testIn);

test('Test: 1. letterCombinations function. ' + 'Expect: ' + trueOut + '; Get: ' + calOut, () => {
    expect(calOut).toEqual(trueOut)
});