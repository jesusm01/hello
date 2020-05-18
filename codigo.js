function voltear (parentesis){
    var parentesisv = "",i=parentesis.length;
    for(i;i>0;i--){
      parentesisv += (parentesis[i-1]);
    }
    return parentesisv;
}

function buscar (palabra){
    valores= [0,0];
    if(palabra.indexOf("(") != -1){
        valores[0] = palabra.indexOf("(");
        valores[1] = palabra.lastIndexOf(")");
        var nueva = palabra.slice(valores[0]+1,valores[1]);
        var volt = buscar (nueva);
        valores[0] = palabra.indexOf("(");
        valores[1] = palabra.lastIndexOf(")");
        var nuevainicio = palabra.slice(0,valores[0]);
        var nuevafinal = palabra.slice(valores[1]+1,palabra.length);
        var final = nuevainicio+volt+nuevafinal;
        return final;
    }
    else{
        var volteado = voltear(palabra);
        return volteado;
    }
}

var palabra = "foo(bar)";
console.log(buscar(palabra));