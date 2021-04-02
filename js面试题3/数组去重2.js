let a = [1,2,3,4,,[1,2],[1,2],{p:1,o:2}]
function fun(str){
    // 首先定义一个空数组
    let p = []
    for(let i of str){
        p.push(JSON.stringify(i))
    }
    return Array.from(new Set(p))
}
console.log(fun(a));