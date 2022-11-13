
function restar(numeroUno, numeroDos){
    return numeroUno - numeroDos;
}
function sumar(numeroUno, numeroDos){
    return numeroUno + numeroDos;
}
function producto(numeroUno, numeroDos){
    return numeroUno * numeroDos;
}
function division(numeroUno, numeroDos){
    if(numeroDos == 0){
        let error = "No se puede dividir por 0";
        return error;
    }else{
        return numeroUno / numeroDos;
    }

}
let resultado = 0;
let ciclo = true;
let numeroUno ;
let numeroDos ;
while(ciclo === true){
    let operacion = prompt( '¿qué operación queres hacer? +, *, -, /, use 0 para salir');
    switch (operacion) {
        case '-':
            numeroUno= parseFloat(prompt('ingrese un numero'));
            numeroDos= parseFloat(prompt( 'ingrese otro numero'));            
            resultado = restar(numeroUno, numeroDos)
            alert(resultado);
            break;
        case '+':
            numeroUno= parseFloat(prompt('ingrese un numero'));
            numeroDos= parseFloat(prompt( 'ingrese otro numero')); 
            resultado = sumar(numeroUno, numeroDos);
            alert(resultado);
            break;
        case '*':
            numeroUno= parseFloat(prompt('ingrese un numero'));
            numeroDos= parseFloat(prompt( 'ingrese otro numero')); 
            resultado = producto(numeroUno, numeroDos);
            alert(resultado);
            break;
        case '/':
            numeroUno= parseFloat(prompt('ingrese un numero'));
            numeroDos= parseFloat(prompt( 'ingrese otro numero')); 
            resultado = division(numeroUno, numeroDos);
            alert(resultado);
            break;
        case '0':
            ciclo = false;
            break;
        default: 
            alert('Ingreso no valido')
        break;
      
        
    }

}

alert('Gracias vuelva pronto');
