function fun(fileName){
    // let str = fileName.split('.').pop().toLowerCase()
    // return str

    return fileName.substring(fileName.lastIndexOf('.') + 1)
}
var a = 'ddd.pppp'
console.log(fun(a));

    