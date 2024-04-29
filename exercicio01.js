function soma(n1, n2 = 0, callSucess, callError){
    let resultado = n1 + n2;
    if (resultado % 2 === 0){
        callSucess(resultado)
    }else{
        callError(resultado)
    }
}
    const callSucess = (resultado) => {
        console.log("Sucesso, a soma é par: resultado " + resultado)
    }

    const callError = (resultado) => {
        console.log("Erro, a soma é ímpar: resultado " + resultado)
    }

    soma(9, 3, callSucess, callError);
