const rotate = (nums, k) => {
    return nums.splice(0, 0, ...nums.splice(-k % nums.length));
};

const result = rotate([1,2], 5);
console.log(result);

const rotate2 = (nums, k) => {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }

    return nums;
};

const result2 = rotate2([1,2], 5);
console.log(result2);