//Used to reduce an array to a single value by applying a function.

//Problem 1: Find the Sum of an Array. 
//0 1+2+3+4+5
const arr = [1, 2, 3, 4, 5]
const total = arr.reduce((prev, current) => {
     console.log(`prev: ${prev}, current: ${current}`);
     return prev + current
}, 0)

console.log(total) //15


//Problem 2: Count the Frequency of Elements
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const frequency = fruits.reduce((prev, curr) => {
     //acc = {} initially.
     //'apple' doesn't exist → Set acc['apple'] = 1.
     //Now, acc = { apple: 1 }.
     //'banana' doesn't exist → Set acc['banana'] = 1.
     // Now, acc = { apple: 1, banana: 1 }.
     ///'apple' exists → Increment acc['apple'] by 1.
     //Now, acc = { apple: 2, banana: 1 }.
     if (prev[curr]) { // Check if current element already exists in acc
          prev[curr] += 1; // If exists, increment by 1
     } else {
          prev[curr] = 1; // If not exists, set to 1
     }
     return prev; // Return the accumulator
}, {});

console.log(frequency);
// Output: { apple: 3, banana: 2, orange: 1 }


// Problem 3: Flatten a Nested Array
//We are going to convert a nested array (array inside an array) into a single, flat array using reduce.
const oruArr = [[1, 2], [3, 4], [6, 7]]
const result = oruArr.reduce((prev, current) => {
     //prev = [] (initial)
     //current = [1, 2]
     //prev.concat(current) → [].concat([1, 2]) → [1, 2].
     return prev.concat(current)
}, [])
console.log(result)


//Problem 4: Calculate the Total Price of Items in a Cart
//Oru shopping cart array iruku, athula oruvaru item's price and quantity iruku. Total price calculate

const cart = [
     { item: 'Apple', price: 30, quantity: 3 }, //30*3 =90
     { item: 'Banana', price: 10, quantity: 5 }, //10*5=50
     { item: 'Orange', price: 20, quantity: 2 } //20*2=40
];

const totalPrice = cart.reduce((prev ,curr)=> {
     return prev + curr.price * curr.quantity

}, 0)

console.log(totalPrice) //180