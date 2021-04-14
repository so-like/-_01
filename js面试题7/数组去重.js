function fun(arr){
    var str = []
    for(let i of arr){
        str.push(JSON.stringify(i))
    }
    return Array.from(new Set(str))
}
var a=[1,2,3,3,3,4,[1,2],[1,2]]
console.log(fun(a));
console.log(a.flat());