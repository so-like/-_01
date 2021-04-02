// 原型链继承
// function Father(){
//     this.name = '父亲'
//     this.arr = [123]
// }
// Father.prototype.walk = function(){
//     console.log('可以跑步');
// }
// function Sun(age){
//     this.age = age
// }
// Sun.prototype = new Father()
// let p1 = new Sun()
// let p2 = new Sun()

// console.log(p1.name,p2.name);
// p1.arr.push(25)
// console.log(p2.arr);

// console.log(p1.walk === p2.walk);


// 构造函数继承
// function Father(name){
//     this.name = name
//     this.arr = [123]
//     this.say = function(){
//         console.log('我是一个方法');
//     }
// }
// function Sun(name,age){
//     Father.call(this,name)
//     this.age = age
// }

// let p1 = new Sun('小王',15)
// let p2 = new Sun('积极',23)

// console.log(p1.name,p2.name);
// p1.arr.push(5555)
// console.log(p1.arr,p2.arr);

// console.log(p1.say === p2.say);

// Father.prototype.eat = function(){
//     console.log('frfr');
// }
// p1.eat  //显示为undefined 不能继承父类构造函数原型上的方法


// 组合继承
function Father(name){
    this.name = name
    this.arr =[123]
    this.say = function(){
        console.log('hahah1');
    }
}
Father.prototype.walk = function(){
    console.log('父类原型对象上的方法');
}

function Sun(name,age){
    Father.call(this,name)  //核心
    this.age = age
}
Sun.prototype = new Father  //核心

let p1 = new Sun('小明',15)
let p2 = new Sun('哦哦',18)

console.log(p1.name,p2.name);
console.log(p1.say === p2.say);
p1.arr.pop()
console.log(p1.arr,p2.arr);
console.log(p1.walk === p2.walk);


Sun.prototype.constructor = Sun
// 修改Sun的原型对象.constructor指针指向
console.log(p1.constructor);