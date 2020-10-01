const countBinarySubstrings = require('../../code/string/leetcode696');

let testIn1 = "00110011";
let trueOut1 = 6;
let calOut1 = countBinarySubstrings(testIn1);

let testIn2 = "10101";
let trueOut2 = 4;
let calOut2 = countBinarySubstrings(testIn2);

test('', () => {
    expect(calOut1).toBe(trueOut1);
    expect(calOut2).toBe(trueOut2);
});