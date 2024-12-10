function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i; // result = result * i
    }
    return result;
  }
  
  // Example usage:
  console.log(factorial(5));  // 120
  console.log(factorial(3));  // 6
  console.log(factorial(0));  // 1 (by definition, 0! is 1)
  