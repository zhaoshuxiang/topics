function * foo( input ) {
  var res = yield input;
}

var g = foo(10);
g.next(); // { value: 10, done: false }
g.next(); // { value: undefined, done: true }