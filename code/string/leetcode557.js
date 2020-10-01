/**
 * 
 * @param {String} s 
 * @returns {String}
 */
let reverseWords = function(s) {
    // can also use match
    return s.split(/\s/g).map(item => {
        return item.split('').reverse().join('');
    }).join(' ');
    
}

module.exports = reverseWords;