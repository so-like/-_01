// function fun(arr){
//     var str = []
//     for(let i of arr){
//         str.push(JSON.stringify(i))
//     }
//     return Array.from(new Set(str))
// }
// var a=[1,2,3,3,3,[1,2],[1,2]]
// console.log(fun(a));

// 数组去重
// function fun(arr){
//     // 首先定义一个空数组
//     var str = []
//     for(let i of arr){
//         // 将每一项转换为JSON格式
//         str.push(JSON.stringify(i))
//     }
//     return Array.from(new Set(str))
// }

// var a=[1,2,3,3,3,4,[1,2],[1,2]]
// console.log(fun(a));

// 数组去重两次for循环
function fun2(arr){
    var str = []
    // 将新数组的第一个等于老数组的第一个 让其一一对应
    str[0]=arr[0]
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<str.length;j++){
            // 如果两个值相等name就直接返回
            if(str[j]==arr[i]){
                break
            }
            if(j==str.length-1){
                str.push(arr[i])
            }
        }
    }
    return str
}

var b=[1,2,3,3,44,44,44]
console.log(fun2(b));