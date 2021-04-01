var a = { "name":"Bill Gates", "age":62, "city":"Seattle"}
// JSON.parse把数据转换为js对象
var obj = JSON.parse('{ "name":"Bill Gates", "age":62, "city":"Seattle"}');
// JSON.stringify() 把js对象转换为JSON对象
var p = Object.values(obj)
console.log(p);