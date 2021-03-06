function Parent(name) {
    this.name = name; // 实例基本属性 (该属性，强调私有，不共享)
    this.arr = [1]; // (该属性，强调私有)
}
Parent.prototype.say = function() { // --- 将需要复用、共享的方法定义在父类原型上 
    console.log('hello')
}
function Child(name,like) {
    Parent.call(this,name,like) // 核心   第二次
    this.like = like;
}
Child.prototype = new Parent() // 核心   第一次

// <!--这里是修复构造函数指向的代码-->

let boy1 = new Child('小红','apple')
let boy2 = new Child('小明','orange')

// 优点1：可以传参数
console.log(boy1.name,boy1.like); // 小红，apple

// 优点2：可复用父类原型上的方法
console.log(boy1.say === boy2.say) // true

// 优点3：不共享父类的引用属性，如arr属性
boy1.arr.push(2)
console.log(boy1.arr,boy2.arr); // [1,2] [1] 可以看出没有共享arr属性。

// 注意：为啥要修复构造函数的指向？
console.log(boy1.constructor); // Parent 你会发现实例的构造函数居然是Parent。
// 而实际上，我们希望子类实例的构造函数是Child,所以要记得修复构造函数指向。修复如下
Child.prototype.constructor = Child;