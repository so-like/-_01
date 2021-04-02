// Function.prototype.myBind =function(obj){
//     if(typeof obj !== 'function'){
//         console.error('error')
//     }
//     // 首先获取除第一个参数this以外的其他参数
//     let args = [...arguments].slice(1)
//     fn = this
//     return function Fn(){
//         // 根据调用方式传入不同绑定值
//         return fn.apply(
//             // 第一个this指向
//             this instanceof Fn?this:obj,
//             // 参数
//             args.concat(...arguments)
//         )
//     }
// }

Function.prototype.myBind = function(context) {
    // 判断调用对象是否为函数
    if (typeof this !== "function") {
      throw new TypeError("Error");
    }
  
    // 获取参数
    var args = [...arguments].slice(1),
      fn = this;
  
    return function Fn() {
      // 根据调用方式，传入不同绑定值
      return fn.apply(
        this instanceof Fn ? this : context,
        args.concat(...arguments)
      );
    };
  };
