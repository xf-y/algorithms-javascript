/**
 * @param {number[]} A
 * @return {number[]}
 */

 
// var sortArrayByParityII = function(A) {
//     let B = [...A];
//     const aLen = A.length;
//     let even = [];
//     let odd = [];
//     for(let i=0; i<aLen; i++) {
//         A[i] % 2 ? odd.push(i) : even.push(i);
//     }
//     for(let j=0; j<aLen; j+=2) {
//         B[j] = A[even[j/2]];
//     }
//     for(let k=1; k<=aLen; k+=2) {
//         B[k] = A[odd[(k-1)/2]];
//     }
//     return B;
// };


var sortArrayByParityII = function(A) {
    const aLen = A.length;
    let tmp;
    let oddIdx = 1;
    for(let i=0; i<aLen; i+=2) {
        if(A[i] & 1) {
            while(A[oddIdx] & 1 && oddIdx < aLen) {
                oddIdx+=2;
            }
            tmp = A[i];
            A[i] = A[oddIdx];
            A[oddIdx] = tmp;
            oddIdx+=2;
        }
    }
    return A;
};

module.exports = sortArrayByParityII;