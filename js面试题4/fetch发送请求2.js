// fetch(url).then(function(response){
//     return response.json()
// }).then(function(date){
//     console.log(data)
// }).catch(function(e){
//     console.error('error')
// })


// 通过异步来发送fetch请求
try {
    let response = await fetch(url)
let data = response.json()
console.log(data);
} catch (e) {
    console.error('error')
}