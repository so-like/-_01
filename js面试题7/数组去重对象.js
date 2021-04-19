function fun(arr){
    if(!arr || typeof arr !=='object')return
    let str = []
    for(let i of arr){
        str.push(JSON.stringify(i))
    }
    return Array.from(new Set(str))
}
var a = [1,2,2,[1,2],[1,2]]
console.log(fun(a));