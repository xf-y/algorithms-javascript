const firstMissingPositive = require('../../code/sort/leetcode41');

let testIn = [[1,2,0], [3,4,-1,1], [7,8,9,11,12], [], [-5, -1]];
let testOut = [3, 2, 1, 1, 1];

test('firstMissingPositive', () => {
    testIn.forEach((val, idx) => {
        expect(firstMissingPositive(val)).toBe(testOut[idx]);
    });
});