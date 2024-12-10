function isAnagram(str1, str2) {
    // Convert both strings to lowercase, split, sort, and join
    const sortedStr1 = str1.toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.toLowerCase().split('').sort().join('');
 
    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
  }
  
  // Example usage
  console.log(isAnagram("listen", "silent")); // true
  console.log(isAnagram("hello", "oellh"));   // true
  console.log(isAnagram("test", "rest"));     // false
  console.log(isAnagram("Race", "Care"));     // true
  

