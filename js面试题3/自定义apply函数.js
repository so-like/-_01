Function.prototype.myApply = function(obj){
    if(typeof obj !== 'function'){
        console.error('error')
    }
    // 定义一个执行对象
    let result = null
    // 如果没有传入this对象则使用全局对象window
    obj = obj || window
    obj.fn = this
    if(arguments[1]){
        // ...代表将参数展开
        result = obj.fn(...arguments[1])
    }else{
        result = obj.fn()
    }
    delete obj.fn
    return result
}

function sum(a,b){
    return a +b
}
function sub(a,b){
    return a -b
}
console.log(sum.myApply(sub,[5,6]));