function ajax(options){
    let xhr = new XMLHttpRequest()
    options = options || {}
    options.type = (options.type || 'GET').toUpperCase()
    options.datatype = options.datatype || 'json'
    const params = options.data
    // 发送
    if(options.type == 'GET'){
        xhr.open('GET',options.url + '?' +params,true)
        xhr.send(null)
    }
    if(options.type == 'POST'){
        xhr.open('POST',options.url,true)
        xhr.send(params)
    }
    // 绑定监听
    xhr.onreadystatechange = function(){
        if(xhr.readyState ===4){
            let status = xhr.status
            if(status >=200 && status<300){
                options.success && options.success(xhr.responseText,xhr.responseXML)
            }else{
                options.file && options.file(status)
            }
        }
    }
}