/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

var canPlaceFlowers = function(flowerbed, n) {

    const before = flowerbed.filter(b => b&1).length;
    const flowerbedLen = flowerbed.length;

    if(flowerbedLen == 1) {
        return flowerbed[0] == 1 ?  n == 0 : n <= 1;
    }else if(flowerbedLen == 2) {
        return flowerbed[0] == flowerbed[1] ? n<=1 : n<=0
    }else {
        for(let i=0; i<flowerbedLen; i++) {
            if((i == 0 && flowerbed[i] == 0 && flowerbed[i+1] == 0)) {
                flowerbed[i] = 1;
            }else if(i == flowerbedLen-1 && flowerbed[i] == 0 && flowerbed[i-1] == 0) {
                flowerbed[i] = 1;
            }else if(flowerbed[i] == 0 && flowerbed[i-1] == 0 && flowerbed[i+1] == 0) {
                flowerbed[i] = 1;
            }
        }
    }
    return (flowerbed.filter(b => b&1).length-before) >= n;
}

module.exports = canPlaceFlowers;