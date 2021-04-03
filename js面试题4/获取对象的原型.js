function Father(){
    this.name = '父亲'
    this.arr = [123]
}
Father.prototype.say = function(){
    console.log('你好');
}
function Sun(age){
    this.age = age
}
Sun.prototype = new Father()
let p1 = new Sun(18)
let p2 = new Sun(20)
console.log(p1.name,p1.age);
console.log(Object.getPrototypeOf(Sun));