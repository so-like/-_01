// 防抖
function debounce(fn,delay){
    var timer = null,
    return function(){
        var content = this,
        args = arguments
        if(timer){
            clearTimeout(timer),
            timer = null
        }
        timer = setTimeout(() => {
            fn.apply(content,args)
        }, delay);
    }

}


// 节流
function fun(fn,delay){
    var oldTime = Date.now()
    return function(){
        var content = this,
        args = arguments,
        newTime = Date.now()
        if(newTime - oldTime > delay){
            oldTime = Date.now(),
            fn.apply(content,args)
        }
    }
}