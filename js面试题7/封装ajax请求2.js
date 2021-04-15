function ajax(options){
    // 首先创建一个xhr对象
    let xhr = new XMLHttpRequest()
    options = options || {}
    options.type = (options.type || 'GET').toUpperCase()
    options.datatype = options.datatype || 'json'
    const params = options.data

    if(options.type == 'GET'){
        xhr.open('GET',options.url + '?' +params,true)
        xhr.send(null)
    }else if(options.type === 'POST'){
        xhr.open('POST',options.url,true)
        xhr.send(params)
    }

    // 设置监听
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            const status = xhr.status
            // 如果成功就调用成功的回调
            if(status >=200 && status<300){
                options.success && options.success(xhr.responseText,xhr.responseXML)
            }else{
            // 如果失败就调用失败的回调
                options.fail && options.fail(status)
            }
        }
    }
}

ajax({
    type:'post',
    datatype:'json',
    url:'https://www.ppp.com',
    data:{},
    // 成功之后的回调
    success:function(text,xml){
        console.log(text);
    },
    // 失败之后的回调
    fail:function(status){
        console.log(status);
    }
})