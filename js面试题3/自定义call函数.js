Function.prototype.myCall = function(obj){
    if(typeof obj !=='function'){
        console.error('error')
    }
    let args = [...arguments].slice(1),
    result = null
    obj = obj || window;
    obj.fn = this;
    // 调用函数
    result = obj.fn(...args)
    // 删除该对象的方法
    delete obj.fn
    return result
}


// 测试
// function sum(a,b){
//     return a+b
// }
// function sub(a,b){
//     return a-b
// }
// console.log(sum.myCall(sub,5,5));