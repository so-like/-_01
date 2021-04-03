// parseInt表示将一个字符串解析为指定的基数数
// console.log(parseInt('11',2));

// toString()方法可以将一个数转换为其对应的值
// var a = 8
// console.log(a.toString(2));




// 求二进制
// 首先传入两个参数
function fun(a,b){
    // 首先将传入的数转换为数组
    var arr = String(a)
    var sum = 0,
    p = arr.length
    for(let i=0;i<arr.length;i++){
        // Number将其转换为数值
        sum += Number(arr[p-1])*Math.pow(b,i)
        p--
    }
    return sum
}
console.log(fun(1000,2));   //8将1000转换为2进制数为8
