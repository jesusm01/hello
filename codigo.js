function voltear (parentesis){
    var parentesisv = "",i=parentesis.length;
    for(i;i>0;i--){
      parentesisv += (parentesis[i-1]);
    }
    return parentesisv;
}

var palabra = "amor a roma";
var palabrav = voltear (palabra);
if(palabra == palabrav){
    console.log("Si es palindromo");
}
else
    console.log("No es palindromo");