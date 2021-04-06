// var a = [1,2,3,3,44,5]
// var str = []
// str[0] = a[0]
// for(let i=0;i<a.length;i++){
//     for(let j=0;j<str.length;j++){
//         if(str[j] ==a[i]){
//             break
//         }
//         if(j == str.length-1){
//             str.push(a[i])
//         }
//     }
// }
// console.log(str);

function fun(arr){
    var p = []
    p[0] = arr[0]
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<p.length;j++){
            if(p[j]==arr[i]){
                break
            }
            if(j ==p.length-1){
                p.push(arr[i])
            }
        }
        
    }
    return p
}
var a = [1,2,3,33,3,3,3]
console.log(fun(a));