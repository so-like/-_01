function fun(fn,...args){
    return fn.length<=args.length?fn(...args):fun.bind(null,fn,...args)
}