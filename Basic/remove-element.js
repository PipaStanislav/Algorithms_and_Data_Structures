const removeElement = (nums, val) => {
    let count = 0;

    nums.forEach((num, index) => {
        if (num === val) {
            nums[index] = '_'
        } else {
            count++
        }
    });

    nums.sort();
    return count;
};

const result = removeElement([0,1,2,2,3,0,4,2], 2);

console.log('--------> result', result);