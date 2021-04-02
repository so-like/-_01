function Father(){
    this.name = '父类'
    this.arr = [111]
}
Father.prototype.work = function(){
    console.log('我在工作');
}
function Sun(){
    this.name = '儿子'
}
Sun.prototype =new Father()
let p1 = new Sun()
let p2 = new Sun()

console.log(p1.name);
console.log(p2.name);