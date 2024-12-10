console.log("--------------------Program to find the reverse of a string  using built-in methods.---------------")
function reverseString(str)
{
    return str.split("").reverse().join('')

}
const str="suma"
console.log( reverseString(str))

console.log("--------------------Program to find the reverse of a string  without using any built-in methods.---------------")
function reversestr(sentence)

{
    let revstr=""
    for(let i=sentence.length-1;i>=0;i--)
    {
       revstr += sentence[i]
    }
    return revstr

}
const sentence="hello vanakam"
console.log(reversestr(sentence))
