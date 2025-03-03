// my solution
// /**
//  * @param {number[]} nums
//  * @param {number} pivot
//  * @return {number[]}
//  */
// var pivotArray = function (nums, pivot) {
//     let leftArr = [];
//     let rightArr = [];
//     let pivotCount = 0;

//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         if (num === pivot) {
//             pivotCount++;
//         }
//         else if (num < pivot) {
//             leftArr.push(num);
//         }
//         else {
//             rightArr.push(num);
//         }
//     }

//     leftArr = rightArr = leftArr.concat(new Array(pivotCount).fill(pivot)).concat(rightArr)
//     return leftArr;

// }


// not my solution but it's better
/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    const arr = new Array(nums.length);

    let left = 0, right = nums.length - 1;

    for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
        if (nums[i] < pivot) {
            arr[left++] = nums[i];
        }

        if (nums[j] > pivot) {
            arr[right--] = nums[j];
        }
    }

    while (left <= right) {
        arr[left] = pivot;
        left++;
    }

    return arr;
}

console.log(
    pivotArray(
        [9, 12, 5, 10, 14, 3, 10],
        10
    )
); // [9,5,3,10,10,12,14]

console.log(
    pivotArray(
        [-3, 4, 3, 2],
        2
    )
); // [-3,2,4,3]