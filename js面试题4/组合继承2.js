function Father(name){
    this.name = name
    this.arr = [111]
}
Father.prototype.say = function(){
    console.log('1');
}
function Sun(name,like){
    Father.call(this,name)
    this.like = like
}

Sun.prototype = new Father

let p1 = new Sun('sw','篮球')
let p2 = new Sun('dwdw','足球')

// 可以向父类构造函数传参
console.log(p1.name,p2.name);

// 不共享父类构造函数中的应用类型属性
p1.arr.pop()
console.log(p1.arr,p2.arr);

// 父类构造函数的方法得到复用
console.log(p1.say === p2.say);

// 要记得修改父类构造函数的constructor的指向
console.log(p1.constructor);
Sun.prototype.constructor = Sun
console.log(p1.constructor);