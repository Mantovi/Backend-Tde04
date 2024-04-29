function somaPromise(num1, num2) {
    return new Promise((resolve, reject) => {
        let resultado = num1 + num2;
        if (resultado % 2 === 0) {
            resolve(resultado); // Se o resultado for par, resolve a Promise
        } else {
            reject(resultado); // Se o resultado for ímpar, rejeita a Promise
        }
    });
}

somaPromise(2, 3)
    .then(resultado => {
        console.log("Operação concluída com sucesso. O número somado é par:", resultado);
    })
    .catch(resultado => {
        console.log("Operação falhou. O número somado é ímpar:", resultado);
    }); //forma grande

somaPromise(2, 4)
    .then((resultado) => console.log("Operação concluída com sucesso. O número somado é par:", resultado))
    .catch((resultado) => console.log("Operação falhou. O número somado é ímpar:", resultado)); //forma resumida
    