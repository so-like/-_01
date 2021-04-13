// 如何每隔一秒打印1234
for(let i=1;i<5;i++){
    setTimeout(() => {
        console.log(i);
    }, i*1000);
}

// 设置闭包
for(var i=1;i<5;i++){
    (function(i){
        setTimeout(() => {
            console.log(i);
        }, i*1000)
    })(i);
}