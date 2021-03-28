// function foo(i) {
//     if (i < 0)
//       return;
//     console.log('begin: ' + i);
//     foo(i - 1);
//     console.log('end: ' + i);
//   }
//   foo(2);             3210 0123

var createPet = function(name) {  // The outer function defines a variable called "name".
  return {
    setName: function(name) {    // The enclosed function also defines a variable called "name".
      name = name;               // How do we access the "name" defined by the outer function?
    }
  }
}