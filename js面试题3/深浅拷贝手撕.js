// 浅拷贝
let a = [1,2,3,{p:555}]
function fun(obj){
    // 首先判断传入参数是否存在
    if(!obj || typeof obj !=='object')return
        // 查看传入的是数组还是对象
        let o = Array.isArray(obj)?[]:{}
        for(let i in obj){
            if(obj.hasOwnProperty(i)){
                o[i] = obj[i]
        }
    }
    return o
}
console.log(fun(a));
a[3].p = 888
console.log(fun(a));


// 深拷贝
function deep(obj){
    if(!obj || typeof obj !== 'object')return
    let newObj = Array.isArray(obj)?[]:{}
    for(let i in obj){
        if(obj.hasOwnProperty(i)){
            newObj[i] = typeof obj[i] == 'object'?deep(obj[i]):obj[i]
        }
    }
    return newObj
}
console.log(deep(a));