function LargestNumber(arr)
{

    let largest=arr[0];
    for(let i of arr){
        if(i >largest)
        {
            largest=i
        }
    }
    return largest

}
console.log(LargestNumber([1,2,3,9,8,55]))