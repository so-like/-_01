// 通过工厂模式来创建对象
function fun(name,job,age){
    var obj = new Object()
    obj.name = name
    obj.job = job
    obj.age = age
    obj.sayName = function(){
        console.log(1);
    }
    return obj
}
var p1 = fun('小米','老师',15)
console.log(p1.name);
// 工厂模式的优点 解决了创建多个对象时代码复用问题
// 工厂模式的缺点 没有解决对象识别问题
