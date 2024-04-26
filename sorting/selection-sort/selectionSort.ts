/** Sort in-place and return sorted array. */

function selectionSort(nums: number[]): number[] {


  for (let i = 0; i < nums.length; i++) {
    let smallest = nums[i]; 1;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < smallest) {
        smallest = nums[j];
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }

  return nums;
}

// [5, 1, 3, 2, 4]
// [1, 5, 3, 2, 4]
// [1, 2, 3, 5, 4]
// [1, 2, 3, 4, 5]


// [1, 2, 3, 5, 4]


export { selectionSort };