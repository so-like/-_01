// 手写call
// Function.prototype.myCall = function(obj){
//     if(typeof this !== 'function'){
//         console.error('error')
//     }
//     // 定义参数
//     let args = [...arguments].slice(1)
//     var result = null
//     obj = obj || window
//     obj.fn = this
//     result = obj.fn(...args)
//     delete obj.fn
//     return result
// }



// 自定义apply函数
// Function.prototype.myApply = function(obj){
//     if(typeof this !== 'function'){
//         console.error('error')
//     }
//     var result = null
//     obj = obj || window
//     obj.fn = this
//     if(arguments[1]){
//         result = obj.fn(...arguments[1])
//     }else{
//         result = obj.fn()
//     }
//     delete obj.fn
//     return result
// }   

// 自定义bind函数
Function.prototype.myBind = function(obj){
    if(typeof this !== 'function'){
        console.error('error')
    }
    let args = [...arguments].slice(1)
    fn = this
    return function Fn(){
        return Fn.apply(
            this instanceof Fn?this:Fn,
            args.concat(...arguments)
        )
    }
}


















function fun1(a,b){
    return a+b
}
function fun2(a,b){
    return a-b
}
console.log(fun1.myApply(fun2,[5,6]));
