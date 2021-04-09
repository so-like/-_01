// 自定义一个parseInt函数
function fun(a,b){
    // 首先将a转换为数组
    let arr = String(a)
    let num = 0,
    p= arr.length
    for(let i=0;i<arr.length;i++){
        num += Number(arr[p-1])*Math.pow(b,i)
        p--
    }
    return num
}
console.log(fun('1000',2));


var a= 1000
var p = a.toString('2')
console.log(p);

