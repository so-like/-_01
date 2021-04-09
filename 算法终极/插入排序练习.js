function insertP(arr){
    if(arr.length<=1 || !Array.isArray(arr))return
    let length = arr.length
    // 从牌场里抽一张张牌
    for(let i=0;i<length;i++){
        // 牌先拿手里
        var temp = arr[i],
        j=i

        while(j-1>=0 && arr[j-1]>temp){
            arr[j] = arr[j-1]
            j--
        }
        arr[j] = temp
    }
    return arr
}
var a = [1,5,8,9,4,3]
console.log(insertP(a));

// 插入排序
function insertP(arr){
    if(arr.length<=1 || !Array.isArray(arr))return 
    let length = arr.length
    for(let i=0;i<length;i++){
        var temp =arr[i],
        j=i
        while(j-1>0 && arr[j-1]>temp){
            arr[j] = arr[j-1]
            j--
        }
        arr[j] = temp
    }
    return arr
}