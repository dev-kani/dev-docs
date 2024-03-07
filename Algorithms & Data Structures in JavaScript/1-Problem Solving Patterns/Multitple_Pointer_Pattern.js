// Suppose you are given an array of integers, and you need to find all the unique triplets in the array that add up to a given target sum. For instance, given the array [1, 2, 3, 4, 5, 6, 7] and the target sum 10, the function should return the triplets [[1, 2, 7], [1, 3, 6], [2, 4, 4], [3, 3, 4]].

// To solve this problem using the multiple pointer pattern, we can start by sorting the array in ascending order, which will allow us to use the pointers in an efficient manner. We can then use three pointers: one pointer i will loop through the array, and for each element nums[i], we will use two more pointers left and right that will traverse the remaining part of the array.

function findTriplets(nums, targetSum) {
  const result = [];
  nums.sort((a, b) => a - b); // sort the array in ascending order
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      // if the current element is the same as the previous one, skip it to avoid duplicates
      continue;
    }
    let left = i + 1, right = nums.length - 1; // initialize the two pointers
    while (left < right) {
      const total = nums[i] + nums[left] + nums[right];
      if (total === targetSum) {
        // if the sum of the three elements is equal to the target sum, add them to the result
        result.push([nums[i], nums[left], nums[right]]);
        // move both pointers towards the middle, skipping duplicates
        left++;
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
        right--;
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (total < targetSum) {
        // if the sum is less than the target sum, move the left pointer to the right
        left++;
      } else {
        // if the sum is greater than the target sum, move the right pointer to the left
        right--;
      }
    }
  }
  return result;
}

// In this implementation, the outer loop (for i in range(len(nums)-2)) runs for n-2 iterations, where n is the length of the array. The inner loop (while left < right) runs for at most n-2 iterations for each value of i, since the two pointers will eventually meet in the middle. Therefore, the overall time complexity of this algorithm is O(n^2), which is much better than the brute-force approach of checking all possible combinations of three elements, which would have a time complexity of O(n^3).