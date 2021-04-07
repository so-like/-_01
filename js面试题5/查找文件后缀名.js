// function fun(fileName){
//     // 第一种方法
//     // return fileName.split('.').pop().toLowerCase()

//     // 第二种方法
//     let str =fileName.substring(fileName.lastIndexOf('.')+1)
//     return str
// }
// console.log(fun('sddsd.pop'));


// 数组去重
// function fun(arr){
//     let str = []
//     str[0] = arr[0]
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<str.length;j++){
//             if(str[j]==arr[i]){
//                 break
//             }
//             if(j==str.length-1){
//                 str.push(arr[i])
//             }
//         }
//     }
//     return str
// }

// var a = [1,2,3,4,4,4]
// console.log(fun(a));

// 数组去重
function fun(arr){
    let str = []
    for(let i in arr){
        str.push(JSON.stringify(arr[i]))
    }
    return Array.from(new Set(str))
}