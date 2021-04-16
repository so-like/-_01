function fun(n){
    var num1 = 1,
    num2 = 1
    for(let i=2;i<n;i++){
        num2 += num1
        num1 = num2 - num1
    }
    return num2
}
console.log(fun(9));