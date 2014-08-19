// 抽象设计
// PubSub 抽象设计允许应用程序把来源层的事件发布至其他层
// PubSub 更适合做一对多的事情, 多种状态
var events = require('events');
var obj = new (events.EventEmitter)();

obj.on('task1', function() {
    task2(function() {
        obj.emit('task2');
    });
});

obj.on('task2', function() {
    task3(function() {
        obj.emit('task3');
    });
})

obj.on('task3', function() {
    task4(function() {
        obj.emit('task4');
    });
})

obj.on('task4', function() {
    console.log('all is ok !')
})

task1(function() {
    obj.emit('task1');
});


/*  缺点什么？ */


function task1(callback) {
    setTimeout(function() {
        // body...
        console.log('task1 is OK!');
        callback.call(this);
    }, 1000);
}

function task2(callback) {
    setTimeout(function() {
        // body...
        console.log('task2 is OK!');
        callback.call(this);
    }, 1000);
}

function task3(callback) {
    setTimeout(function() {
        // body...
        console.log('task3 is OK!');
        callback.call(this);
    }, 1000);
}

function task4(callback) {
    setTimeout(function() {
        // body...
        console.log('task4 is OK!');
        callback.call(this);
    }, 1000);
}
