var d =  new Promise(function(onDone) {
    onDone('Hello World');
});
d.then(function(data) {
console.log(d);
});