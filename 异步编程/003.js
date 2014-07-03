/* 用事件处理并发的异步 */
var events = require('events');
var util = require('util');

var help = new(events.EventEmitter)();

var proxyCallback = function (eventName, callback) {
    proxyCallback.test = proxyCallback.test || 0;

    if (eventName === 'all') {
        proxyCallback.allCallback = callback;
    }

    return (function() {
        callback.call(null);
        proxyCallback.test ++;

        // tigger all event
        if (proxyCallback.test === 4) {
            proxyCallback.allCallback.call(null);
        }
    });
};

help.on('a', proxyCallback('a', callbackA));
help.on('b', proxyCallback('b', callbackB));
help.on('c', proxyCallback('c', callbackC));
help.on('d', proxyCallback('d', callbackD));
help.on('all', proxyCallback('all', callbackAll));

actionA();
actionB();
actionC();
actionD();

/******************** 下面的代码可以不用看，上面的才重要 ******************/

function actionA() {
    setTimeout(function() {
        help.emit('a');
    }, 1000);
}

function callbackA () {
    log('a ');
}

function actionB() {
    setTimeout(function() {
        help.emit('b');
    }, 1000);
}

function callbackB () {
    log('b ');
}

function actionC() {
    setTimeout(function() {
        help.emit('c');
    }, 5000);
}

function callbackC () {
    log('c ');
}

function actionD() {
    setTimeout(function() {
        help.emit('d');
    }, 1000);
}

function callbackD () {
    log('d ');
}

function log(str) {
    process.stdout.write(str);
}

function callbackAll() {
    console.log('all finished!')
}