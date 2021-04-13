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

// 自定义bind函数
Function.prototype.myBind = function(obj){
  if(!obj || typeof obj !== 'function'){
    console.error('error')
  }
  let args = [...arguments][1]
  fn = this
  return function Fn(){
    return fn.apply(
      this instanceof Fn?this:obj,
      args.concat(...arguments)
    )
  }
}

// 自定义call函数
Function.prototype.myCall = function(obj){
  if(!obj || typeof obj !=='function'){
    console.error('error')
  }
  let args = [...arguments][1]
  let result = null
  obj = obj || window
  obj.fn = this
  result = obj.fn(...args)
  delete obj.fn
  return result
}




// 自定义apply函数
Function.prototype.myApply = function(obj){
  if(!obj || typeof obj !== 'function'){
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