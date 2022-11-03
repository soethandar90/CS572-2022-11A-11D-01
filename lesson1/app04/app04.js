console.log("1 - Start"); //synchronous

//declare the function and execute after 2 seconds
const laterWork = setTimeout(function(){
    console.log("2 - In SetTimeout");
}, 2000); //asynchronous, we started and move

console.log("3 - End"); //synchronous, execute after line 1

