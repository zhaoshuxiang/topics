var events = require('events');
var util = require('util');


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
        this.on('progress', progress);
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

Deferred.prototype.progress = function(i) {
    this.promise.emit('progress', i);
};

//  在任务身上动刀子，借助promise对象，把任务变成一个对象

function task5() {
    var deferred = new Deferred();
    var promise = deferred.promise;

    var i = 5;
    var timer;

    timer = setInterval(function() {

        if (i > 0) {
            deferred.progress(i);
            i = i - 1;
        } else {
            clearInterval(timer);
            deferred.reolve();
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



// Promise的状态只有两种：resolve 和 reject
// resolve 和 reject可以类比成0或1，使Promise可以进行逻辑运算，组合成
// Promise对象的逻辑合并