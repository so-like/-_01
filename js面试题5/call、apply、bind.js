
// 自定义call函数
// Function.prototype.myCall = function(obj){
//     if(!obj || typeof obj !=='function'){
//         console.error('error')
//     }
//     let args = [...arguments].splice(1),
//     result = null
//     obj = obj || window
//     obj.fn = this
//     result = obj.fn(...args)
//     delete obj.fn
//     return result
// }




// 自定义call
Function.prototype.myCall = function(obj){
    if(typeof obj !== 'function'){
        console.error('error')
    }
    let args = [...arguments].splice(1),
    result = null
    obj = obj || window
    obj.fn = this
    result = obj.fn(...args)
    delete obj.fn
    return result
}



// 自定义apply
Function.prototype.myApply = function(obj){
    if(typeof obj !== 'function'){
        console.error('error')
    }
    var result = null
    obj = obj || window
    obj.fn = this
    if(arguments[1]){
        result = obj.fn(...arguments[1])
    }else{
        result = obj.fn()
    }
    delete obj.fn
    return result
}

function sun(a,b){
    return a+b
}
function sub(a,b){
    return a*b
}
console.log(sun.myCall(sub,8,8));
console.log(sun.myApply(sub,[9,9]));
