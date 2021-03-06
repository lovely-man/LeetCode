/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//     const len = nums.length;
//     let temp
//     for (let i = 0; i < len; i++) {
//         temp = nums[i]
//         for (let j = i + 1; j < len; j++) {
//             if (temp + nums[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
// };

var twoSum = function (nums, target) {
    let temp;
    for (let i = nums.length; i >= 0; i--) {
        temp = nums[i]
        for (let j = i - 1; j >= 0; j--) {
            if (temp + nums[j] === target) {
                return [j, i]
            }
        }
    }
};

/**
 * @description:
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 */
const nums = [2, 7, 11, 15], target = 9
console.log(twoSum(nums, target))
