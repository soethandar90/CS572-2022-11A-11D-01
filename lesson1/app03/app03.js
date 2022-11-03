require("./instantHello.js");

//require("./talk.js"); not see good bye

//let goodbye = ... ; still not see good bye

//let goodbye = require("./talk"); //goodbye recieve function
//goodbye(); //invoke the function.

let talk = require("./talk");
const question = require("./question");
talk.func1();
//talk.greeting();
//talk.intro();

const answer = question.ask("What is the meaning of life?");
//console.log(answer);

