function fun(url){
    try {
        var p = url.split('?')[1]
    let k = p.split('&')
    var v = []
    for(let i of k){
        v[i.split('=')[0]] = [i.split('=')[1]]?[i.split('=')[1]]:''
    }
    return v
    } catch (error) {
        console.error('error')
    }
}
var a = 'https://www.bing.com/search?q=css%E5%8F%98%E9%80%8F%E6%98%8E'
console.log(fun(a));