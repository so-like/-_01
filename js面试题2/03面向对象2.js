// function doSomething(){}
// console.log( doSomething.prototype );   //  {}
// // 无论如何声明函数javascript中的函数始终具有默认值原型属性 箭头函数没有默认原型属性是个例外
// var doSomething = function(){};
// console.log( doSomething.prototype );    //{}

// console.log(Array.prototype.__proto__ === Object.prototype);
// console.log(Function.prototype.__proto__ === Object.prototype);
// console.log(Set.prototype.__proto__ === Object.prototype);
// console.log(Map.prototype.__proto__ === Object.prototype);


// function Foo(){}
// var foo = new Foo()
// console.log(foo.__proto__ == Foo.prototype);
// console.log(Foo.prototype.__proto__ == Object.prototype);
// console.log(Foo.__proto__ === Function.prototype);




// 可以通过Object.create(obj) 方法来设置原型链******************************
var a = {a: 1,b:6,p:99};
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (inherited)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null
console.log(c.p);

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty);
// undefined, because d doesn't inherit from Object.prototype