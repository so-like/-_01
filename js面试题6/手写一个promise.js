const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function myPromise(fn){
    // 定义初始状态
    var self = this
    // 初始化状态
    this.state = PENDING
    this.value = null
    // 定义回调函数
    var resolveCallbacks = []
    var rejectCallbacks = []
    // 执行函数
    function resolve(value){
        if(value instanceof myPromise){
            return value.then(resolve,reject)
        }
    }
    setTimeout(() => {
        // 改变状态和执行函数
        if(self.state == PENDING){
            self.state = RESOLVED
            self.value = value
            // 执行函数
            self.resolveCallbacks.forEach(callbacks=>{
                callbacks(value)
            })
        }
    }, timeout);
}