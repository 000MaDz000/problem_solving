/**
 * 
 * @param {number[]} nums 
 * @returns {number[]}
 */
function applyOperations(nums) {


    let left = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            continue;
        };
        if (nums[i] === nums[i + 1]) {
            nums[left] = nums[i] * 2;
            nums[i + 1] = 0;
            left++;
        }
        else if (nums[i] !== 0) {
            nums[left] = nums[i];
            left++;
        }
    }

    while (left < nums.length) {
        nums[left] = 0;
        left++;
    }


    return nums;
};

const testCases = [
    {
        input: [2, 2, 2, 2, 0, 4],
        output: [4, 4, 0, 0, 0, 4],
    },
    {
        input: [1, 2, 2, 1, 1, 1],
        output: [1, 4, 2, 0, 0, 0],
    },
    {
        input: [0, 0, 1, 1, 1, 2, 2],
        output: [2, 1, 4, 0, 0, 0, 0],
    },
    {
        input: [4, 4, 8, 8, 16],
        output: [8, 16, 16, 0, 0],
    },
    {
        input: [1, 1, 1, 1, 1, 1],
        output: [2, 2, 2, 0, 0, 0],
    },
    {
        input: [0, 1, 0, 1, 0, 1],
        output: [1, 1, 1, 0, 0, 0],
    },
    {
        input: [1, 2, 3, 4, 5],
        output: [1, 2, 3, 4, 5],
    },
    {
        input: [0, 0, 0, 0],
        output: [0, 0, 0, 0],
    },
    {
        input: [8, 8, 16, 16, 32, 32],
        output: [16, 32, 64, 0, 0, 0],
    },
    {
        input: [1],
        output: [1],
    },
    {
        input: [847, 847, 0, 0, 0, 399, 416, 416, 879, 879, 206, 206, 206, 272],
        output: [1694, 399, 832, 1758, 412, 206, 272, 0, 0, 0, 0, 0, 0, 0]
    }
];


testCases.forEach(({ input, output }, index) => {
    if (index !== testCases.length - 1) return;
    console.log(`Test Case ${index + 1}`);
    console.log("Input: ", input);
    console.log("Currect output:", output);
    console.log(`Test Case ${index + 1}:`, applyOperations(input));
    console.log("----------");
});

