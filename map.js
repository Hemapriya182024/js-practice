//multiple each element using map 
const arr=[1,2,3,4,5]
const newArr=arr.map((e)=>{
    return e*2
})

console.log(newArr) //[ 2, 4, 6, 8, 10 ]
console.log(arr)   //[ 1, 2, 3, 4, 5 ]

//filter using map
const newArr2=arr.map((e)=>{
    return e>2
})

console.log(newArr2) //[ false, false, true, true, true ]

//multiple each element using ForEach
const newArr1 =arr.forEach((e)=>
    {
        return e*2
    })
console.log(newArr1) //undefined beacuse we used return in foreach
//forEach
arr.forEach((e)=>{ console.log(e*2)})


//slice
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus)


// ascending sort
const suma=[1,2,3,7,8,3,2]
const result=suma.sort((a,b)=>
    {
        return a-b
    } )
console.log("ascending sort:",result)

//descending sort
const suma1=[1,2,3,7,8,3,2]
const result1=suma.sort((a,b)=>
    {
        return b-a
    } )
console.log("descending sort",result1)


//shift ->removes the 1st element in an array and it chnages orginal array
const veg=["tomato","brinjal","onion"]
veg.shift()
console.log(veg)

//unshift -> method adds new elements to the beginning of an array. method overwrites the original array.
veg.unshift("carrot","beans")
console.log(veg)