// 防抖
function debounce(fn,delay){
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
function fun(fn,delay){
    var oldTime = Date.now()
    return function(){
        var _this=this,
        args = arguments,
        newTime = Date.now()
        if(newTime - oldTime >delay){
            oldTime = Date.now()
            fn.apply(fn,args)
        }
    }
}