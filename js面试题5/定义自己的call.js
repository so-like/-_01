// 自定义call
Function.prototype.myCall = function(obj){
    if(typeof obj !=='function'){
        console.error('error')
    }
    // 因为第一个参数是this
    let args = [...arguments].splice(1),
    result = null
    obj = obj || window
    obj.fn = this
    result = obj.fn(...args)
    delete obj.fn
    return result
}

// apply函数
Function.prototype.myApply = function(obj){
    if(typeof obj !== 'function'){
        console.error('error')
    }
    let result = null
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

// 自定义bind
Function.prototype.myBind = function(obj){
    if(typeof obj !== 'function'){
        console.error('error')
    }

    let args = [...arguments].splice(1)
    fn = this
    return function Fn(){
        return Fn.apply(
            this instanceof Fn?this:obj,
            args.concat(...arguments)
        )
    }
}