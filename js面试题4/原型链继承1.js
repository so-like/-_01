// 创建一个父类
function Father(){
    this.name = '父亲'
    this.arr = [1]
}
// 在父类的原型对象上创建公共方法
Father.prototype.say = function(){
    console.log(this.name);
}
// 定义子类对象
function Sun(){
    this.age = 18
}
// 子类对象原型指向父类对象方法
Sun.prototype = new Father()

// 子类创建两个对象
let p1= new Sun()
let p2= new Sun()
console.log(p1.name);
console.log(p2.name);

// 所有实例共享原型对象中的引用类型 修改p1的name不会影响p2的name
p1.arr.push(22)
console.log(p2.arr);

// 共享父类的方法
console.log(p1.say() === p2.say());
