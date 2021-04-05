// a为一个字符串 b为几进制数
// function two(a, b) {
//   let arr = string(a),
//     num = 0,
//     k = arr.length;
//   for (let i = 0; i < arr.length; i++) {
//     num += Number(arr[k - 1]) * Math.pow(b, i);
//     k--;
//   }
//   return num;
// }


// 二进制数
// function two(a,b){
//     let arr = String(a),
//     num = 0,
//     p = arr.length
//     for(let i=0;i<arr.length;i++){
//         num += Number(arr[p-1])*Math.pow(b,i)
//         p--
//     }
//     return num
// }

// console.log(two('11110',2));

// 获取文件后缀名
// function fun(fileName){
//     // 第一种方法
//     // return fileName.split('.').pop()

//     // 第二种方法 返回最后一次出现点的地方加1
//     return fileName.substring(fileName.lastIndexOf('.')+1)
// }
// console.log(fun('oooo.pp'));

// 深浅拷贝
// function qian(obj){
//     if(!obj || typeof obj !=='object')return
//     let newObj = Array.isArray(obj)?[]:{}
//     for(let i in obj){
//         if(obj.hasOwnProperty(i)){
//             newObj[i] = obj[i]
//         }
//     }
//     return newObj
// }
// var a = [1,2,3]
// console.log(qian(a));

// 深拷贝
// function deep(obj){
//     if(!obj|| typeof obj !=='object')return
//     let newObj = Array.isArray(obj)?[]:{}
//     for(let i in obj){
//         if(obj.hasOwnProperty(i)){
//             newObj[i] = typeof obj[i]=='object'?deep(obj[i]):obj[i]
//         }
//     }
//     return newObj
// } 

// var b= [1,2,3,{p:888}]
// console.log(deep(b));

var a = [1,2,3,[1,2],[1,2],{p:8888}]
// 数组去重
function fun(str){
    // 首先将其转换为json数组
    let arr = []
    for(let i of str){
        arr.push(JSON.stringify(i))
    }
    return Array.from(new Set(arr))
}
console.log(fun(a));