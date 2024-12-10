function countVowelsWithList(str) {
    const vowels = "aeiouAEIOU"; // Define vowels (both lowercase and uppercase)
    let count = 0;
    let vowelList = []; // Array to store the vowels
  
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
        vowelList.push(char);
      }
    }
  
    return { count, vowelList }; // Return both the count and the list
  }
  
  // Example usage
  const result1 = countVowelsWithList("Hello World");
  console.log(`Vowel Count: ${result1.count}`); // 3
  console.log(`Vowels: ${result1.vowelList}`); // ['e', 'o', 'o']
  
  const result2 = countVowelsWithList("JavaScript");
  console.log(`Vowel Count: ${result2.count}`); // 3
  console.log(`Vowels: ${result2.vowelList}`); // ['a', 'a', 'i']
  