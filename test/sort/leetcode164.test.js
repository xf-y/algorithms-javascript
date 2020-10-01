const maximumGap = require('../../code/sort/leetcode164');

let testIn = [[3, 1, 9, 6], [1, 10000], [3, 4, 7, 16, 12, 10]];
let trueOut = [3, 9999, 4];

test('maximumGap', () => {
    testIn.forEach((arr, idx) => {
        expect(maximumGap(arr)).toBe(trueOut[idx]);
    });
});