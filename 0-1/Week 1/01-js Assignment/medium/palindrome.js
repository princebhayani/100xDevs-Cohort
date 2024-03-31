/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Convert the string to lowercase for case-insensitivity
  const lowercaseStr = str.toLowerCase();
  
  // Remove non-alphanumeric characters
  const alphanumericStr = lowercaseStr.replace(/[^a-z0-9]/g, '');

  // Check if the string is equal to its reverse
  return alphanumericStr === alphanumericStr.split('').reverse().join('');
}

module.exports = isPalindrome;
/*
Certainly! Let's break down the line:

```javascript
const alphanumericStr = lowercaseStr.replace(/[^a-z0-9]/g, '');
```

This line uses the `replace` method on the `lowercaseStr` string to replace all characters that do not match the specified pattern with an empty string.

- `lowercaseStr`: This is the original string converted to lowercase using `toLowerCase()`. This is done to make the palindrome check case-insensitive.

- `.replace(/[^a-z0-9]/g, '')`: This part of the line uses the `replace` method with a regular expression to match any character that is not a lowercase letter (a-z) or a digit (0-9).

  - `[^a-z0-9]`: The square brackets `[]` denote a character class, and the `^` at the beginning of the character class negates it, meaning it matches any character that is not in the specified set.

  - `/g`: This is a flag that stands for "global" and allows the regular expression to match all occurrences in the string, not just the first one.

  - `''`: This is the replacement string, an empty string. It means that any character that matches the specified pattern will be replaced with nothing (removed).

So, overall, this line removes all characters from `lowercaseStr` that are not lowercase letters or digits, resulting in a string containing only alphanumeric characters. This is useful for checking if the cleaned string is a palindrome without considering non-alphanumeric characters or case differences.
*/