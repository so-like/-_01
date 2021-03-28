// a = 12;
// console.log(this.a);
// this指的是全局对象window

function add (a, b) {
    return a + b;
}

function sub (a, b) {
    return a - b;
}
// add.apply(null, [6,5,8])
add.bind(sub,2,3)()