// 浅拷贝
function shallcopy(obj){
    // 如果对象不存在或者对象补位object类型则返回
    if(!obj || typeof obj !== 'object')return
    // 如果是数组就建数组否则就建对象
    let newobj = Array.isArray(obj)?[]:{}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newobj[key] = obj[key]
        }
    }
    return newobj
}
let a = [1,2,3]
console.log(shallcopy(a));


// 深拷贝
function deepCopy(obj){
    // 首先判断传入的是否是对象
    if(!obj || typeof obj !== 'object')return
    // 判断是数组还是对象 是数组就创建数组 是对象就创建对象
    let newObj = Array.isArray(obj)?[]:{}
    // 循环遍历老对象
    for(let i in obj){
        if(obj.hasOwnProperty(i)){
            // 如果它的下标是一个对象那么就继续遍历 直到它是一个值为止
            newObj[i] = typeof obj[i] == "object"?deepCopy(obj[i]):obj[i]
        }
    }
    return newObj
}
console.log();