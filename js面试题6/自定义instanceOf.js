function myInstanceOf(left, right) {
  let proto = Object.getPrototypeOf(left);
  let prototype = right.prototype;
  while (true) {
    if (!proto) return false;
    if (proto == prototype) return true;
    // 如果没找到就沿着原型链继续查找
    proto = Object.getPrototypeOf(proto);
  }
}

function Father() {
  this.name = "父亲";
}
function Sun(like) {
  this.like = like;
}
Sun.prototype = new Father();
let p = new Sun();
console.log(myInstanceOf(p, Father));

// 手写一个instanceof
Function.myInstanceOf = function (left, right) {
  let proto = Object.getPrototypeOf(left);
  let prototype = right.prototype;
  while (true) {
    if (!proto) return false;
    if (proto == prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
};
