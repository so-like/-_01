function fun(arr){
    if(!arr || arr.length<1)return
    let str = []
    str[0] = arr[0]
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<str.length;j++){
            if(arr[i] == str[j]){
                break
            }
            if(j == str.length-1){
                str.push(arr[i])
            }
        }
    }
    return str
}
console.log(fun([1,2,3,3,3]));