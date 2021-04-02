function fun(name){
    this.name = name
}
var p1 = new fun('小明')
console.log(p1.name);

