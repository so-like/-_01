// "use strict";
// var x;
// // delete x;
// var o = Object.create(null, {
//   x: {
//     value: 1,
//     configurable: true,
//   },
// });
// delete o.x; // 删除成功
// 只有configurable设置为true的对象属性，才能被删除

// function makeFunc() {
//     var name = 'Mozilla';
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   var myFunc = makeFunc();
//   myFunc();

// const square = function(number) { return number * number }
// var x = square(4)
// console.log(x);

// const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) }

// console.log(factorial(3))



function Foo() {
    getName = function () { console.log (1); };
    return this;
}
Foo.getName = function () { console.log (2);};
Foo.prototype.getName = function () { console.log (3);};
var getName = function () { console.log (4);};
function getName() { console.log (5);}
 
// 请写出以下输出结果：
Foo.getName();  //2
getName();  //4
Foo().getName();  //1   先执行Foo()函数 因为getName没有使用var定义则视为全局变量 
// 在赋值的时候他会找这个变量有没有定义如果没有就开辟空间来存储 找到 log(4)这一行 将它修改为log(1)
// 最后打印1
getName();   //1   同上

new Foo.getName();   //2 
// new相当于实例化一个对象 也就是(Foo.getName)()  先new执行为2

new Foo().getName();   //3   
// 先执行new Foo() 创建一个实例化对象  然后调用它构造方法的getName方法
// 因为没有就沿着——proto——找 找到Foo的原型对象Foo.prototype找到原型对象有这个方法那就就执行 3

new new Foo().getName(); //3  结果同上还是3