var Q = require('./lib/q');



var deferredB = Q('a');


/* 使用Ｑ生成一个promise */

var promiseA = Q('a');
var promiseB = Q({a: 'a'});

/* 使用Q生成一个deferred */

var deferred = Q.defer();



// console.log(Q.isPromise(deferred));
// console.log(Q.isPromise(promiseA));

console.dir(promiseB.inspect());