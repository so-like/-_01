function debounce(fn,delay){
    var timer =null
    return function(){
        var context = this,
        args = arguments
        if(timer){
            clearTimeout(timer)
            timer = null
        }
        timer = setTimeout(() => {
            fn.apply(context,args)
        }, delay);
    }
}


// 节流
function fun(fn,delay){
    var oldTime = Date.now()
    return function(){
        var context = this,
        args = arguments
        var newTime =Date.now()
        if(newTime - oldTime>delay){
            oldTime = Date.now()
            fn.apply(context,args)
        }
    }
}