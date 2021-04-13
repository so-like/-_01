// 使用闭包实现
// for(var i=1;i<5;i++){
//     (function(i){
//         setTimeout(() => {
//             console.log(i);
//         }, i*1000);
//     })(i)
// }

// 使用let块级作用域实现
for(let i=1;i<5;i++){
    setTimeout(() => {
        console.log(i);
    }, i*1000);
}


// 使用闭包实现
for(var i=0;i<5;i++){
    (function(i){
        setTimeout(() => {
            console.log(i);
        }, i*1000);
    })(i)
}