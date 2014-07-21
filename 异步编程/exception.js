
// function task(callback) {
//     setTimeout(function() {
//         throw {
//             name: 'abc',
//             message: 'my exception'
//         };

//         callback.call(null);
//     }, 1000);
// }

// try {
//     task(function() {
//         console.log('function finished!')
//     });
// } catch (e) {
//     console.log(e.message)
// }



function task(callback) {
    setTimeout(function() {
        try {
            callback.call(null);
        } catch (e) {
            callback.call(null, e)
        }
    }, 1000);
}

task(function(err) {

    if (err) {
        console.log(err.message);
    } else {
        console.log('function finished!');
    }

    throw {
        name: 'abc',
        message: 'my exception'
    };
});



// function task(callback) {
//     setTimeout(function() {
//         var err;

//         try {
//             throw {
//                 name: 'abc',
//                 message: 'my exception'
//             };
//         } catch (e) {
//             err = e;
//         }

//         callback.call(null ,err)
//     }, 1000);
// }

// task(function(err) {
//     if (err) {
//         console.log(err.message);
//     } else {
//         console.log('function finished!');
//     }
// });

