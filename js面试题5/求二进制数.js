// a为一个字符串 b为几进制数
function two(a, b) {
  let arr = string(a),
    num = 0,
    k = arr.length;
  for (let i = 0; i < arr.length; i++) {
    num += Number(arr[k - 1]) * Math.pow(b, i);
    k--;
  }
  return num;
}
