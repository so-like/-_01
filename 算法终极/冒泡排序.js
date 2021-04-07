// 冒泡排序 总结首先判断其传入的数组是不是空数组 或者非数组
// 然后定义一个变量来保存数组的最后一位下标
// while循环 判断下标大于0则进入循环
// 定义一个flag为true如果进入for循环没有交换则说明不用交换本来就是有序数组
// 设置最后一次交换的位置 lastIndex = j

// function Sort(arr){
//     // 如果传入的数组长度小于0 或者不是数组则直接返回
//     if(arr.length <= 1 || !Array.isArray(arr))return
//     // 标记元素的最后一位下标
//     let lastIndex =arr.length - 1
//     // 如果arr存在则走循环
//     while(lastIndex>0){
//         let flag =true,k=lastIndex
//         for(let j=0;j<k;j++){
//             // 如果前一个数大于后一个数则交换
//             if(arr[j]>arr[j+1]){
//                 flag = false
//                 lastIndex = j
//                 var temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//         if(flag)break
//     }
//     return arr
// }
// var pp = [1,2,5,8,9,6,4,10,11]
// console.log(Sort(pp));



// 冒泡排序练习
function sort(arr){
    if(arr.length <=1 || !Array.isArray(arr))return
    let lastIndex= arr.length-1
    while(lastIndex>0){
        var flag = true,k=lastIndex
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
var pp = [1,2,5,8,9,6,4,10,11]
console.log(sort(pp));