var a = "http://www.111cn.net/sys/nginx/62888.Htm";
function fileName(fileName){
    // 两种方法 一种是通过substring方法返回.最后一次出现的位置 然后再到结束
    let pp= fileName.substring(fileName.lastIndexOf('.') + 1);

    // 通过.来进行分割.toLowerCase();转换为小写  .toUpperCase()转换为小写
    // let pp = fileName.split('.').pop()
    return pp
}
console.log(fileName(a));