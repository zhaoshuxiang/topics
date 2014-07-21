// 高阶函数
// 高阶函数是指可以把函数作为参考数，或者是将函数作为返回值的函数

function A() {
    return function() {

    };
}

function task() {

}

function B(task) {
    task.call(null,);
}


// 偏函数
// 创建函数的函数被称为偏函数且被创建的函数的参数或变量已经预置。

function abc() {

}

// 函数柯里化