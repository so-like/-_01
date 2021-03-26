// console.log(typeof Array);
// console.log(typeof null);
// console.log(Array instanceof Object);
// console.log(null instanceof Object);
// console.log(undefined instanceof Object);
// console.log(Object instanceof Set);
// console.log(Map instanceof Object);
// console.log(Function instanceof Object);

// console.log(typeof undefined);
// var x;
// if(typeof x === 'undefined') {
//     // 执行这些语句
//     console.log(1);           1
// }

// var x;
// if(typeof x == 'undefined') {
//     // 执行这些语句log
// console.log(1);
// }else{
//     console.log(2);                 1
// }



// 分割数组   参数可为一个reg正则表达式
// var str = 'abcdef'
// console.log(str.split("",2));    //[ 'a', 'b' ]



// 翻转数组
// var p = 'abcdef'
// console.log(p.split("").reverse().join(""));

// 返回下标为2的元素
// var y = 'frghy'
// console.log(y.charAt(2));                 g


// 让数组中的每个元素都执行map中的回调函数
// var number = [1,2,3]
// var p = number.map(function(num1){
//     return num1*num1
// })
// console.log(p);


// 数组遍历
// var arr = [1,2,3,4]
// var p = arr.forEach(function(item,index,arr){
//     console.log(item,index);
// })

// push pop shift unshift
// var arr = [1,2,3,4,5]
// console.log(arr.push(6));
// console.log(arr.pop());
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);
// console.log(arr.unshift(8));
// console.log(arr);
// console.log(arr.push(6));
// console.log(arr.splice(2,0,'p'));
// console.log(arr);


// map方法
// var arr = [1,2,3,4,5]
// var p = arr.map((item)=>{
//     return item*2
// })
// console.log(p);


// reverse()反转数组
// var p = [1,2,3,4,5]
// console.log(p.reverse());


const person2 = {
    name: 'Deepti',
    greeting: function() {
      console.log('Hi! I\'m ' + this.name + '.');
    }
  }
//   访问对象成员属性的两种办法
console.log(person2.name);   //通过点方式
console.log(person2['name']);      //通过中框号来访问数组的方式

// 也可以通过中框号的方式来设置成员值
// person2['sleep'] = '我要睡觉了'
// person2.name = 'petter'
// console.log(person2.sleep);
// console.log(person2.name);

