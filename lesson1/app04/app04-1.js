console.log("1 - Start");

//declaration
//synchronous
myFunction = function(){
    console.log("2 - In SetTimeout");
}

myFunction();

//asynchronous
const laterWork = setTimeout(myFunction, 2000);

console.log("3 - End");

