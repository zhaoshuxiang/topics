// 事件用来处理什么样的场景呢？


function task1(callback) {
    setTimeout(function() {
        // body...
        console.log('task1');
        callback.call(this);
    }, 1000);
}

function task2(callback) {
    setTimeout(function() {
        // body...
        console.log('task2');
        callback.call(this);
    }, 1000);
}

function task3(callback) {
    setTimeout(function() {
        // body...
        console.log('task3');
        callback.call(this);
    }, 1000);
}

function task4(callback) {
    setTimeout(function() {
        // body...
        console.log('task4');
        callback.call(this);
    }, 1000);
}


// task1(function() {
//     task2(function() {
//         task3(function() {
//             task4(function() {
//                 console.log("all is ok !")
//             });
//         })
//     });
// });

var events = require('events');
var util = require('util');


// 抽象设计


// PubSub 抽象设计允许应用程序把来源层的事件发布至其他层
// PubSub 更适合做一对多的事情

// var obj = events.EventEmitter)();

// obj.on('task1', function() {
//     task2(function() {
//         obj.emit('task2');
//     });
// });

// obj.on('task2', function() {
//     task3(function() {
//         obj.emit('task3');
//     });
// })

// obj.on('task3', function() {
//     task4(function() {
//         obj.emit('task4');
//     });
// })

// obj.on('task4', function() {
//     console.log('all is ok !')
// })

// task1(function() {
//     obj.emit('task1');
// });



// Promise抽象设计允许将简单的任务表示成对象，进而合并这些对象来表示更复杂的任务

var Promise = function() {
    events.EventEmitter.call(this);
};

util.inherits(Promise, events.EventEmitter);

Promise.prototype.then = function(sucess, failed, progress) {
    if (sucess) {
        this.once('sucess', sucess);
    }

    if (failed) {
        this.once('failed', sucess);
    }

    if (progress) {
        this.once('progress', sucess);
    }
};


var Deferred = function() {
    this.promise = new Promise();
};

Deferred.prototype.reolve = function() {
    this.promise.emit('sucess');
};

Deferred.prototype.reject = function() {
    this.promise.emit('failed');
};

Deferred.prototype.progress = function() {
    this.promise.emit('progress');
};



//  在任务身上动刀子，借助promise对象，把任务变成一个对象

function task5() {
    var promise = new Promise();

    var i = 5;
    var timer;

    timer = setInterval(function() {

        if (i > 0) {
            promise.progress(i);
            i = i - 1;
        } else {
            clearInterval(timer);
            promise.sucess();
        }
    }, 1000);

    return promise;
}

task5().then(function() {
    console.log('sucess');
}, function() {
    console.log('failed');
}, function(i) {
    console.log(i);
});

// 工作流控制 —— 迭代执行一组并行任务或串行任务
// Control Flow 控制流，就是代码执行的顺序（和控制手段）