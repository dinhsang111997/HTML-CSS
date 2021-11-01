Array.prototype.map2 = function (callback){
    let arrayLength = this.length
    for (let i =0 ; i<arrayLength;i++)
    {
        callback(this[i],i)
    }
}
let courses = [
    'javaScript',
    'PHP',
    'Ruby'
]

courses.map2(function (course,index){
    console.log(index,course);
});
// var htmls = courses.map2(function (course){
//     return `<h2>${course}</h2>`;
// });
// console.log(htmls.join(' '))