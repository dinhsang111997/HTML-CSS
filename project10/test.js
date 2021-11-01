let arr = [1,2,3,7,112,2,1];
// let tong=arr.filter(number => number%2===1
// ).length
// console.log(tong)
let tong=arr.reduce((quality,value)=>
{
    if(value%2===1){
        quality+=1
    }
    return quality;
},0)
console.log(tong)







