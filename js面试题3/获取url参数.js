let url = 'http://www.baidu.com/helpCenter.html?a=1&b&c=&d=百度&e=<script>alert(0)</script>'
function getUrl(url){
    // 首先将url分割 取后面部分
    try {
        let p = url.split('?')[1]
    // 然后将参数用&分割
    let o = p.split('&')
    let v = []
    for(let i of o){
        v[i.split('=')[0]] = [i.split('=')[1]]?[i.split('=')[1]]:''
    }
    return v
    } catch (error) {
        return null
    }
}
console.log(Object.assign({},getUrl(url)));

// Object.values 将一个对象转换为一个数组
// var a = [1,2,3]
// let obj = {...a}

// Object.assign(target,source)  将一个数组转换为对象也可以将一个对对象转换为数组 它有两个参数第一个是要转换的目标物
// 第二个是要转换的对象