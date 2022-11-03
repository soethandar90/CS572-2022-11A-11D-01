const fibonacci = function(number){
    if(number<2){
return 1;
    }else{
return fibonacci(number-1)+fibonacci(number-2);
    }
}

let n = 43;
console.log("Fibonacci of "+n+" is "+ fibonacci(n));