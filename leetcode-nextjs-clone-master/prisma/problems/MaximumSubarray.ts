const MaximumSubarray = {
  title: "Maximum Subarray",

  description: `Given an integer array nums, find the contiguous subarray with the largest sum, and return its sum.`,

  difficulty: "MEDIUM",

  tags: ["Array", "Dynamic Programming", "Kadane's Algorithm"],

  constraints: `1 <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4`,

  hints: `Instead of checking every subarray, keep track of the best subarray ending at the current index.`,

  editorial: `Kadane's Algorithm works by maintaining:

currentSum → maximum subarray ending at current index

maxSum → maximum subarray found so far

For every element:

currentSum = max(current element, currentSum + current element)

Update maxSum.

Time Complexity: O(n)

Space Complexity: O(1)`,

  examples: {
    JAVASCRIPT: {
      input: `nums = [-2,1,-3,4,-1,2,1,-5,4]`,
      output: `6`,
      explanation: `The subarray [4,-1,2,1] has the largest sum = 6.`
    },

    PYTHON: {
      input: `nums = [1]`,
      output: `1`,
      explanation: `Only one element exists.`
    },

    JAVA: {
      input: `nums = [5,4,-1,7,8]`,
      output: `23`,
      explanation: `The whole array gives the maximum sum.`
    }
  },

  testCases: [
    {
      input: "9\n-2 1 -3 4 -1 2 1 -5 4",
      output: "6"
    },
    {
      input: "1\n1",
      output: "1"
    },
    {
      input: "5\n5 4 -1 7 8",
      output: "23"
    },
    {
      input: "5\n-2 -3 -1 -5 -4",
      output: "-1"
    },
    {
      input: "6\n1 2 3 4 5 6",
      output: "21"
    }
  ],

  codeSnippets: {
    JAVASCRIPT: `function maxSubArray(nums) {

    // Write your code here

}

// Input:
// n
// nums[]`,

    PYTHON: `class Solution:

    def maxSubArray(self, nums):

        # Write your code here

        pass`,

    JAVA: `import java.util.*;

public class Main {

    public static int maxSubArray(int[] nums) {

        // Write your code here

        return 0;

    }

}`
  },

  referenceSolutions: {
    JAVASCRIPT: `function maxSubArray(nums){

let currentSum = nums[0];

let maxSum = nums[0];

for(let i=1;i<nums.length;i++){

currentSum = Math.max(nums[i], currentSum + nums[i]);

maxSum = Math.max(maxSum, currentSum);

}

return maxSum;

}`,

    PYTHON: `class Solution:

    def maxSubArray(self, nums):

        currentSum = nums[0]

        maxSum = nums[0]

        for i in range(1, len(nums)):

            currentSum = max(nums[i], currentSum + nums[i])

            maxSum = max(maxSum, currentSum)

        return maxSum`,

    JAVA: `import java.util.*;

public class Main {

    public static int maxSubArray(int[] nums){

        int currentSum = nums[0];

        int maxSum = nums[0];

        for(int i=1;i<nums.length;i++){

            currentSum = Math.max(nums[i], currentSum + nums[i]);

            maxSum = Math.max(maxSum, currentSum);

        }

        return maxSum;

    }

}`
  }
};

export default MaximumSubarray;