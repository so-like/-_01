// const promise = Promise.resolve()
// setImmediate(() => {
//   console.log('setImmediate');
// });
// promise.then(()=>{
//     console.log('promise')
// })
// process.nextTick(()=>{
//     console.log('nextTick')
// })


// nextTick
// promise
// setImmediate


setTimeout(() => {
    console.log(1);
}, 0);

setTimeout(() => {
    console.log(3);
}, 2);
setTimeout(() => {
    console.log(4);
}, 3);

setImmediate(()=>{
    console.log(5);
})