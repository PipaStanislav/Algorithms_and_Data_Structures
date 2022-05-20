const twoSum = (nums, target) => {
    const result = [];

    for (let i = 0; i <= nums.length; i++) {
        for (let j = i + 1; j <= nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i, j);
                break;
            }
        }
    }

    return result;
};

const result = twoSum([3,2,4], 6);
console.log('--------> result', result);