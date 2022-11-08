//export function Token() {
//    return function (constructor: Function) {
//        constructor.prototype.course = "Course";
//    }
//}

export function Token(token:{course:string, canProgram:boolean}) {
    return function (constructor: Function) {
        constructor.prototype.course = token.course;
        constructor.prototype.canProgram=token.canProgram;
        if(token.canProgram){
            constructor.prototype.program=function(){
                console.log("I'm programming..");
            }
        }else{
            
        }
    }
}