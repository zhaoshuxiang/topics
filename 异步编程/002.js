/* 用事件处理串行的异步 */
var events = require('events');
var util = require('util');

var help = new (events.EventEmitter)();

help.on('a', callbackA);
help.on('b', callbackB);
help.on('c', callbackC);
help.on('d', callbackD);

help.emit('a');

function actionA() {
    setTimeout(function() {
        help.emit('a');
    }, 1000);
}

function callbackA () {
    log('a ');
    actionB();
}

function actionB() {
    setTimeout(function() {
        help.emit('b');
    }, 1000);
}

function callbackB () {
    log('b ');
    actionC();
}

function actionC() {
    setTimeout(function() {
        help.emit('c');
    }, 1000);
}

function callbackC () {
    log('c ');
    actionD();
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