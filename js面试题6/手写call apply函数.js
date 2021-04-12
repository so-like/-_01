// 自定义call函数
Function.prototype.myCall = function(obj){
    if(typeof obj !== 'function'){
        console.error('error')
    }
    let args = [...arguments].slice(1),
    result = null
    obj = obj || window
    obj.fn  = this
    result = obj.fn(...args)
    delete obj.fn
    return result
}
function num(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
console.log(num.myCall(sub,5,6));


// 自定义apply函数
Function.prototype.myApply = function(obj){
    if(typeof obj !== 'function'){
        console.error('error')
    }
    let result = null
    obj = obj || window
    obj.fn = this
    return function(){
        if(arguments[1]){
            result = obj.fn(...arguments[1])
        }else{
            result = obj.fn()
        }
    }
}

// 自定义bind
Function.prototype.myBind = function(obj){
    if(typeof this !== 'function'){
        console.error('error')
    }
    let args = [...arguments].slice(1)
    fn = this
    return function Fn(){
        return fn.apply(
            this instanceof Fn?this:obj,
            args.concat(...arguments)
        )
    }
}

function foo(name) {
    this.name = name;
}
var obj = {};
var bar = foo.myBind(obj);
bar('Jack');
console.log(obj.name);  // Jack
var alice = new bar('Alice');
console.log(obj.name);  // Jack
console.log(alice.name);    // Alice
