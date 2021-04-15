function ajax(options){
    let xhr = new XMLHttpRequest
    options = options || {}
    options.type = (options.type || 'GET').toUpperCase()
    options.datatype = options.datatype || 'json'
    const params = options.data

    if(options.type == 'GET'){
        xhr.open('GET',options.url + '?' + params,true)
        xhr.send(null)
    }else if(options.type == 'POST'){
        xhr.open('POST',options.url,true)
        xhr.send(params)
    }

    // 添加监听
    xhr.onreadystatechange = function(){
        if(xhr.readyState ==4){
            const status = xhr.status
            if(status>=200 && status<300){
                options.success && options.success(xhr.responseText,xhr.responseXML)
            }else{
                options.fail && options.fail(status)
            }
        }
    }
}

// 发送
ajax({
    type:'GET',
    datatype:'json',
    url:'https://.....',
    success:function(responseText,responseXML){
        console.log(responseText);
    },
    fail:function(status){
        console.log(status);
    }

})