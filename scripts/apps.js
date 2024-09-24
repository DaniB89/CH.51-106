
function Hello() {
    console.log("Hello there!");
}
let global = 0;
function init() {
    Hello();
    let temp = 1;
    global = temp;
    console.log("hello, we are talking about DOM");


    //console.log("hello, we are talking about DOM");
    //let temp = 1;
    //global = temp;
    //Hello();
}

//variable scope
let i=0

for(let i = 0; i < 10; i++) {
    //empty variable
}
window.onload = init;