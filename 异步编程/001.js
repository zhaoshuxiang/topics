function testAsync() {
    setTimeout(function(argument) {
        setTimeout(function(argument) {
            setTimeout(function(argument) {
                setTimeout(function(argument) {
                    setTimeout(function(argument) {
                        setTimeout(function(argument) {
                            setTimeout(function(argument) {
                                log('g');
                            }, 1000);
                            log('f ');
                        }, 1000);
                        log('e ');
                    }, 1000);
                    log('d ');
                }, 1000);
                log('c ');
            }, 1000);
            log('b ');
        }, 1000);
        log('a ');
    }, 1000);
}

function log(str) {
    process.stdout.write(str);
}

testAsync();