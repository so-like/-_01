// let a = "http://www.baidu.com/helpCenter.html?a=1&b&c=&d=百度&e=<script>alert(0)</script>"
// function fun(url){
//     try {
//     let p =url.split('?')[1]
//     let o =p.split('&')
//     var arr ={}
//     for(let i of o){
//         v[i.split('=')[0]] = [i.split('=')[1]]?[i.split('=')[1]]:''
//     }
//     return arr
//     } catch (error) {
//         return null
//     }
// }
// console.log(fun(a));


let a = "http://www.baidu.com/helpCenter.html?a=1&b&c=&d=百度&e=<script>alert(0)</script>"
// 获取url参数
function funP(arr){
    let p = arr.split('?')[1]
    let o = p.split('&')
    var v =[]
    for(let i of o){
        v[i.split('=')[0]] = [i.split('=')[1]]?[i.split('=')[1]]:''
    }
    return v
}
console.log(funP(a));