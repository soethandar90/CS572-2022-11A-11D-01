let test= "I am talking inside talk.js";
console.log(test);

const filename = "timestamp";
const drive = function(name){
    console.log("Please check the analysis log ",filename);
}

module.exports.talkEachOther = function(name){
    drive(name);
}