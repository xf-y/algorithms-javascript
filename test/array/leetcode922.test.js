const sortArrayByParityII = require('../../code/array/leetcode922');

const testIn = [3,0,4,0,2,1,3,1,3,4];
const testOut = [0,3,4,3,2,1,0,1,4,3];

test('sortArrayByParityII', () => {
    expect(sortArrayByParityII(testIn)).toEqual(testOut);
});