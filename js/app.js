addEventListener('load', () => {
    main();
});

function main() {
    let arreglo = [2, 8, 1, 4, 6, 9, 8, 3, 5, 8];
    let elemento = parseInt(prompt('Elemento a buscar:'));
    if (Number.isInteger(elemento)) {
       /* let posicion = buscarElemento(arreglo, elemento);
        if (posicion >= 0) {
            console.log('El elemento ' + elemento + ' se encuentra en la posición ' + (posicion + 1));
        } else {
            console.log('El elemento ' + elemento + ' no se encontró.');
        }*/
        let posiciones = buscarTodasLasposicones(arreglo, elemento);
        if (posiciones.length > 0) {
            console.log('El elemento ' + elemento + ' se encuentra en las posiciones ' + posiciones.map((el) => el + 1));
        } else {
            console.log('El elemento ' + elemento + ' no se encontró.')
        }

    } else {
        console.error('El elemento a buscar debe ser un número entero.');
    }
}

function buscarElemento(arreglo, elemento) {
    for(let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === elemento) {
            return i;
        }
    }
    return -1;
}

function buscarTodasLasposicones(arreglo, elemento) {
    let posiciones = [];
    for(let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === elemento) {
            posiciones.push(i);
        }
    }
    return posiciones;
}
