// function curry(fn,...args){
//     return fn.length <= args.length?fn(...args):curry.bind(null,fn,...args)
// }


// // 函数合理化
// function curry(fn,...args){
//     return fn.length <= args.length?fn(...args):curry.bind(null,fn,...args)
// }


// 深浅拷贝
// function fun(obj){
//     if(!obj || typeof obj !=='object')return
//     // 判断obj是不是数组还是对象
//     let newObj = Array.isArray(obj)?[]:{}
//     for(let i in obj){
//         // 如果它含有唯一的键
//         if(obj.hasOwnProperty(i)){
//             newObj[i] = obj[i]
//         }
//     }
//     return newObj
// }


// 深拷贝
// function deep(obj){
//     if(!obj || typeof obj !=='object')return
//     let newObj = Array.isArray(obj)?[]:{}
//     for(let i in obj){
//         if(obj.hasOwnProperty(i)){
//             newObj[i] = typeof obj[i]=='object'?deep(obj[i]):obj[i]
//         }
//     }
//     return newObj
// }

// let a = [1,2,3,{p:111,b:888}]
// console.log(deep(a));



// 函数合理化
function fun(fn,...args){
    return fn.length<=arguments.length?fn(...args):fun.apply(null,fn,...args)
}