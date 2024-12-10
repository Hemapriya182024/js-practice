console.log("-------------------------function to find array without duplicate using inbuilt function-----------")

function findArrayWithoutDuplicate(arr)
{
  return [...new Set(arr)] 
}


const arr=["hema","nagu","hema"]
console.log(findArrayWithoutDuplicate(arr))


console.log("-------------------------function to find array without duplicate without using inbuilt function-----------")
function removeDuplicatesWithoutBuiltIn(arr) {
    const uniqueArray = []; // To store unique values manually

    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;

        // Check if arr[i] is already in uniqueArray
        for (let j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) {
                isDuplicate = true; // Mark it as duplicate
                break; // Exit inner loop
            }
        }

        // If no duplicate is found, add the value to uniqueArray
        if (!isDuplicate) {
            uniqueArray[uniqueArray.length] = arr[i]; // Manually "push" the element
        }
    }

    return uniqueArray;
}

// Example usage
const arr1 = ["hema", "nagu", "hema"];
console.log(removeDuplicatesWithoutBuiltIn(arr1)); // Output: ["hema", "nagu"]
