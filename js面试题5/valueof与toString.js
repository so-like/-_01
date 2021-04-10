// 让a==1 && a==2 && a==3返回为true

// var i =1
// Function.prototype.valueOf = function(){
//     return i++
// }
// let a = new Function(1);
// if(a===1 && a===2 && a===3){
//     console.log('true');
// }

// var aﾠ = 1;
// var a = 2;
// var ﾠa = 3;
// console.log(aﾠ==1 && a== 2 &&ﾠa==3)


// 让a===1 && a===2 && a===3返回为true
// var value = 0  //这里的value为全局对象window的属性
// Object.defineProperty (window,'a',{
//     get:function(){
//         return this.value += 1
//     }
// })
// console.log(a===1 && a===2 && a===3);


// 如何判断a==1 && a==2 && a==3返回为true
// 重写valueOf方法 默认==会将等号两边的进行饮食转换 调用valueOf方法
// 而=== 严格等于 先调用valueOf方法转换如果还有对象类型就用toString方法
var i = 1
Function.prototype.valueOf = function(){
    return i++
}
var a = new Function(1)
if(a==1 && a==2 && a==3){
    console.log(1);
}



// 判断a===1 && a===2 && a===3返回为true
var value = 0
Object.defineProperty(window,'a',{
    get:function(){
        return value += 1
    }
})
console.log(a===1 && a===2 && a===3);