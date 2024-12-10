console.log("------------------find largest word with inbuilt function---------------------------")
function findLargestWord(sentence)

{
  const words=sentence.split(" ")
  let findLargestWord=""
  for( let word of words)
  {
    if(word.length > findLargestWord.length)
    {
      findLargestWord=word
    }
    
  }
  return findLargestWord

}
const sentence="Learning javascript is good"

console.log(findLargestWord(sentence))




console.log("------------------find largest word with without inbuilt function---------------------------")




function findLongestWordWithoutBuiltIn(sentence) {
  let longestWord = ""; // Store longest word
  let currentWord = ""; // To build the current word manually
  

  for (let i = 0; i <= sentence.length; i++) {
    
    
      // Check if the character is a space or end of the sentence
      if (sentence[i] === " " || i === sentence.length) {
          // If current word is longer than longestWord, update it
          if (currentWord.length > longestWord.length) {
           
              longestWord = currentWord;
          }
          currentWord = ""; // Reset current word
      } else {
          // Build the word character by character
          currentWord += sentence[i];
      }
  }

  return longestWord;
}

// Example usage
const sentence1= "Learning JavaScript is interesting";
console.log("Longest word:", findLongestWordWithoutBuiltIn(sentence1)); // Output: JavaScript
