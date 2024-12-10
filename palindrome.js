console.log("-------------------function to check palindrome with inbuilt function----------------------------")
function palindrome(str)
{
    const check=str.split("").reverse().join("")
    if(str===check)
    {
        console.log("its is palindrome")
    }
    else{
        console.log("its not a palindrome")

    }

}

palindrome("madam")

console.log("-------------------function to check palindrome without inbuilt function----------------------------")
function isPalindromeWithoutBuiltIn(str) {
    let reversedStr = ""; // Empty string to build reversed version

    // Step 1: Reverse the string manually
    for (let i = str.length - 1; i >= 0; i--) {
       
        reversedStr += str[i];
    }

    // Step 2: Compare the original string with the reversed string
    return str === reversedStr;
}

// Example usage
console.log(isPalindromeWithoutBuiltIn("madam")); // true
console.log(isPalindromeWithoutBuiltIn("hello")); // false
