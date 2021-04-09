// 冒泡排序
// function fun(arr){
//     if(arr.length<=1 || !Array.isArray(arr))return
//     let lastIndex = arr.length-1
//     while(lastIndex>0){
//         let flag = true,k=lastIndex
//         for(let i=0;i<k;i++){
//             if(arr[i]>arr[i+1]){
//                 flag = false
//                 lastIndex = i
//                 // 交换
//                 var temp = arr[i]
//                 arr[i]= arr[i+1]
//                 arr[i+1] = temp
//             }
//         }
//         if(flag)break
//     }
//     return arr
// }


// console.log(fun(a));


// 冒泡排序
function fun1(arr){
    if(arr.length<=1 || !Array.isArray(arr))return
    let lastIndex = arr.length-1
    while(lastIndex>0){
        let flag = true,k=lastIndex
        for(let i=0;i<k;i++){
            if(arr[i]>arr[i+1]){
                flag = false
                lastIndex = i
                var temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
            }
        }
        if(flag)break
    }
    return arr
}
var a = [1,2,3,1,2,55,4,8,6]
console.log(fun1(a));


// 选择排序
function fun(arr){
    if(arr.length<=1 || !Array.isArray(arr))return
    let length = arr.length
    for(let i=0;i<length-1;i++){
        let minIndex = i
        for(let j=i+1;j<length;j++){
            if(arr[i]>arr[j]){
                minIndex =j
            }
        }
        var temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}
console.log(fun(a));