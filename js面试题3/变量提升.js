try{
    oh() //函数声明
    wow()   //函数表达式 未解析 执行报错，程序执行catch
    console.log(oh)  //函数声明有提升函数表达式没有提升
    console.log(wow)
}catch(e){
    setTimeout(function(){
        console.log(1,wow)
        console.log(1,oh)
    })
    
}
function oh(){
    console.log("更好玩的H5")
}
var wow = function (){
    console.log("更酷的H5")
}
var oh = "abcde"
var wow = "12345"