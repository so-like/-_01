var str = 'dddddd.jd'
function Name(a){
    return a.substring(a.lastIndexOf('.')+1)
}
console.log(Name(str));


// 首先将url用.分开 然后将后边的出栈
function fun2(a){
    return a.split('.').pop().toLowerCase()
}
console.log(fun2(str));