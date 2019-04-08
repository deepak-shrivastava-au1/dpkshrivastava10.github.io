

var stack = [];
var i =0;

var operations = function(n){
    n = document.getElementById("txt").value;
     return n;
}
   


//Push operation
pushoperation= function(n) {
    n = operations();
    stack[i].push(n);
  console.log("clicked")
  }
   document.getElementById("push").addEventListener("click", pushoperation); 