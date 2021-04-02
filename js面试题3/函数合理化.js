function curry(fn,...args){
    return fn.length<=args.length?fn(...args):curry.bind(null,fn,...args)
}
// 函数合理化就是指讲一个使用多个参数的函数转化为多个使用一个函数的参数