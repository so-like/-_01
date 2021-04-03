let url ='https://wwbaidu.com'
// 首先创建一个http对象
var xhr = new XMLHttpRequest()
// 对象发送ajax
xhr.open('GET',url,true)
// 设置监听函数
xhr.onreadystatechange = function(){
    // 如果状态码等于4则说明发送成功
    if(this.readyState == 4)return
    // 如果状态码等于200则说明请求成功
    if(this.status == 200){
        // 请求成功就获取响应值
        handle(this.response)
    }else{
        // 如果失败就打印失败信息
        console.error(this.statusText)
    }
}

// 设置请求失败函数
// xhr.onerror = function(){
//     console.error(this.statusText)
// }

xhr.send(null)
