/**
 * 
 * @param {String} s 
 * @returns {Number}
 */
let countBinarySubstrings = function(s) {
    let cnt = 0;
    let sLen = s.length;
    if(sLen === 0) { return cnt; }

    let cfGroup = [1];
    let idx = 0;

    sArr = s.split('');

    for (let i=1; i<sLen-1; i++) {
        if(sArr[i] != sArr[i-1]) {
            cfGroup[++idx] = 1
        }else {
            cfGroup[idx] += 1;
        }
    }

    for (let j=1; j<=cfGroup.length; j++) {
        cnt += cfGroup[j-1] > cfGroup[j] ? cfGroup[j] : cfGroup[j-1]
    }
    return cnt;
}


module.exports = countBinarySubstrings;