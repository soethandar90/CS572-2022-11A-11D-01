const filename = "index.js";

const greeting = function(name){
    console.log("Hello ", filename);
}

const intro = function(){
    console.log("I am a node file callled ",filename);
}

module.exports.func1 = function(){ //declaring a function
    greeting("Hello")
    intro
}

