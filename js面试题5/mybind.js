Function.prototype.myBind = function(obj){
    if(typeof obj !== 'object')return
    let args = [...arguments][1]
    // 定义一个闭包
    return function Fn(){
        if(this instanceof Fn){
            this = Fn.this
        }else{
            return Fn.apply(this,...args)
        }
    }
}
