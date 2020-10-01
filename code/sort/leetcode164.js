/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    const numsLen = nums.length;
    if(numsLen >> 1) {
        let max = 0;
        // nums.sort((n1, n2) => n1-n2);
        quickSort(nums, 0, numsLen-1);
        for(let i=numsLen-1, dif=0; i>0; i--) {
            dif = nums[i] - nums[i-1];
            max = dif > max ? dif : max;
        }
        return max;
    }
    return 0;
};

let tmp, pivot, i, j;
let max = 0;

let quickSort = function(nums, low ,high) {
    if(low >= high) {
        return;
    }
    i = low;
    j = high;
    pivot = nums[i];
    while(i < j) {
        while(nums[j] > pivot && j > i) {
            j--;
        }
        while(nums[i] <= pivot && i < j) {
            i++;
        }
        if(i != j && nums[i] != nums[j]) {
            tmp = nums[i];
            nums[i] = nums[j];
            nums[j] = tmp;
        }
    }
    if(low != j && nums[low] != nums[j]) {
        nums[low] = nums[j];
        nums[j] = pivot;
    }
    quickSort(nums, low, j-1);
    quickSort(nums, j+1, high);
    return nums;
};

module.exports = maximumGap;