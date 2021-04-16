function fun(filename){
    let str = filename.split('.').pop().toLowerCase()
    return str
}
console.log(fun('ppp.oooo'));