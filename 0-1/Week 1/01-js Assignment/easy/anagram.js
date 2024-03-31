/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function isAnagram(str1, str2) {
  // Remove spaces and convert to lowercase for case-insensitive comparison
  const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();

  // Check if the lengths are different
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Sort the characters in both strings and compare them
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

// console.log(isAnagram("Prince", "prince"));
module.exports = isAnagram;

/*
Certainly! Let's break down the line of code:

```javascript
const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
```

This line is cleaning up the input string `str1` by performing two operations:

1. **`str1.replace(/\s/g, '')`**: This part uses the `replace` method with a regular expression to replace all occurrences of whitespace characters (`\s`) with an empty string. The regular expression `/\s/g` has two components:
   - `\s`: This matches any whitespace character (spaces, tabs, newlines).
   - `g`: This is a global flag, meaning it replaces all occurrences in the string rather than stopping after the first match.

   So, `str1.replace(/\s/g, '')` removes all spaces (and other whitespace characters) from the original string `str1`.

2. **`.toLowerCase()`**: After removing spaces, the `toLowerCase` method is called on the resulting string. This method converts all characters in the string to lowercase.

Combining these two operations, the line of code ensures that `cleanStr1` is a version of `str1` where:
- All whitespace characters have been removed.
- All characters are in lowercase.

This process is commonly used when comparing strings in a case-insensitive and space-insensitive manner, which is often useful in scenarios like checking if two strings are anagrams.
*/