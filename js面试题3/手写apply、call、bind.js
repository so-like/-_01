// 自定义call
Function.prototype.myCall = function(obj){
    if(typeof obj !== 'function'){
        console.error('error');
    }
    // 第一个参数为this指向
    let args = [...arguments].slice(1),
    result = null

    
    // 判断是否传入对象
    // 如果传入为空则使用全局对象 若为严格模式则为undefined
    obj = obj || window
    // 让函数的this指向该对象
    obj.fn = this
    // 调用函数执行
    result = obj.fn(...args)
    // 然后删除对象的该方法 最终返回result
    delete obj.fn
    return result
}

// 测试用例
function sum(a,b){
    return a+b
}
function fun(a,b){
    return a-b
}
console.log(sum.myCall(fun,6,9));


// 自定义apply函数
Function.prototype.myApply = function(obj){
    // 首先判断传入的是不是函数
    if(typeof obj !== 'function'){
        console.error("error")
    }
    let result = null
    // 如果传入的对象为空则使用全局对象window
    obj = obj || window
    // 给函数对象设置方法
    obj.fn = this
    // 如果有传入参数就执行参数 如果没有传入参数就直接执行
    if(arguments[1]){
        result = obj.fn(...arguments[1])
    }else{
        result = obj.fn()
    }
    // 然后删除obj的fn方法
    delete obj.fn
    return result
}
console.log(sum.myApply(fun,[8,6]));
