const BestTime = {
  title: "Best Time to Buy and Sell Stock",

  description: `You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve. If you cannot achieve any profit, return 0.`,

  difficulty: "EASY",

  tags: ["Array", "Greedy"],

  constraints: `1 <= prices.length <= 10^5
0 <= prices[i] <= 10^4`,

  hints: `Keep track of the minimum price seen so far.
For every day, calculate the profit if sold today.`,

  editorial: `Traverse the array once.

Maintain:

minimumPrice → lowest stock price seen so far

maximumProfit → best profit obtained

For every price:

Update minimumPrice.

Calculate currentProfit = price - minimumPrice.

Update maximumProfit.

Time Complexity: O(n)

Space Complexity: O(1)`,

  examples: {
    JAVASCRIPT: {
      input: `prices = [7,1,5,3,6,4]`,
      output: `5`,
      explanation: `Buy on day 2 (price = 1) and sell on day 5 (price = 6). Profit = 5.`
    },

    PYTHON: {
      input: `prices = [7,6,4,3,1]`,
      output: `0`,
      explanation: `No profit can be achieved.`
    },

    JAVA: {
      input: `prices = [2,4,1]`,
      output: `2`,
      explanation: `Buy at price 2 and sell at price 4.`
    }
  },

  testCases: [
    {
      input: "6\n7 1 5 3 6 4",
      output: "5"
    },
    {
      input: "5\n7 6 4 3 1",
      output: "0"
    },
    {
      input: "3\n2 4 1",
      output: "2"
    },
    {
      input: "5\n1 2 3 4 5",
      output: "4"
    },
    {
      input: "6\n5 4 3 2 1 6",
      output: "5"
    }
  ],

  codeSnippets: {
    JAVASCRIPT: `function maxProfit(prices) {

    // Write your code here

}

// Input:
// n
// prices[]`,

    PYTHON: `class Solution:

    def maxProfit(self, prices):

        # Write your code here

        pass`,

    JAVA: `import java.util.*;

public class Main {

    public static int maxProfit(int[] prices) {

        // Write your code here

        return 0;

    }

}`
  },

  referenceSolutions: {
    JAVASCRIPT: `function maxProfit(prices){

let minPrice=Infinity;

let profit=0;

for(const price of prices){

minPrice=Math.min(minPrice,price);

profit=Math.max(profit,price-minPrice);

}

return profit;

}`,

    PYTHON: `class Solution:

    def maxProfit(self, prices):

        minPrice=float('inf')

        profit=0

        for price in prices:

            minPrice=min(minPrice,price)

            profit=max(profit,price-minPrice)

        return profit`,

    JAVA: `import java.util.*;

public class Main {

    public static int maxProfit(int[] prices){

        int minPrice=Integer.MAX_VALUE;

        int profit=0;

        for(int price:prices){

            minPrice=Math.min(minPrice,price);

            profit=Math.max(profit,price-minPrice);

        }

        return profit;

    }

}`
  }
};

export default BestTime;