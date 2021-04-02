1、Object.create() 或 Object.create(object, [,propertiesObject])
Object.create() 的第二参数，是可选的。
- Object.create() 的内部原理：
// 其中，o 是新创建对象的原型(对象)
function object(o) {
    function F() {}
    F.prototype = o
    return new F()
}
注意：之前，Object.create()没有出现之前，就是采用的这种方式。
参见《js高级程序设计》P170
Object.create() 做了哪几件事情？
创建空对象{}
指定空对象{}的原型为Object.create()的参数。
new 与 Object.create() 的区别？
以下是我的个人见解，(如有不对，还请指正)：
new 产生的实例，优先获取构造函数上的属性；构造函数上没有对应的属性，才会去原型上查找；如果构造函数中以及原型中都没有对应的属性，就会报错。

Object.create() 产生的对象，只会在原型上进行查找属性，原型上没有对应的属性，就会报错。



<!-- ******************************************************************************* -->
<!-- funciton Func(name) {
    this.name = name
}
let p = new Func('小红') -->
new 的过程，做了啥？做了四件事。

创建一个空对象obj：let obj = new Object()
设置原型链
obj.__proto__ = Func.prototype
就是：将新对象的__proto__ 指向构造函数的prototype
将构造函数Func的this指向obj,并执行构造函数Func
let result = Func.call(obj)
就是：使用call或apply,将构造函数的this绑定到新对象，并执行构造函数
判断构造函数Func的返回值类型
如果是引用类型，就返回这个引用类型的对象。如果是值类型或没有return，则返回空对象obj。
if (typeof(result) === "object"){  
  func=result;  
}  
else{  
   func=obj; // 默认返回
}
注意：js中的构造函数，是不需要有返回值的，所以默认返回的是新创建的空对象obj


<!-- *************************************************************** -->