// 浅拷贝
function fun(obj){
    if(!obj || typeof obj !== 'object')return
    let newObj = Array.isArray(obj)?[]:{}
    for(let i in obj){
        if(obj.hasOwnProperty(i)){
            newObj[i] = obj[i]
        }
    }
    return newObj
}
var p = [1,2,3,{o:888}]
var k = fun(p)
p[3] = {a:999}
console.log(fun(k));
console.log(fun(p));

// 深拷贝
// function deep(obj){
//     if(!obj || typeof obj !== 'object')return
//     let newObj= Array.isArray(obj)?[]:{}
//     for(let i in obj){
//         if(obj.hasOwnProperty(i)){
//             newObj[i] = typeof obj[i] == 'object'?deep(obj[i]):obj[i]
//         }
//     }
//     return newObj
// }
// var p = [1,2,3,{a:888}]
// console.log(deep(p));
