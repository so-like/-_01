// var getName;
console.log(fun); //function getName() {console.log('oaoafly')}
// getName(); //oaoafly
function fun() {
  console.log("oaoafly");
//   企业级理解函数也是一个对象 console.log(fun)是将fun对象打印所以才会打印[Function: fun]
}




// getName(); //oaoafly
// var getName = function () {         getName先是变量提升 然后赋值修改getName指向堆内存的oaoafly变为wacat
//   console.log("wscat");
// };
// getName(); //wscat
// function getName() {               存在变量提升在内存中存的是getName指向堆内存输出oaoafly
//   console.log("oaoafly");
// }
// getName(); //wscat


p = 'dwdwdwd'
console.log(p);