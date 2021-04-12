// 手写bind函数
Function.prototype.myBind = function(obj){
    if(typeof this !== 'function'){
        throw new TypeError("Error");
    }
    // 收集参数
    let args = [...arguments].slice(1)
    fn = this
    return function Fn(){
        // 形成一个闭包
        return fn.apply(
            this instanceof Fn?this:obj,
            args.concat(...arguments)
        )
    }
}

function Father(name){
    this.name = name
}
var obj = {}
var p = Father.myBind(obj)
p('名字')
console.log(obj.name);


// 手写bind函数
Function.prototype.myBind = function(obj){
    if(typeof obj !== 'function'){
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

function Father(name){
    this.name = name
}
var p = {}
var k = Father.myBind(p)
k('bob')
console.log(p);