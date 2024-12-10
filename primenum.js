function isPrime(num) {
    // If num is less than 2, it's not prime
    if (num < 2) return false;
  
    // Check divisibility from 2 to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false; // If divisible, it's not prime
      }
    }
    return true; // If not divisible by any number, it's prime
  }
  
  // Example usage:
  console.log(isPrime(7));  // true
  console.log(isPrime(10)); // false
  const suma=Math.sqrt(10)
  console.log(suma %2===0 )