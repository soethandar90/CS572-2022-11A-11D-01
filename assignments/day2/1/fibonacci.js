const processfibonacci = function(number){
    if(number<=2){
        return 1;
    }else{
        return processfibonacci(number-1)+processfibonacci(number-2);
    }
}

const startFibonacci=function(n){
    let num = processfibonacci(Math.abs(n));
    if(n<0){
       return num * -1;
    }    
    return num;
}

let f = -10;
console.log("Fibonacci of "+f+" is "+ startFibonacci(f));

f = 10;
console.log("Fibonacci of "+f+" is "+ startFibonacci(f));