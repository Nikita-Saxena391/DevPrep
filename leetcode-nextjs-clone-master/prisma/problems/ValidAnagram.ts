const ValidAnagram = {
  title: "Valid Anagram",

  description: `Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An anagram is a word formed by rearranging the letters of another word using all the original letters exactly once.`,

  difficulty: "EASY",

  tags: ["String", "Hash Map", "Sorting"],

  constraints: `1 <= s.length, t.length <= 5 * 10^4
s and t consist of lowercase English letters.`,

  hints: `Count the frequency of every character in both strings and compare the frequencies.`,

  editorial: `If the lengths are different, they cannot be anagrams.

Create a frequency map for one string.

Decrease the count while traversing the second string.

If every frequency becomes zero, the strings are anagrams.

Time Complexity: O(n)

Space Complexity: O(1) because the alphabet size is fixed.`,

  examples: {
    JAVASCRIPT: {
      input: `s = "anagram"
t = "nagaram"`,
      output: `true`,
      explanation: `"nagaram" contains exactly the same characters as "anagram".`
    },

    PYTHON: {
      input: `s = "rat"
t = "car"`,
      output: `false`,
      explanation: `The character frequencies are different.`
    },

    JAVA: {
      input: `s = "listen"
t = "silent"`,
      output: `true`,
      explanation: `Both strings contain identical characters.`
    }
  },

  testCases: [
    {
      input: "anagram\nnagaram",
      output: "true"
    },
    {
      input: "rat\ncar",
      output: "false"
    },
    {
      input: "listen\nsilent",
      output: "true"
    },
    {
      input: "hello\nworld",
      output: "false"
    },
    {
      input: "a\na",
      output: "true"
    }
  ],

  codeSnippets: {
    JAVASCRIPT: `function isAnagram(s, t) {

    // Write your code here

}`,

    PYTHON: `class Solution:

    def isAnagram(self, s, t):

        # Write your code here

        pass`,

    JAVA: `import java.util.*;

public class Main {

    public static boolean isAnagram(String s, String t) {

        // Write your code here

        return false;

    }

}`
  },

  referenceSolutions: {
    JAVASCRIPT: `function isAnagram(s, t){

if(s.length !== t.length) return false;

const map = {};

for(const ch of s){

map[ch] = (map[ch] || 0) + 1;

}

for(const ch of t){

if(!map[ch]) return false;

map[ch]--;

}

return true;

}`,

    PYTHON: `class Solution:

    def isAnagram(self, s, t):

        if len(s) != len(t):

            return False

        freq = {}

        for ch in s:

            freq[ch] = freq.get(ch, 0) + 1

        for ch in t:

            if ch not in freq or freq[ch] == 0:

                return False

            freq[ch] -= 1

        return True`,

    JAVA: `import java.util.*;

public class Main {

    public static boolean isAnagram(String s, String t){

        if(s.length()!=t.length()) return false;

        HashMap<Character,Integer> map=new HashMap<>();

        for(char c:s.toCharArray())

            map.put(c,map.getOrDefault(c,0)+1);

        for(char c:t.toCharArray()){

            if(!map.containsKey(c) || map.get(c)==0)

                return false;

            map.put(c,map.get(c)-1);

        }

        return true;

    }

}`
  }
};

export default ValidAnagram;