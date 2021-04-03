let url = 'http://localhost:3000/'
// 创建http对象
var xhr = new XMLHttpRequest()
// 发送http
xhr.open('get',url,true)
// 绑定监听
xhr.onreadystatechange = function(){
    // 判断发送状态码
    if(this.readyState !==4)return
    // 判断请求状态码
    if(this.status == 200){
        // okj就获得请求
        console.log('请求成功')
    }else{
        console.error(this.statusText)
    }
}
xhr.send()