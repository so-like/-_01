function Parent(name) {
    this.name = name; // 实例基本属性 (该属性，强调私有，不共享)
     this.arr = [1]; // (该属性，强调私有)
    this.say = function() { // 实例引用属性 (该属性，强调复用，需要共享)
        console.log('hello')
    }
}
function Child(name,like) {
    Parent.call(this,name);  // 核心
    this.like = like;
}
let boy1 = new Child('小红','apple');
let boy2 = new Child('小明', 'orange ');

// 优点1：可传参
console.log(boy1.name, boy2.name); // 小红， 小明

// 优点2：不共享父类构造函数的引用属性
boy1.arr.push(2);
console.log(boy1.arr,boy2.arr);// [1,2] [1]

// 缺点1：方法不能复用
console.log(boy1.say === boy2.say) // false (说明，boy1和boy2 
// 的say方法是独立，不是共享的)

// 缺点2：不能继承父类原型上的方法
Parent.prototype.walk = function () {   // 在父类的原型对象上定义一个walk方法。
    console.log('我会走路')
}
boy1.walk;  // undefined (说明实例，不能获得父类原型上的方法)