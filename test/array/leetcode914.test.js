const hasGroupsSizeX = require('../../code/array/leetcode914');

let testIn = [[1,2,3,4,4,3,2,1], [1,1,1,2,2,2,3,3], [1], [1,1], [1,1,2,2,2,2], [1,1,1,1,2,2,2,2,2,2], [1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3]];
let testOut = [true, false, false, true, true, true, false];

test('hasGroupsSizeX: ', () => {
    testIn.forEach((val, idx) => {
        expect(hasGroupsSizeX(val)).toEqual(testOut[idx])
    })
});