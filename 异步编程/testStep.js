var Step = require('./lib/step');

/* 串行执行异步任务 */
// Step(function() {
//     task(0, this);
// }, function() {
//     task(arguments[0], this);
// }, function() {
//     task(arguments[0], this);
// }, function(err, content) {
//     console.log('Total is: ' + arguments[0]);
// });

/* 并行执行异步任务 */
Step(function() {
    task1(this.parallel());
    task2(this.parallel());
}, function(err, content) {
    console.log('all is finished');
});

function task(args, callback) {
    setTimeout(function() {
        args = args + 1;
        console.log(args);

        callback.call(null, args);
    }, 1000)
}

function task1(callback) {
    setTimeout(function() {
        console.log('1');

        callback.call(null, 1);
    }, 1000)
}

function task2(callback) {
    setTimeout(function() {
        console.log('2');
        callback.call(null, 2);
    }, 3000)
}