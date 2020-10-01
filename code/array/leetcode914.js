/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    if(deck.length < 2) {
        return false;
    }

    const reducer = (acc, cur) => {
        acc[cur] = ++ acc[cur] || 1;
        return acc;
    };

    const cnt = Object.values(deck.reduce(reducer, {}));
    const cntLen = cnt.length;
    let thisNum;
    
    for(let i=0; i<cntLen; i++) {
        thisNum = cnt[i];
        for(let j=1; j<cntLen; j++) {
            if(getGcb(thisNum, cnt[j]) == 1) {
                return false;
            }
        }
    }
    return true;
};


let getGcb = function(n1, n2) {
    return n1 % n2 ? arguments.callee(n2, n1 % n2) : n2;
};

module.exports = hasGroupsSizeX;