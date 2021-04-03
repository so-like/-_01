const { response } = require("express");

fetch(url).then(function(response){
    return response.json()
}).then(function(data){
    console.log(data)
}).catch(function(error){
    console.log('error');
})


fetch(url).then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log('error');
})


// 计入异步 await会等待http请求 如果成功就调用resolve方法 如果失败就调用reject方法
try {
    let response = await fetch(url)
    let data = response.json()
    console.log(data);
} catch (error) {
    console.log('error');
}

// 原生js实现ajax
var url = 'https://www.baidu1.com'
var xhr = XMLHttpRequest()
xhr.open('GET',url,true)
// 添加监听
xhr.onreadystatechange = function(){
    if(this.readyStatus !== 4)return
    if(this.status ==200){
        console.log(this.response);
    }else{
        console.error('error')
    }
}
xhr.send()