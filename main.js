let num1 = 1;
let num2 = 2;
let resultado = 0;

const calcular = function(){
    for(let i=0; i<=10; i++){
    resultado = num1 + num2;
    num1 = num2;
    num2 = resultado;

    
    }
    console.log(resultado)

}

calcular();





