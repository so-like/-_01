function clone(value){
    // 深拷贝
    return JSON.parse(JSON.stringify(value))
}
var a = 123,b={p:111},c={name:'xia',age:[123456]}
c.age=[888]
console.log(c);