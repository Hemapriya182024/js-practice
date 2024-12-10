// Example 1: Altered to handle string-to-number conversion explicitly
console.log('A' - 1); // NaN
console.log("hema" +  100); // "hema100"
console.log("hema"+"200") //hema200
console.log("hema"-"200") //NaN
console.log('2' + 2 + '2'); // '222'
console.log('2' - 2 + '2'); // "02"
console.log('2' - 2); // 0
console.log('2' + 2 - '2'); // 20
console.log('20' -'2'); // 18


const a={}
const b={name:"hema"}
const c={name:"priya"}
a[b]={
    name:"kalai"
}
a[c]={
    name:"karthi"
}
console.log(a[b])


//1-True 0-False
const y=0;
const z=false;
console.log(y==z);//True
console.log(y===z); //flase
console.log("hema"/2) 
console.log(NaN==NaN) //flase
console.log(NaN===NaN) //flase