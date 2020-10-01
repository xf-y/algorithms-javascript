const findKthLargest = require('../../code/sort/leetcode215');

let testIn = [[[3,2,1,5,6,4], 2], [[3,2,3,1,2,4,5,5,6], 4], [[3,1,5,2,4], 2], [[-1,2,0], 2]];
let testOut = [5, 4, 4, 0];

test('findKthLargest', () => {
    testIn.forEach((val, idx) => {
        expect(findKthLargest(val[0], val[1])).toBe(testOut[idx]);
    });
});