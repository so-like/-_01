// 定义一个自己的构造函数 左边为对象 右边为构造函数
function myInstanceof(left,right){
    // 首先获取对象的原型
    let proto = Object.getPrototypeOf(left)
    // 定义构造函数的原型
    prototype = right.prototype

    // 进入循环判断
    while(true){
        // 如果对象的原型不存在返回false
        if(!proto)return false
        if(proto ===prototype)return true
        proto = Object.getPrototypeOf(proto)
    }
}
// 测试代码

function Father(name){
    this.name = name
}
let p1 = new Father()
// console.log(myInstanceof(p1,Father));
// instanceof 用来判断一个对象的原型是否为后边的构造函数
// console.log(p1 instanceof Father);

console.log(Father.prototype.constructor);

