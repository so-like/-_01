// 防抖
function debounce(fn,delay){
    // 首先定义一个定时器
    var timer = null
    // 闭包
    return function(){
        var _this = this;
        var args = arguments;
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(_this,args)
        }, delay);
    }
}

// 节流
function fun(fn,wait){
    // 首先获取当前时间
    var oldTime= Date.now()
    // 闭包再次调用
    return function(){
        var _this =this;
        var args = arguments;
        // 获取函数再次调用的时间
        var nowTime = Date.now()
        // 如果两次调用时间间隔大于设定的时间间隔那么就执行 然后再将全局作用域里的旧时间改为现在得时间
        if(nowTime - oldTime >= wait){
            oldTime = Date.now()
            return fn.apply(_this,args)
        }
    }
}
