// 选择排序 是将第一个作为最小元素然后比较它与第二个元素如果它小于这最小的元素就让它两交换
// function selectSort(arr){
//     if(arr.length<=1 || !Array.isArray(arr))return
//     let length = arr.length
//     for(let i=0;i<length-1;i++){
//         let minIndex = i
//         for(let j=i+1;j<length;j++){
//             if(arr[j]<arr[minIndex]){
//                 minIndex = j
//             }
//         }
//         // 交换最小位置
//         var temp =arr[minIndex]
//         arr[minIndex] = arr[i]
//         arr[i] = temp
//     }
//     return arr
// }



// 选择排序
// function selectSort(arr){
//     if(arr.length<=1 || !Array.isArray(arr))return
//     let length = arr.length
//     for(let i=0;i<length-1;i++){
//         let minIndex = i
//         for(let j=i+1;j<length;j++){
//             if(arr[j]<arr[minIndex]){
//                 minIndex = j
//             }
//         }
//         // 交换minIndex 和i的位置 
//         var temp = arr[i]
//         arr[i] = arr[minIndex]
//         arr[minIndex] = temp
//     }
//     return arr
// }
var a =[1,2,3,5,4,7,1,2]
// console.log(selectSort(a));

// 冒泡排序
function sort(arr){
    if(!Array.isArray(arr) || arr.length<=1)return
    let lastIndex = arr.length-1
    while(lastIndex>0){
        var flag = true,k=lastIndex
        for(let i=0;i<k;i++){
            if(arr[i]>arr[i+1]){
                flag = false
                lastIndex = i
                var temp = arr[i]
                arr[i]= arr[i+1]
                arr[i+1] = temp
            }
        }
        if(flag)break
    }
    return arr
}
console.log(sort(a));