/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let numsLen, res, left, right, root;
    while(nums.length) {
        numsLen = nums.length;
        root = parseInt(numsLen/2-1);
        for(let i=root, tmp; i>=0; i--) {
            left = 2*i+1;
            right = 2*i+2;
            if(right<=numsLen-1) {
                if(nums[left] <= nums[right] && nums[left] < nums[i]) {
                    tmp = nums[i];
                    nums[i] = nums[left];
                    nums[left] = tmp;
                }
                if(nums[right] <= nums[left] && nums[right] < nums[i]) {
                    tmp = nums[i];
                    nums[i] = nums[right];
                    nums[right] = tmp;
                }
            }else {
                if(nums[left] < nums[i]) {
                    tmp = nums[i];
                    nums[i] = nums[left];
                    nums[left] = tmp;
                }
            }
        }
        if(nums[0] < 0) {
            nums.splice(0,1);
            continue;
        }
        if(!res && nums[0] > 1) {
            return 1;
        }
        if(res && nums[0] - res > 1) {
            return res + 1;
        }else {
            res = nums.splice(0,1)[0];
        }
    }
    return res ? res + 1 : 1;
};


/*
var firstMissingPositive = function(nums) {
    nums = nums.filter(n => n > 0);
    if(nums.length) {
        nums.sort((n1, n2) => n1 - n2);
        if(nums[0] !== 1) {
            return 1;       
        }
        for(let i=0; i<nums.length; i++) {
            if(nums[i+1] - nums[i] > 1) {
                return nums[i]+1;
            }
        }
        return nums.pop()+1;
    }
    return 1;
}
*/

/*
var firstMissingPositive = function(nums) {
    for(let i=1; ;i++) {
        while(!nums.includes(i)) {
            return i;
        }
    }
}
*/

module.exports = firstMissingPositive;