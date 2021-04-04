// bind 函数实现
// Function.prototype.myBind = function(context) {
//     // 判断调用对象是否为函数
//     if (typeof this !== "function") {
//       throw new TypeError("Error");
//     }
  
//     // 获取参数
//     var args = [...arguments].slice(1),
//       fn = this;
  
//     return function Fn() {
//       // 根据调用方式，传入不同绑定值
//       return fn.apply(
//         this instanceof Fn ? this : context,
//         args.concat(...arguments)
//       );
//     };
//   };


// function sun(a,b){
//     return a+b
// }
// function sub(a,b){
//     return a*b
// }
// var p = sun.myBind(sub,5,5)
// console.log(p());


// bind实现原理
Function.prototype.myBind = function(obj){
    if(typeof obj !== 'function'){
        console.error('error')
    }
    let args = [...arguments].splice(1),
    fn = this
    return function Fn(){
        return fn.apply(
            this instanceof Fn ?this:obj,
            args.concat(...arguments)
        )
    }
}
function sun(a,b){
    return a+b
}
function sub(a,b){
    return a*b
}
var p = sun.myBind(sub,5,5)
console.log(p());