// function fun(str){
//     return str.split('.').pop().toLowerCase()
// }
var a = 'ppp.js'
// console.log(fun(a));

function fun(str){
    let pp = str.substring(str.lastIndexOf('.')+1)
    return pp
}
console.log(fun(a));