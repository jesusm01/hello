palabras = ["aba", "aa", "ad", "vcd", "aba"];

function problema (valores){
    var mayor = 0, i=0, res=[];
    for (i;i < valores.length;i++){
        if (valores[i].length > mayor){        
            mayor = valores[i].length;
        }
    }
    console.log(mayor);
    i = 0;
    for (i;i < valores.length;i++){
        if (valores[i].length == mayor){        
            res.push(valores[i]);
        }
    }
    return res;
}