// function cat(a){
//     return 2*a
// }
// function dog(b){
//     return b*b
// }
// cat.call(dog,8)

// bind的妙用
function f(){
    return this
}
function fun(){
    return 2*a
}
var p = f.bind('petter')  //输出string p e t t e r
console.log(p());
var k = p.bind('bob')
console.log(k());