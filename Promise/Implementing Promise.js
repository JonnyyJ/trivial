//A simple promise example
function getUserID(){
    return new Promise((resolve) =>{
        //Asynchronous request
        http.get(url, (results) =>{
            resolve(results.id)
        })
    })
}
getUserID().then((id)=>{
   //method
})

//Simple Promise implementing
function Promise(fn) {
    var value = null,
        callbacks = [];  //

    this.then = function (onFulfilled) {
        callbacks.push(onFulfilled);
    };

    function resolve(value) {
        callbacks.forEach(function (callback) {
            callback(value);
        });
    }

    fn(resolve);
}