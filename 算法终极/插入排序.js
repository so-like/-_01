// 插入排序
// 打扑克牌
function insertSort(arr){
    let length = arr.length
    if(length<=1 || !Array.isArray(arr))return
    // 在扑克牌堆里摸一张牌
    for(let i=1;i<length;i++){
        // 先拿手里
        var temp = arr[i]
        let j=i
        // 查看手中的牌 从最小的到前一张
        while(j-1>=0 && arr[j-1]>temp){
            arr[j] = arr[j-1]
            j--
        }
        arr[j] = temp
    }
    return arr
}
var a = [1,2,34,5,8,4]
console.log(insertSort(a));