/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function(nums, k) {
    let res;
    let numsLen;
    while(k > 0) {
        numsLen = nums.length;
        for(let i=parseInt(numsLen/2-1), tmp; i>=0; i--) {
            if(2*i+2<=numsLen-1) {
                if(nums[2*i+1] >= nums[2*i+2] && nums[2*i+1] > nums[i]) {
                    tmp = nums[i];
                    nums[i] = nums[2*i+1];
                    nums[2*i+1] = tmp;
                }
                if(nums[2*i+2] >= nums[2*i+1] && nums[2*i+2] > nums[i]) {
                    tmp = nums[i];
                    nums[i] = nums[2*i+2];
                    nums[2*i+2] = tmp;
                }
            }else {
                if(nums[2*i+1] > nums[i]) {
                    tmp = nums[i];
                    nums[i] = nums[2*i+1];
                    nums[2*i+1] = tmp;
                }
            }
        }
        k--;
        res = nums.shift();
    }
    return res;
};

module.exports = findKthLargest;