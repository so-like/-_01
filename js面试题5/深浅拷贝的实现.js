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
var a = [1,3]
console.log(fun(a));

// 深拷贝
function deep(obj){
    if(!obj || typeof obj !=='object')return
    let newObj = Array.isArray(obj)?[]:{}
    for(let i in obj){
        if(obj.hasOwnProperty(i)){
            newObj[i] = typeof obj[i] == 'object'?deep(obj[i]):obj[i]
        }
    }
    return newObj
}