// 高阶函数
// 高阶函数是指可以把函数作为参考数，或者是将函数作为返回值的函数

function A() {
    return function() {

    };
}

function task() {

}

function B(task) {
    task.call(null, );
}


// 偏函数
// 创建函数的函数被称为偏函数且被创建的函数的参数或变量已经预置。

var isType = function(type) {
    return function(obj) {
        return toString.call(obj) == '[object ' + type + ']';
    };
};

var isString = isType('String');
var isFunction = isType('Function');