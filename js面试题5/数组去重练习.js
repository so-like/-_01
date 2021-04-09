function fun(arr){
    if(arr.length<=1 || !Array.isArray(arr))return
    var p=[]
    p[0] = arr[0]
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<p.length;j++){
            if(arr[i] == p[j]){
                break
            }
            if(j == p.length-1){
                p.push(arr[i])
            }
        }
    }
    return p
}
var a = [1,2,5,8,4,6,6,6,6]
console.log(fun(a));

var a= [1,2,3,[1,2,3],[1,2,3]]
function fun2(arr){
    if(!arr || typeof arr !=='object')return
    var str = []
    for(let i of arr){
        str.push(JSON.stringify(i))
    }
    return Array.from(new Set(str))
}
console.log(fun2(a));