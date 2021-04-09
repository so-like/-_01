// 自定义call函数
Function.prototype.myCall = function(obj){
    if(!obj || typeof obj !=='function'){
        console.error(error)
    }
    let args = [...arguments].splice(1),
    result = null
    obj = obj || window
    obj.fn = this
    result = obj.fn(...args)
    delete obj.fn
    return result
}

function Father(){
    this.name = '父亲'
}
function Sun(){
    this.like = like
    Father.myCall
}