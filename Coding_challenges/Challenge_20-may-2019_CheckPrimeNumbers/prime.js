'use strict'

var checkPrimeNumbers = function(n){
    var counter = 0;
   for(var i=1; i<=n; i++){
     
    if(n%i == 0){
        counter = counter+1;
    }
    
   }
   if(counter == 2){
       console.log(n, "is a Prime Number.");
   }
   else{
       console.log(n,"is not a prime number.");
   }
}

var printPrimeNumbers = function(num){

    var counter=0;
    for( var i=1; i<=num; i++){

        for(var j=1; j<=i; j++){

            if(i%j == 0){
                
                counter = counter+1;
            }
        }
             if(counter == 2){
                 console.log(i);
        }
    }
}


console.log(checkPrimeNumbers(25));
console.log(printPrimeNumbers(50));