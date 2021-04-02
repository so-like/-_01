// 随机抽取一个元素
function ranDom(arr){
    let str = []
    while(arr.length > 0){
        // 在数组内抽取一个随机数
        let randomIndex = Math.floor(Math.random()*arr.length)
        // 添加到新数组
        str.push(arr[randomIndex])
        // 老数组删除
        arr.splice(randomIndex,1)
    }
    return str
}