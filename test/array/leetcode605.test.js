const canPlaceFlowers = require('../../code/array/leetcode605');

const testIn = [[[1,0,0,0,1], 1], [[1], 1], [[0], 1], [[0,0], 2], [[0,0,1,0,1], 1], [[1,0,0,0,0,1], 2]];
const testOut = [true, false, true, false, true, false];

test('canPlaceFlowers: ', () => {
    testIn.forEach((ins, idx) => {
        expect(canPlaceFlowers(ins[0], ins[1])).toBe(testOut[idx]);
    });
});