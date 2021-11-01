let arr = [1,2,3];
function sumSimpleArray(array)
{
    return array.filter(sum =>{
        return sum+=sum
    })
}
console.log(sumSimpleArray(arr))