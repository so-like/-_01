function debounce(fn,delay){
    // 首先定义一个定时器
    var timer = null
    return function(){
        var _this = this,
        args = arguments
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(_this,args)
        }, delay);

    }
}


// 节流
function rer(fn,delay){
    // 首先获取当前事件
    var oldTime = Date.now()
    return function(){
        var _this = this,
        args = arguments,
        newTime = Date.now()
        if(newTime - oldTime >= delay){
            oldTime = Date.now()
            return fn.apply(_this,args)
        }
    }
}