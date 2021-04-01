// let a = "http://www.baidu.com/helpCenter.html?a=1&b&c=&d=百度&e=<script>alert(0)</script>"
let a = "http://www.baidu.com/helpCenter.html";
function fun(url) {
  try {
    // 首先将url地址以？分割取后半部分
    let p = url.split("?")[1];
    // 将后半部分以&分割
    let o = p.split("&");
    // 定义一个空对象
    let v = {};
    for (let i of o) {
      v[i.split("=")[0]] = [i.split("=")[1]] ? [i.split("=")[1]] : "";
    }
    return v;
  } catch (error) {
      return null
  }
}
console.log(fun(a));
