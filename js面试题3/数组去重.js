var a = [1,2,3,3,[1,2],[1,3],[1,3],{a:1,b:2}]
function fun(value){
    // 首先定义一个新数组
    let str= []
    // for in 只能获得键名 for of可以获得键值
    for(let i of value){
        // 将遍历出来的数转换为字符串添加到数组中
        str.push(JSON.stringify(i))
    }
    // 浅拷贝一份 // Set为一种类数组结构 里面的值独一无二
    return Array.from(new Set(str))
}
console.log(fun(a));