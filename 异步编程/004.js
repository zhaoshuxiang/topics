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

Deferred.prototype.reolve = function(val) {
    this.promise.emit('sucess', val);
};

Deferred.prototype.reject = function(val) {
    this.promise.emit('failed', val);
};

Deferred.prototype.progress = function(i) {
    this.promise.emit('progress', i);
};

Deferred.prototype.pipe = function(callback) {

};

Deferred.when = function(prmoises, callback) {
    var len = prmoises.length;
    var count = 0;
    var result = [];

    prmoises.forEach(function(promise, index) {
        promise.then(function(val) {
            count = count + 1;

            result.push(val);

            if (callback && len === count) {
                callback.call(null, result);
            }
        });
    });
};

Deferred.when([task1(), task2(), task3()], function(res) {
    var total = 0;

    res.forEach(function(val, i) {
        total = total + val;
    });

    console.log(total)
});



function task1() {
    var deferred = new Deferred();
    var promise = deferred.promise;

    setTimeout(function() {
        deferred.reolve(1);
    }, 1000);

    return promise;
}

function task2() {
    var deferred = new Deferred();
    var promise = deferred.promise;

    setTimeout(function() {
        deferred.reolve(2);
    }, 3000);

    return promise;
}

function task3() {
    var deferred = new Deferred();
    var promise = deferred.promise;

    setTimeout(function() {
        deferred.reolve(3);
    }, 2000);

    return promise;
}