/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
   // Convert the string to lowercase to make the comparison case-insensitive
  str = str.toLowerCase();

  // Define the set to store unique vowels
  const uniqueVowels = new Set(['a', 'e', 'i', 'o', 'u']);

  // Initialize a variable to count the unique vowels
  let count = 0;

  // Loop through each character in the string
  for (let char of str) {
    // Check if the character is a vowel and is not already encountered
    if (uniqueVowels.has(char)) {
      // Increment the count 
      count++;
      // remove the vowel from the set(but here we not need)
      // uniqueVowels.delete(char);
    }
  }

  // Return the count of unique vowels
  return count;
}

// console.log(countVowels("princeu"));

module.exports = countVowels;