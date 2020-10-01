const restoreIpAddresses = require('../../code/recursion/leetcode93');

let testIn = ['25525511135', '0000', '1111', '010010'];
let testOut = [["255.255.11.135","255.255.111.35"], ["0.0.0.0"], ["1.1.1.1"], ["0.10.0.10","0.100.1.0"]];

test('restoreIpAddresses', () => {
    testIn.forEach((val, idx) => {
        expect(restoreIpAddresses(val)).toEqual(testOut[idx]);
    });
});