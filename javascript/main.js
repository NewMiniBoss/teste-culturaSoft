// pintar pares
const listaPar = document.querySelectorAll('.par');
const trocaCor = document.querySelector('#btn');

trocaCor.onclick = function () {
    for (let i = 0; i < listaPar.length; i++) {
        const pares = listaPar[i];
        pares.classList.add('ativa');
    }
    console.log('false');
    alert('false');
}

// remover pinturas
const removeCor = document.querySelector('#btn-remove');

removeCor.onclick = function () {
    for (let i = 0; i < listaPar.length; i++) {
        const pares = listaPar[i];
        pares.classList.remove('ativa');
    }   
    console.log('true');
    alert('true');
}