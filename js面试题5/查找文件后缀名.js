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

// 查找文件后缀名
function find(fileName){
    // 第一中办发
    // return fileName.split('.').pop().toLowerCase()
    // 第二种办发

    return fileName.substring(fileName.lastIndexOf('.')+1)
}

// 数组去重
function fun(obj){
    if(typeof obj !== 'object'){
        console.error('error')
    }
    var str =[]
    for(let i of obj){
        str.push(JSON.stringify(i))
    }
    return Array.from(new Set(str))
}

var ll = [1,2,3,3,3,[1,2],[1,2]]
console.log(fun(ll));