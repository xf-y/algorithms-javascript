/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits.length) {
        return [];
    }else {
        charsArr = [];
        for(let nb of digits.split('')) {
            charsArr.push(
                nb == 2 ? ['a', 'b', 'c'] : nb == 3 ? ['d', 'e', 'f'] : nb == 4 ? ['g', 'h', 'i'] : nb == 5 ? ['j', 'k', 'l'] : nb == 6 ? ['m', 'n', 'o'] : nb == 7 ? ['p', 'q', 'r', 's'] : nb == 8 ? ['t', 'u', 'v'] : nb == 9 ? ['w', 'x', 'y', 'z'] : []
            )
        }
        result = [];
        recursion();
        return result;
    }
}

let recursion = function(pre='', i=0) {
    for(let ch of charsArr[i]) {
        if(charsArr[i+1]) {
            recursion(pre+ch, i+1);
        }else {
            result.push(pre+ch);
        }
    }
}

module.exports = letterCombinations;