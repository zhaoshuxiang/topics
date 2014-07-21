// 事件用来处理什么样的场景呢？

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


task1(function() {
    task2(function() {
        task3(function() {
            task4(function() {
                console.log("all is ok !")
            });
        })
    });
});