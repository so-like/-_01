// 修改valueOf方法
var i = 1
Function.prototype.valueOf = function(){
    return i++
}
var a = new Function(1)
if(a==1 && a==2 && a==3){
    console.log(1);
}

// 修改toString方法
const p ={
    i:1,
    toString:function(){
        return p.i++
    }
}
if(p==1 && p==2 && p==3){
    console.log(1);
}

// 添加get方法
var value = 0
Object.defineProperty(window,'p',{
    get:function(){
        return this.value += 1
    }
})
console.log(p==1 && p==2 && p==3);


// 还有一种
var a_ = 1;
var a = 2;
var _a = 3;
if(a_==1 && a== 2 &&_a==3) {
    console.log("Why hello there!")
}