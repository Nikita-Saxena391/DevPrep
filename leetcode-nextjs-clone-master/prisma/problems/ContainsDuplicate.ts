const ContainsDuplicate = {
  title: "Contains Duplicate",

  description: `Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.`,

  difficulty: "EASY",

  tags: ["Array", "Hash Set"],

  constraints: `1 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9`,

  hints: `A HashSet can be used to efficiently track elements that have already been seen.`,

  editorial: `Traverse the array while maintaining a HashSet.

For every element:

1. If the element already exists in the HashSet, return true.
2. Otherwise, insert it into the HashSet.

If the traversal completes without finding duplicates, return false.

Time Complexity: O(n)

Space Complexity: O(n)`,

  examples: {
    JAVASCRIPT: {
      input: `nums = [1,2,3,1]`,
      output: `true`,
      explanation: `The element 1 appears twice.`
    },

    PYTHON: {
      input: `nums = [1,2,3,4]`,
      output: `false`,
      explanation: `Every element is unique.`
    },

    JAVA: {
      input: `nums = [1,1,1,3,3,4,3,2,4,2]`,
      output: `true`,
      explanation: `Several elements appear more than once.`
    }
  },

  testCases: [
    {
      input: "4\n1 2 3 1",
      output: "true"
    },
    {
      input: "4\n1 2 3 4",
      output: "false"
    },
    {
      input: "10\n1 1 1 3 3 4 3 2 4 2",
      output: "true"
    },
    {
      input: "1\n100",
      output: "false"
    },
    {
      input: "5\n-1 -2 -3 -4 -1",
      output: "true"
    }
  ],

  codeSnippets: {
    JAVASCRIPT: `function containsDuplicate(nums) {

    // Write your code here

}

// Input:
// n
// nums[]`,

    PYTHON: `class Solution:

    def containsDuplicate(self, nums):

        # Write your code here

        pass`,

    JAVA: `import java.util.*;

public class Main {

    public static boolean containsDuplicate(int[] nums) {

        // Write your code here

        return false;

    }

}`
  },

  referenceSolutions: {
    JAVASCRIPT: `function containsDuplicate(nums){

const set = new Set();

for(const num of nums){

if(set.has(num))

return true;

set.add(num);

}

return false;

}`,

    PYTHON: `class Solution:

    def containsDuplicate(self, nums):

        seen = set()

        for num in nums:

            if num in seen:

                return True

            seen.add(num)

        return False`,

    JAVA: `import java.util.*;

public class Main {

    public static boolean containsDuplicate(int[] nums){

        HashSet<Integer> set = new HashSet<>();

        for(int num : nums){

            if(set.contains(num))

                return true;

            set.add(num);

        }

        return false;

    }

}`
  }
};

export default ContainsDuplicate;