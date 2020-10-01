/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let ips = [];
    doRecursively(1, ips, s, []);
    return ips;
};

let doRecursively = function(level, ips, s, res) {
    let ip = '';
    if(level == 5) {
        if(!s.length) {
            ips.push(res.join('.'));
        }
        return;
    }

    for(let i=1; i<=3; i++) {
        if(i<=s.length) {
            ip = s.slice(0, i);
            if(i > 1 && ip.substr(0, 1) == 0) {
                return;
            }
            if(ip > 255) {
                continue;
            }
            res[level-1] = ip;
            doRecursively(level+1, ips, s.slice(i), res);
        }
    }
    res[level-1] = '';
}

module.exports = restoreIpAddresses;