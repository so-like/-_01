function Parent() {
    this.name = '父亲'; // 实例基本属性 (该属性，强调私有，不共享)
    this.arr = [1]; // (该属性，强调私有)
}
Parent.prototype.say = function() { // -- 将需要复用、共享的方法定义在父类原型上 
    console.log('hello')
}
function Child(like) {
    this.like = like;
}
Child.prototype = new Parent() // 核心

let boy1 = new Child()
let boy2 = new Child()

// 优点：共享了父类构造函数的say方法
console.log(boy1.say(), boy2.say(), boy1.say === boy2.say); // hello , hello , true

// 缺点1：不能传参数
// 缺点2：
console.log(boy1.name, boy2.name, boy1.name===boy2.name); // 父亲，父亲，true

boy1.arr.push(2); // 修改了boy1的arr属性，boy2的arr属性，也会变化，因为两个实例的原型上(Child.prototype)有了父类构造函数的实例属性arr；所以只要修改了boy1.arr,boy2.arr的属性也会变化。  ----  原型上的arr属性是共享的。
console.log(boy2.arr); // [1,2]

// 注意：修改boy1的name属性，是不会影响到boy2.name。因为name是基本属性，不是引用属性。