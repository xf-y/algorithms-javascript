const reverseWords = require('../../code/string/leetcode557');

let testIn = "Let's take LeetCode contest";
let testOut = "s'teL ekat edoCteeL tsetnoc";

test('Test: 1. reverseWords function. ' + 'Expect: ' + testOut + '; Get: ' + reverseWords(testIn), () => {
    expect(reverseWords(testIn)).toBe(testOut)
});